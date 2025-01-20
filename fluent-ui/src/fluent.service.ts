import { Injectable } from '@angular/core';
import {
  ButtonDefinition,
  FluentDesignSystem,
  setTheme,
} from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';

@Injectable({
  providedIn: 'root',
})
export class FluentService {
  constructor() {
    setTheme(webLightTheme);
    ButtonDefinition.define(FluentDesignSystem.registry);
  }
}
