import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorJs2MfeLoaderComponent } from './ngx-editor-js2-mfe-loader.component';

describe('NgxEditorJs2MfeLoaderComponent', () => {
  let component: NgxEditorJs2MfeLoaderComponent;
  let fixture: ComponentFixture<NgxEditorJs2MfeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEditorJs2MfeLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorJs2MfeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
