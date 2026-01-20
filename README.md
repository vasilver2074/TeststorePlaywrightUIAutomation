# Teststore – QA Automation (Playwright)

**QA Automation project** demonstrating end-to-end UI and API test automation using **Playwright** and **TypeScript**.
The project showcases **modern test architecture**, **best practices**, and **real-world automation patterns**.

---

##  About This Project

This repository is a **portfolio-grade automation framework** designed to demonstrate:

* Strong understanding of **QA Automation architecture**
* Practical experience with **Playwright + TypeScript**
* Application of **Page Object Model (POM)**
* Use of **custom fixtures, decorators, and reusable components**
* Integration with **CI/CD (GitHub Actions)**
* Clean code practices with **ESLint & Prettier**

---

##  Tech Stack & Skills Demonstrated

### Automation & Testing

* Playwright (UI & API testing)
* End-to-End testing
* Cross-browser testing
* Test parametrization
* API authorization testing
* State-based authentication (`storageState`)

### Programming & Architecture

* TypeScript
* Page Object Model (POM)
* Reusable components
* Base page abstraction
* Custom fixtures
* Decorators for step-based reporting

### Quality & Tooling

* ESLint (code quality)
* Prettier (code style)
* Environment-based configuration
* GitHub Actions (CI)

---

##  Project Structure

```
.
├── .github/workflows/
│   └── playwright.yml        # CI pipeline (GitHub Actions)
│
├── fixtures/
│   └── fixtures.ts           # Custom Playwright fixtures
│
├── helpers/
│   └── decorators/
│       └── step.ts           # Step decorator for readable test steps
│
├── pages/                    # Page Object Model
│   ├── BasePage/             # Shared base functionality
│   ├── components/           # Reusable UI components
│   ├── LoginPage/
│   ├── MainPage/
│   ├── SearchResultPage/
│   ├── ProductDetailsPage/
│   ├── ShoppingCartPage/
│   ├── OrderPage/
│   └── AccessoriesPage/
│
├── tests/                    # Test specifications
│   ├── search.spec.ts
│   ├── filter-hover.spec.ts
│   ├── accessories-parametrization.spec.ts
│   ├── shoppingcart-productorder.spec.ts
│   └── api-authorization.spec.ts
│
├── playwright.config.ts
├── storageState.json         # Saved authentication state
├── .env
└── README.md
```

---

##  Test Architecture

### Page Object Model (POM)

* Each page is represented by a **dedicated class**
* Test logic is separated from UI interactions
* Common behavior is abstracted in `BasePage`
* UI blocks are extracted into reusable components

### Fixtures

Custom fixtures are used to:

* Manage test setup and teardown
* Provide authenticated contexts
* Reduce test duplication
* Improve test readability

### Step Decorators

* `@step` decorator wraps actions into logical steps
* Improves debugging and reporting
* Makes test execution flow easier to understand

---

##  Types of Tests Covered

* **UI E2E tests**

  * Search functionality
  * Product filtering and hover interactions
  * Shopping cart and order flow
* **Parametrized tests**

  * Accessories and product variations
* **API tests**

  * Authorization and authentication scenarios

---

##  Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Run a specific test:

```bash
npx playwright test tests/search.spec.ts
```

---

##  Test Reports

After execution, open the HTML report:

```bash
npx playwright show-report
```

Reports are generated in:

```
playwright-report/
```

---

##  CI / Continuous Integration

* Fully integrated with **GitHub Actions**
* Tests run automatically on push and pull request
* Ensures test stability and code quality

Workflow:

```
.github/workflows/playwright.yml
```

---

##  Code Quality

* ESLint for static analysis
* Prettier for consistent formatting
* Unified quality check:

```bash
npm run check
```

---
