# Submission Checklist (assignment requirements)

This repository is prepared for submission for the "Automating Login Page with Playwright" assignment. The checklist below maps deliverables to repository contents.

- Playwright test code: All automated tests are in `tests/login.spec.ts` (Page Object usage via `pages/LoginPage.ts`).
- Functional test cases: See `TEST_CASES.md` which lists 10 functional test cases (5 positive, 5 negative).
- Automated tests: At least 4 test scripts are automated (see tests tagged `TC-P01`, `TC-P02`, `TC-N01`, `TC-N02`).
- README: `README.md` includes setup and run instructions, scripts, and report instructions.
- Test reports: `playwright-report/` (HTML) and `test-results/` (JSON, screenshots, videos) contain previous run artifacts.

## How to run (Windows)

1. Install dependencies and browsers:

```powershell
npm install
npx playwright install
```

2. Run all tests (headless):

```powershell
npm test
```

3. Run only the four minimum automated tests required by the assignment:

```powershell
npx playwright test -g "TC-P01|TC-P02|TC-N01|TC-N02"
```

4. Open the HTML report from the last run:

```powershell
# Use the built-in reporter server
npx playwright show-report playwright-report

# or open file directly
Start-Process "playwright-report\index.html"
```

## Optional improvements (suggested)

- Add CI workflow that publishes the report to artifacts or GitHub Pages for reviewer access.
- Add a small CONTRIBUTING.md describing how to add more test cases and run subset tags.