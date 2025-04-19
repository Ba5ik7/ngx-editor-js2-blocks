import { InjectionToken, Type } from '@angular/core';

export type LoadMfeFn = (
  remoteUrl: string,
  exposedModule: string
) => Promise<Type<unknown>>;

export const LOAD_MFE_COMPONENT = new InjectionToken<LoadMfeFn>(
  'LoadMfeComponent',
  {
    providedIn: 'root',
    factory: () => () => {
      throw new Error('[NgxEditorJs2] No MFE loader function provided.');
    },
  }
);