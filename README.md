# Playwright Tests

UI and API tests using Playwright.

## Tests

UI Tests for SauceDemo and API Tests for Airport Gap service.

## Setup

### 1. Install Dependencies
```bash
npm install
npx playwright install
```

### 2. Environment Configuration
Create environment variables file:
```bash
cp .env.example .env
```

Edit `.env` file with your actual values:
```bash
# SauceDemo Environment Variables
SAUCEDEMO_BASE_URL=https://www.saucedemo.com
SAUCEDEMO_USERNAME=your_actual_username
SAUCEDEMO_PASSWORD=your_actual_password

# Airport Gap Environment Variables
AIRPORTGAP_BASE_URL=https://airportgap.com/api
```

### 3. Run Tests
```bash
npm test
```

### 4. View Test Reports
After running tests, you can view reports in multiple ways:

#### 📊 Local Reports
```bash
# Open HTML report locally after test run
npx playwright show-report
```

#### 🌐 Live Reports (GitHub Pages)
Access live test reports online:
**https://aaksani.github.io/ControlUP/**

- **📋 Landing Page**: Overview with latest test run information
- **📊 HTML Report**: Click "HTML Report" button for detailed results
- **🔗 GitHub Actions**: Click "Actions" button to view workflow history

#### 📱 GitHub Actions Reports
View test results directly in GitHub:
1. Go to **Actions** tab in the repository
2. Click on any **CI/CD Pipeline** workflow run
3. Check the **Test Results** section for JUnit reports
4. Download **Artifacts** for offline viewing

#### 🎯 Report Features
The HTML reports include:
- ✅ **Test execution summary** with pass/fail counts
- 📸 **Screenshots** of UI test steps and failures
- 🎥 **Video recordings** of test execution
- 🔍 **Test traces** for detailed debugging
- 📊 **Performance metrics** and timing data
- 🌐 **Network logs** and console output

## GitHub Actions CI/CD

This repository includes automated GitHub Actions workflows for continuous integration and testing.

### Automated Workflows

#### 🔄 CI/CD Pipeline
Automatically runs on every push and pull request:
- **Multi-Node Testing**: Tests on Node.js 18 & 20
- **TypeScript Type Checking**: Validates code types
- **Dependency Audit**: Checks for security vulnerabilities
- **Code Quality**: Automated code analysis

#### 🛡️ Security Analysis
- **CodeQL**: Advanced security scanning
- **Dependency Updates**: Automated via Dependabot
- **Weekly Security Scans**: Proactive vulnerability detection

### Manual Test Execution

You can run tests manually through GitHub Actions with custom options:

#### 🎯 How to Run Manual Tests:
1. Go to [**Actions**](../../actions) tab in GitHub
2. Select **"Manual Test Execution"** workflow
3. Click **"Run workflow"**
4. Configure your options:
   - **Test Type**: `all`, `ui`, or `api`
   - **Browser**: `chromium`, `firefox`, `webkit`, or `all`
   - **Headed Mode**: Show browser window
   - **Debug Mode**: Enhanced logging
5. Click **"Run workflow"** to start

#### 📋 Manual Test Options:

| Option | Description | Values |
|--------|-------------|---------|
| **Test Type** | Which tests to run | `all` / `ui` / `api` |
| **Browser** | Browser for UI tests | `chromium` / `firefox` / `webkit` / `all` |
| **Headed** | Show browser window | `true` / `false` |
| **Debug** | Enable debug mode | `true` / `false` |

#### 📊 Test Artifacts:
- **Test Reports**: HTML and JSON reports
- **Screenshots**: Failure screenshots
- **Execution Summary**: Detailed workflow results
- **Retention**: Artifacts kept for 7 days

### GitHub Secrets Configuration

To run tests in CI/CD, configure these repository secrets:

| Secret Name | Description |
|-------------|-------------|
| `SAUCEDEMO_BASE_URL` | SauceDemo base URL |
| `SAUCEDEMO_USERNAME` | SauceDemo username |
| `SAUCEDEMO_PASSWORD` | SauceDemo password |
| `AIRPORTGAP_BASE_URL` | Airport Gap API base URL |# Test trigger
# Debug trigger Sun Aug 17 21:21:22 CEST 2025
