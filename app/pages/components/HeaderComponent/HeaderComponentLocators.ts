import { Locator } from '@playwright/test';
import { BasePageLocators } from '../../BasePage/BasePageLocators';

export class HeaderComponentLocators extends BasePageLocators {
  readonly profileButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Profile',
  });

  readonly searchFieldLocator: Locator = this.baseLocator.getByRole('textbox', { name: 'Search' });

  readonly countSearchIconsItemsLocator: Locator = this.baseLocator.locator('.ui-menu-item');

  readonly navigateToSighnInPageLocator: Locator = this.baseLocator.getByRole('link', {
    name: ' Sign in',
  });

  readonly signOutPageLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Sign out',
    exact: true,
  });

  readonly accessoriesLinkLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Accessories',
    exact: true,
  });

  readonly clothesLinkLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Clothes',
    exact: true,
  });

  readonly artLinkLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Art',
    exact: true,
  });
}
