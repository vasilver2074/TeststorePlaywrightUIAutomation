import { Locator } from '@playwright/test';

export class BaseComponentsPage {
  protected baseLocator: Locator;

  constructor(baseLocator: Locator) {
    this.baseLocator = baseLocator;
  }
}
