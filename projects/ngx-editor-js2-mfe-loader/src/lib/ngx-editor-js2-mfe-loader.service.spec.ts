import { TestBed } from '@angular/core/testing';

import { NgxEditorJs2MfeLoaderService } from './ngx-editor-js2-mfe-loader.service';

describe('NgxEditorJs2MfeLoaderService', () => {
  let service: NgxEditorJs2MfeLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorJs2MfeLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
