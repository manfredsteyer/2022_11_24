import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabbedPaneComponent } from './tabbed-pane';
import { UiConfig } from './ui-config';

@NgModule({
  imports: [CommonModule],
  declarations: [TabComponent, TabbedPaneComponent],
  exports: [TabComponent, TabbedPaneComponent],
})
export class SharedUiUiModule {
  static forRoot(config?: UiConfig): ModuleWithProviders<SharedUiUiModule> {

    return {
      ngModule: SharedUiUiModule,
      providers: [provideUi(config)],
    };
  }
}

// Provide-Funktion für Standalone Components
export function provideUi(config?: UiConfig): Provider[] {
  const defaultConfig: UiConfig = {
    navigationPostion: 'top',
  };

  return [{ provide: UiConfig, useValue: config ?? defaultConfig }];
}
