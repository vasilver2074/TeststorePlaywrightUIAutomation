import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { OrderPageLocators } from "./OrderPageLocators";
import { step } from "../../helpers/decoracors/step";

export class OrderPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: OrderPageLocators = new OrderPageLocators(
        this.page.locator('#wrapper')
    );

    async fillAlias(alias: string): Promise<void> {
        await this.locators.aliasLocator.fill(alias);
    };

    async fillCompany(company: string): Promise<void> {
        await this.locators.companyLocator.fill(company);
    };

    async fillAddress(address: string): Promise<void> {
        await this.locators.addressLocator.fill(address);
    };

    async fillAddressComplement(addressComplement: string): Promise<void> {
        await this.locators.addressComplementLocator.fill(addressComplement);
    };

    async fillCity(city: string): Promise<void> {
        await this.locators.cityLocator.fill(city);
    };

    async selectState(stateValue: string): Promise<void> {
        await this.locators.stateLocator.selectOption(stateValue);
    };

    async fillZipPostalCode(zipPostalCode: string): Promise<void> {
        await this.locators.zipPostalCodeLocator.fill(zipPostalCode);
    };

    async fillPhone(phone: string): Promise<void> {
        await this.locators.phoneLocator.fill(phone);
    };

    async clickContinueButton(): Promise<void> {
        await this.locators.continueButtonLocator.click();
    };

    @step("Fill Order Form")
    async fillOrderForm(alias: string, company: string, address: string, addressComplement: string, city: string, stateValue: string, zipPostalCode: string, phone: string): Promise<void> {
        await this.fillAlias(alias);
        await this.fillCompany(company);
        await this.fillAddress(address);
        await this.fillAddressComplement(addressComplement);
        await this.fillCity(city);
        await this.selectState(stateValue);
        await this.fillZipPostalCode(zipPostalCode);
        await this.fillPhone(phone);
    };

    @step("Get Personal Information Text")
    async getPersonalInformationText(): Promise<string> {
        await this.page.waitForLoadState('networkidle');
        await this.locators.personalInformationLocator.waitFor({ state: 'visible' });
        return await this.locators.personalInformationLocator.innerText();
    };

}
