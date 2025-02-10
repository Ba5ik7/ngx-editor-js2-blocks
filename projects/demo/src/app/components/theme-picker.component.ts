import { Component, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {
  DocsSiteTheme,
  ThemePickerService,
} from '../services/theme-picker.service';

// Menu Item
@Component({
  selector: 'app-theme-picker-menu-item',
  imports: [MatMenuItem, MatIcon],
  template: `
    <button mat-menu-item>
      @if (isCurrentTheme(); as isCurrentTheme) {
      <mat-icon class="docs-theme-selected-icon">radio_button_checked</mat-icon>
      } @else {
      <mat-icon>radio_button_unchecked</mat-icon>
      }
      <span>{{ theme().displayName }}</span>
      <svg
        matMenuItemIcon
        class="theme-example-icon"
        width="80"
        height="80"
        viewBox="0 0 80 80"
      >
        <path
          class="theme-example-background"
          d="M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z"
        />
        <path
          [attr.fill]="theme().color"
          d="M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z"
        />
        <path [attr.fill]="theme().color" d="M0 0h80v17.24H0V0z" />
      </svg>
    </button>
  `,
  styles: [
    `
      :host {
        .theme-example-icon {
          margin-right: 0;
          margin-left: 24px;
          order: 1;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: solid 1px
            color-mix(in srgb, var(--mat-sys-outline-variant) 50%, transparent);

          .theme-example-background {
            fill: var(--mat-sys-surface-container-lowest);
          }
        }
      }
    `,
  ],
})
export class ThemePickerMenuItemComponent {
  theme = input.required<DocsSiteTheme>();
  isCurrentTheme = input.required<boolean>();
}
// Menu
@Component({
  selector: 'app-theme-picker',
  imports: [
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    MatTooltip,
    MatSlideToggle,
    ThemePickerMenuItemComponent,
    MatMenuItem,
  ],
  template: `
    <button
      mat-icon-button
      [mat-menu-trigger-for]="themeMenu"
      matTooltip="Select a theme for the documentation"
    >
      <mat-icon>format_color_fill</mat-icon>
    </button>

    <mat-menu #themeMenu="matMenu" xPosition="before">
      <div mat-menu-item>
        <mat-slide-toggle
          [checked]="darkMode()"
          (toggleChange)="toggleDarkMode()"
          >Dark Mode</mat-slide-toggle
        >
      </div>
      @for (theme of themes; track $index) {
      <app-theme-picker-menu-item
        [theme]="theme"
        [isCurrentTheme]="theme.name === currentTheme()"
        (click)="selectTheme(theme.name)"
      ></app-theme-picker-menu-item>
      }
    </mat-menu>
  `,
  styles: [
    `
      @use '@angular/material' as mat;
      :host {
        button {
          @include mat.icon-overrides(
            (
              color: var(--mat-sys-primary),
            )
          );
        }
      }
    `,
  ],
})
export class ThemePickerComponent {
  themePickerService = inject(ThemePickerService);
  themes = ThemePickerService.THEMES;
  currentTheme = this.themePickerService.currentTheme;
  darkMode = this.themePickerService.darkMode;

  selectTheme(theme: string): void {
    this.themePickerService.userSelectedTheme.set(theme);
  }

  toggleDarkMode(): void {
    this.themePickerService.darkMode.set(!this.darkMode());
  }
}
