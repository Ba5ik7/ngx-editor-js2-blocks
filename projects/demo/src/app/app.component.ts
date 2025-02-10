import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar.component';
import { HeroComponent } from './components/hero.component';
import { DocumentComponent } from './components/document.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HeroComponent, DocumentComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <main>
      <app-hero></app-hero>
      <app-document></app-document>
    </main>
  `,
  styles: [
    `
      main {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3em;
        app-document {
          width: 100%;
          max-width: 800px;
        }
      }
      app-nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
      }
    `,
  ],
})
export class AppComponent {}
