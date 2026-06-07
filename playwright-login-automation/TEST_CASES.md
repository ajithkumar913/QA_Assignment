# Functional Test Cases (required 10)

This file lists 10 functional test cases (5 positive, 5 negative) required by the assignment and maps them to the automated tests present in the repository.

## Positive Test Cases (5)

1. TC-P01 — Successful login with valid credentials
   - Automated: `tests/login.spec.ts` -> test name: "TC-P01 @positive @smoke — Should login successfully with valid credentials"

2. TC-P02 — "Logged In Successfully" message appears after login
   - Automated: `tests/login.spec.ts` -> "TC-P02 @positive @smoke — Should display \"Logged In Successfully\" message after login"

3. TC-P03 — Logout button visible and interactable after login
   - Automated: `tests/login.spec.ts` -> "TC-P03 @positive — Should show logout button after successful login"

4. TC-P04 — URL redirects to success page after login
   - Automated: `tests/login.spec.ts` -> "TC-P04 @positive — Should redirect to success URL after login"

5. TC-P05 — Login page has a non-empty browser tab title
   - Automated: `tests/login.spec.ts` -> "TC-P05 @positive — Should have correct page title on login page"

## Negative Test Cases (5)

1. TC-N01 — Invalid username shows an error
   - Automated: `tests/login.spec.ts` -> "TC-N01 @negative @smoke — Should show error for invalid username"

2. TC-N02 — Invalid password shows an error
   - Automated: `tests/login.spec.ts` -> "TC-N02 @negative @smoke — Should show error for invalid password"

3. TC-N03 — Empty username shows an error
   - Automated: `tests/login.spec.ts` -> "TC-N03 @negative — Should show error when username is empty"

4. TC-N04 — Empty password shows an error
   - Automated: `tests/login.spec.ts` -> "TC-N04 @negative — Should show error when password is empty"

5. TC-N05 — Both fields empty shows an error (username error validated first)
   - Automated: `tests/login.spec.ts` -> "TC-N05 @negative — Should show error when both username and password are empty"

## Notes

- The repository already automates these 10 functional test cases (all are present in `tests/login.spec.ts`).
- Tags are used (`@positive`, `@negative`, `@smoke`) so you can run the subsets with the provided npm scripts, e.g. `npm run test:positive` or `npm run test:negative`.
- To run at least 4 tests specifically (assignment minimum), run:

```bash
npx playwright test -g "TC-P01|TC-P02|TC-N01|TC-N02"
```

This satisfies the requirement of 10 documented functional test cases and automating at least 4 of them.
