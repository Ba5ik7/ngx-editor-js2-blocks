import {
  computed,
  Injectable,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';

export interface DocsSiteTheme {
  name: string;
  displayName: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemePickerService {
  static THEME_EXAMPLE_ICON = 'assets/img/theme-demo-icon.svg';
  static DEFAULT_THEME = 'cyan-palette';
  static THEME_STRORAGE_KEY: string = 'theme-picker-current-name';
  static DARK_MODE_STRORAGE_KEY: string = 'dark-mode';
  static THEMES: DocsSiteTheme[] = [
    {
      displayName: 'Red Palette',
      name: 'red-palette',
      color: '#ffd9d4',
    },
    {
      displayName: 'Green Palette',
      name: 'green-palette',
      color: '#76ff61',
    },
    {
      displayName: 'Blue Palette',
      name: 'blue-palette',
      color: '#e0e0fe',
    },
    {
      displayName: 'Yellow Palette',
      name: 'yellow-palette',
      color: '#eaea01',
    },
    {
      displayName: 'Cyan Palette',
      name: 'cyan-palette',
      color: '#00fbfb',
    },
    {
      displayName: 'Magenta Palette',
      name: 'magenta-palette',
      color: '#ffd6f5',
    },
    {
      displayName: 'Orange Palette',
      name: 'orange-palette',
      color: '#ffdcc7',
    },
    {
      displayName: 'Chartreuse Palette',
      name: 'chartreuse-palette',
      color: '#82ff0d',
    },
    {
      displayName: 'Spring-Green Palette',
      name: 'spring-green-palette',
      color: '#62ff93',
    },
    {
      displayName: 'Azure Palette',
      name: 'azure-palette',
      color: '#d6e3fe',
    },
    {
      color: '#810081',
      displayName: 'Violet Palette',
      name: 'violet-palette',
    },
    {
      displayName: 'Rose Palette',
      name: 'rose-palette',
      color: '#ffd8e1',
    },
  ];

  darkMode = signal<boolean>(
    localStorage.getItem(ThemePickerService.DARK_MODE_STRORAGE_KEY) === 'true'
  );
  darkModeResource = resource({
    params: () => this.darkMode(),
    loader: async ({ params: darkMode }) => {
      await localStorage.setItem(
        ThemePickerService.DARK_MODE_STRORAGE_KEY,
        darkMode.toString()
      );
    },
  });

  userSelectedTheme = signal<string>(
    localStorage.getItem(ThemePickerService.THEME_STRORAGE_KEY) ?? ThemePickerService.DEFAULT_THEME
  );
  currentTheme = linkedSignal<string, string>({
    source: this.userSelectedTheme,
    computation: (newTheme, previous) => {
      return this.setThemeStyleAndLocalStorage(newTheme)
        ? newTheme
        : previous?.value ?? ThemePickerService.DEFAULT_THEME;
    },
  });

  setThemeStyleAndLocalStorage(newTheme: string) {
    localStorage.setItem(ThemePickerService.THEME_STRORAGE_KEY, newTheme);
    document.body.className = `${newTheme} ${
      this.darkMode() ? 'dark-mode' : 'light-mode'
    }`;
    return true;
  }
}
