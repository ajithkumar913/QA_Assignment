/**
 * testData.ts — Centralized test data for login test cases.
 *
 * Improvements over original:
 * - Added SecurityCredentials group for injection / XSS tests
 * - Added BoundaryCredentials group for length / whitespace / unicode tests
 * - Typed ExpectedMessages with `as const` for autocomplete safety
 * - Added SuccessPage constants for post-login assertions
 */

export interface LoginCredentials {
  username: string;
  password: string;
  description: string;
}

// ─── Valid Credentials ───────────────────────────────────────────────────────

export const ValidCredentials: LoginCredentials = {
  username: 'student',
  password: 'Password123',
  description: 'Valid registered user',
};

// ─── Invalid Credentials ─────────────────────────────────────────────────────

export const InvalidCredentials = {
  wrongUsername: {
    username: 'wronguser',
    password: 'Password123',
    description: 'Invalid username with valid password',
  } as LoginCredentials,

  wrongPassword: {
    username: 'student',
    password: 'WrongPassword',
    description: 'Valid username with invalid password',
  } as LoginCredentials,

  emptyUsername: {
    username: '',
    password: 'Password123',
    description: 'Empty username with valid password',
  } as LoginCredentials,

  emptyPassword: {
    username: 'student',
    password: '',
    description: 'Valid username with empty password',
  } as LoginCredentials,

  bothEmpty: {
    username: '',
    password: '',
    description: 'Both username and password empty',
  } as LoginCredentials,

  caseSensitiveUsername: {
    username: 'Student',
    password: 'Password123',
    description: 'Username with wrong case (Student vs student)',
  } as LoginCredentials,

  caseSensitivePassword: {
    username: 'student',
    password: 'password123',
    description: 'Password with wrong case (password123 vs Password123)',
  } as LoginCredentials,
};

// ─── Security / Edge Case Credentials ────────────────────────────────────────

export const SecurityCredentials = {
  sqlInjection: {
    username: "' OR '1'='1",
    password: "' OR '1'='1",
    description: 'SQL injection attempt in both fields',
  } as LoginCredentials,

  xssUsername: {
    username: '<script>alert("xss")</script>',
    password: 'Password123',
    description: 'XSS payload in username field',
  } as LoginCredentials,

  xssPassword: {
    username: 'student',
    password: '<script>alert("xss")</script>',
    description: 'XSS payload in password field',
  } as LoginCredentials,
};

// ─── Boundary Credentials ────────────────────────────────────────────────────

export const BoundaryCredentials = {
  whitespaceUsername: {
    username: '   ',
    password: 'Password123',
    description: 'Username containing only spaces',
  } as LoginCredentials,

  leadingSpaceUsername: {
    username: ' student',
    password: 'Password123',
    description: 'Username with leading whitespace',
  } as LoginCredentials,

  trailingSpaceUsername: {
    username: 'student ',
    password: 'Password123',
    description: 'Username with trailing whitespace',
  } as LoginCredentials,

  veryLongUsername: {
    username: 'a'.repeat(256),
    password: 'Password123',
    description: '256-character username',
  } as LoginCredentials,

  veryLongPassword: {
    username: 'student',
    password: 'P'.repeat(256),
    description: '256-character password',
  } as LoginCredentials,

  unicodeUsername: {
    username: 'stüdent',
    password: 'Password123',
    description: 'Username with unicode characters',
  } as LoginCredentials,
};

// ─── Expected Messages ────────────────────────────────────────────────────────

export const ExpectedMessages = {
  success: 'Logged In Successfully',
  invalidUsername: 'Your username is invalid!',
  invalidPassword: 'Your password is invalid!',
  logoutButton: 'Log out',
} as const;

// ─── Page URLs ────────────────────────────────────────────────────────────────

export const PageURLs = {
  login: '/practice-test-login/',
  successPattern: /.*logged-in-successfully.*/,
  loginPattern: /.*practice-test-login.*/,
} as const;
