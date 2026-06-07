# 🎭 Playwright Login Automation Framework

![Playwright Tests](https://github.com/<your-username>/playwright-login-automation/actions/workflows/playwright.yml/badge.svg)

Automated test suite for the [Practice Test Automation Login Page](https://practicetestautomation.com/practice-test-login/) built with **Playwright** and **TypeScript**.

---

## 📁 Project Structure

```
playwright-login-automation/
├── pages/
│   └── LoginPage.ts          # Page Object Model for the login page
├── tests/
│   └── login.spec.ts         # All test cases (positive + negative + edge + security + boundary + session)
├── utils/
│   └── testData.ts           # Centralized test data and credentials
├── test-results/             # JSON test output (auto-generated)
├── playwright-report/        # HTML test report (auto-generated)
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

---

## ✅ Test Case Summary

### 🟢 Positive (TC-P01–TC-P05)
| ID | Description | Tag |
|----|-------------|-----|
| TC-P01 | Successful login with valid credentials | @positive @smoke |
| TC-P02 | "Logged In Successfully" message appears | @positive @smoke |
| TC-P03 | Logout button visible after login | @positive |
| TC-P04 | URL redirects to success page | @positive |
| TC-P05 | Page title is non-empty | @positive |

### 🔴 Negative (TC-N01–TC-N05)
| ID | Description | Tag |
|----|-------------|-----|
| TC-N01 | Invalid username → error message | @negative @smoke |
| TC-N02 | Invalid password → error message | @negative @smoke |
| TC-N03 | Empty username → error message | @negative |
| TC-N04 | Empty password → error message | @negative |
| TC-N05 | Both empty → error message | @negative |

### 🔵 Edge Cases (EC-01–EC-05)
| ID | Description | Tag |
|----|-------------|-----|
| EC-01 | Wrong-case username rejected | @negative |
| EC-02 | Wrong-case password rejected | @negative |
| EC-03 | All form elements visible & interactable | @positive |
| EC-04 | No error on initial page load | @positive |
| EC-05 | Password field masks input (type=password) | @positive |

### 🔐 Security (SC-01–SC-03)
| ID | Description | Tag |
|----|-------------|-----|
| SC-01 | SQL injection rejected, does not bypass auth | @negative |
| SC-02 | XSS in username field does not execute | @negative |
| SC-03 | XSS in password field does not execute | @negative |

### 📏 Boundary (BC-01–BC-05)
| ID | Description | Tag |
|----|-------------|-----|
| BC-01 | Whitespace-only username rejected | @negative |
| BC-02 | Leading whitespace in username rejected | @negative |
| BC-03 | Trailing whitespace in username rejected | @negative |
| BC-04 | 256-char username handled gracefully | @negative |
| BC-05 | Unicode username handled gracefully | @negative |

### 🔄 Session & Navigation (SS-01–SS-03)
| ID | Description | Tag |
|----|-------------|-----|
| SS-01 | Logout works after successful login | @positive |
| SS-02 | Back button after logout doesn't restore session | @negative |
| SS-03 | Direct URL navigation behaviour is observable | @positive |

**Total: 23 automated test cases across 2 browsers = 46 test runs**

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher

### Install
```bash
npm install
npx playwright install
```

---

## ▶️ Running Tests

```bash
# All tests (headless)
npm test

# Headed mode
npm run test:headed

# By tag
npm run test:smoke      # @smoke only
npm run test:positive   # @positive only
npm run test:negative   # @negative only

# Specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox

# Specific test by name
npx playwright test -g "TC-P01"

# Interactive UI mode
npm run test:ui

# Debug mode
npm run test:debug
```

---

## 📊 Reports

```bash
npm run test:report
```

Opens an interactive HTML report with pass/fail status, step traces, screenshots, and video on failure.

---

## 🏗️ Architecture

```
Test File (login.spec.ts)
       ↓ calls methods on
Page Object (LoginPage.ts)
       ↓ uses data from
Test Data (testData.ts)
```

**Pattern:** Page Object Model (POM)  
**Benefits:** Maintainability, Reusability, Readability, Scalability

---

## 🔐 Test Credentials

| Type | Username | Password |
|------|----------|----------|
| Valid | `student` | `Password123` |
| Invalid username | `wronguser` | `Password123` |
| Invalid password | `student` | `WrongPassword` |

---


