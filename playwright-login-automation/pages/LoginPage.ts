import { Page, Locator, expect } from '@playwright/test';

/**
 * LoginPage - Page Object Model for the Practice Test Automation login page.
 * Encapsulates all selectors and interactions for the login page.
 *
 * Improvements:
 * - Added waitForPageReady helper
 * - Added softAssert-friendly getters
 * - Added clickLogout method
 * - Added clearAndFill to handle autofill edge cases
 * - Added getErrorText convenience method
 */
export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;
  readonly logoutButton: Locator;
  readonly pageHeading: Locator;
  readonly postLoginHeading: Locator;

  // Constants
  static readonly URL = '/practice-test-login/';
  static readonly VALID_USERNAME = 'student';
  static readonly VALID_PASSWORD = 'Password123';
  static readonly SUCCESS_TEXT = 'Logged In Successfully';
  static readonly LOGOUT_TEXT = 'Log out';
  static readonly ERROR_INVALID_USERNAME = 'Your username is invalid!';
  static readonly ERROR_INVALID_PASSWORD = 'Your password is invalid!';
  static readonly SUCCESS_URL_PATTERN = /.*logged-in-successfully.*/;
  static readonly LOGIN_URL_PATTERN = /.*practice-test-login.*/;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
    this.successMessage = page.locator('.post-title');
    this.logoutButton = page.locator('.wp-block-button__link');
    this.pageHeading = page.locator('h2');
    this.postLoginHeading = page.locator('.post-title');
  }

  // ─── Navigation ─────────────────────────────────────────────────────────────

  /**
   * Navigate to the login page and wait for it to be ready
   */
  async navigate(): Promise<void> {
    await this.page.goto(LoginPage.URL);
    await this.page.waitForLoadState('domcontentloaded');
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  // ─── Actions ────────────────────────────────────────────────────────────────

  /**
   * Fill in the username field (clears first to avoid autofill conflicts)
   */
  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.clear();
    await this.usernameInput.fill(username);
  }

  /**
   * Fill in the password field (clears first to avoid autofill conflicts)
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  /**
   * Click the submit/login button
   */
  async clickSubmit(): Promise<void> {
    await this.submitButton.waitFor({ state: 'visible' });
    await this.submitButton.click();
  }

  /**
   * Click the logout button on the success page
   */
  async clickLogout(): Promise<void> {
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
  }

  /**
   * Perform a full login action
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  /**
   * Login with the known valid credentials (convenience method)
   */
  async loginWithValidCredentials(): Promise<void> {
    await this.login(LoginPage.VALID_USERNAME, LoginPage.VALID_PASSWORD);
  }

  // ─── Assertions ─────────────────────────────────────────────────────────────

  /**
   * Assert successful login: heading visible and contains success text
   */
  async assertLoginSuccess(): Promise<void> {
    await expect(this.postLoginHeading).toBeVisible();
    await expect(this.postLoginHeading).toContainText(LoginPage.SUCCESS_TEXT);
  }

  /**
   * Assert an error message is visible with the expected text
   */
  async assertErrorMessage(expectedText: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedText);
  }

  /**
   * Assert the logout button is visible and has the correct label
   */
  async assertLogoutButtonVisible(): Promise<void> {
    await expect(this.logoutButton).toBeVisible();
    await expect(this.logoutButton).toContainText(LoginPage.LOGOUT_TEXT);
  }

  /**
   * Assert the URL matches the success page pattern
   */
  async assertSuccessUrl(): Promise<void> {
    await expect(this.page).toHaveURL(LoginPage.SUCCESS_URL_PATTERN);
  }

  /**
   * Assert the user remains on the login page (failed login scenario)
   */
  async assertStillOnLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(LoginPage.LOGIN_URL_PATTERN);
  }

  /**
   * Assert that no error message is currently visible
   */
  async assertNoErrorVisible(): Promise<void> {
    await expect(this.errorMessage).not.toBeVisible();
  }

  // ─── Getters ────────────────────────────────────────────────────────────────

  /**
   * Get the current error message text content
   */
  async getErrorText(): Promise<string> {
    await this.errorMessage.waitFor({ state: 'visible' });
    return (await this.errorMessage.textContent()) ?? '';
  }

  /**
   * Get the page title
   */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Get current value of the username input
   */
  async getUsernameValue(): Promise<string> {
    return this.usernameInput.inputValue();
  }

  /**
   * Get current value of the password input
   */
  async getPasswordValue(): Promise<string> {
    return this.passwordInput.inputValue();
  }

  /**
   * Check if username field is empty
   */
  async isUsernameEmpty(): Promise<boolean> {
    return (await this.usernameInput.inputValue()).trim() === '';
  }

  /**
   * Check if password field is empty
   */
  async isPasswordEmpty(): Promise<boolean> {
    return (await this.passwordInput.inputValue()).trim() === '';
  }
}
