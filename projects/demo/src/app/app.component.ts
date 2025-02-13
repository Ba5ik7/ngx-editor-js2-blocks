import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar.component';
import { HeroComponent } from './components/hero.component';
import { DocumentComponent } from './components/document.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HeroComponent, DocumentComponent, FooterComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <main>
      <app-hero></app-hero>
      <app-document></app-document>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3em;
          margin-top: 56px;
          app-document {
            width: 100%;
            max-width: 800px;
            margin-bottom: 3em;
          }
        }
        app-nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
        }
      }
    `,
  ],
})
export class AppComponent {}
