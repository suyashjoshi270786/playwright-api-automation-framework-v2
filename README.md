# Playwright API Automation Framework

![Playwright API Tests](https://github.com/suyashjoshi270786/api-framework1/actions/workflows/api-tests.yml/badge.svg)

A modular, scalable API automation framework built using **Playwright**, **TypeScript**, and **Cucumber (BDD)**.  
This framework demonstrates clean automation design, reusable API client, CRUD operations, schema validation, and HTML reporting suitable for interview preparation and enterprise-level automation.

---

 Features

- Playwright API Testing (no browser dependency)  
- Cucumber BDD with feature files  
- Reusable API Client (GET/POST/PUT/DELETE)  
- Query Params + Payload builder  
- CRUD API Tests  
- JSON Schema validation  
- Multiple Cucumber HTML Report  
- GitHub Actions CI/CD (Daily 7 AM IST)  
- Clean folder structure and modular design  

---

## 📁 Folder Structure

api-framework1/
│
├── mainTest1/
│ ├── support/
│ │ ├── apiClient.ts
│ │ ├── hooks.ts
│ │ ├── world.ts
│ │
│ ├── tests/
│ ├── features/
│ ├── steps/
│
├── report/
│ ├── cucumber-report.json
│ ├── generate-report.js
│ └── html/
│ └── index.html
│
├── .github/
│ └── workflows/
│ └── api-tests.yml
│
├── package.json
├── tsconfig.json

yaml
Copy code

---

Running Tests

### Install dependencies
npm install

shell
Copy code

### Run API Tests
npm run test

shell
Copy code

### Generate HTML Report
npm run report

shell
Copy code

### Run tests + generate report
npm run test:report

yaml
Copy code

---

HTML Cucumber Report

HTML report is generated using **multiple-cucumber-html-reporter**.

Path:

report/html/index.html

yaml
Copy code

Contains:

- Feature summary  
- Scenario summary  
- Pass/Fail charts  
- Execution metadata  
- Step-wise details  

---

GitHub Actions CI/CD

The workflow runs daily at **7:00 AM IST**.

Workflow file:

.github/workflows/api-tests.yml

yaml
Copy code

Pipeline does:

- Checkout code  
- Install dependencies  
- Run API tests  
- Generate HTML report  
- Upload artifact  

---

Tech Stack

| Component | Technology |
|----------|------------|
| Language | TypeScript |
| API Engine | Playwright |
| Test Runner | CucumberJS |
| Reporter | multiple-cucumber-html-reporter |
| CI/CD | GitHub Actions |

---

Future Enhancements

- Add Allure Report  
- Add environment support (QA/Stage/Prod)  
- API + UI Hybrid flow  
- Token-based authentication  
- Data-driven API tests  

---

Author

**Suyash Joshi**  
Automation Engineer | Playwright | API | BDD | CI/CD

---

Support

If this framework helped you, please ⭐ the repo!