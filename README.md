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
Access the interactive Playwright HTML report online:
**https://aaksani.github.io/ControlUP/**

The live report is automatically updated on every push to main and includes:
- **📊 Interactive test results** with full Playwright UI
- **🔍 Detailed test traces** for debugging
- **📸 Screenshots and videos** of test execution
- **📈 Performance metrics** and timing data

#### 📱 GitHub Actions Reports
Monitor test execution in real-time:
1. Go to **Actions** tab in the repository
2. Click on **"Deploy Playwright Reports"** workflow
3. View **live logs** during test execution
4. **Automatic deployment** to GitHub Pages upon completion

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

#### 🚀 Deploy Playwright Reports
Automatically runs on every push to main:
- **Fresh Test Execution**: Runs all UI and API tests
- **Environment Setup**: Configures test credentials securely
- **HTML Report Generation**: Creates interactive Playwright reports
- **GitHub Pages Deployment**: Publishes reports to live URL

#### 🔄 CI/CD Pipeline  
Runs on push and pull requests for code quality:
- **Multi-Node Testing**: Tests on Node.js 18 & 20
- **TypeScript Type Checking**: Validates code types
- **Dependency Audit**: Checks for security vulnerabilities
- **Code Quality**: Automated code analysis

#### 🛡️ Security Analysis
- **CodeQL**: Advanced security scanning
- **Dependency Updates**: Automated via Dependabot
- **Weekly Security Scans**: Proactive vulnerability detection

### Manual Report Generation

You can manually trigger report generation and deployment:

#### 🎯 How to Generate Reports Manually:
1. Go to [**Actions**](../../actions) tab in GitHub
2. Select **"Deploy Playwright Reports"** workflow  
3. Click **"Run workflow"**
4. Click **"Run workflow"** to start
5. **Reports will be deployed** to GitHub Pages automatically

This is useful for:
- **Testing changes** before merging
- **Regenerating reports** after configuration updates
- **Manual verification** of test execution

#### 📊 Generated Reports:
- **📋 Interactive HTML Report**: Full Playwright test results
- **📸 Screenshots**: UI test steps and failure captures  
- **🎥 Video Recordings**: Complete test execution videos
- **🔍 Test Traces**: Detailed debugging information
- **📈 Performance Metrics**: Test timing and execution data

### GitHub Secrets Configuration

To run tests in CI/CD, configure these repository secrets:

| Secret Name | Description |
|-------------|-------------|
| `SAUCEDEMO_BASE_URL` | SauceDemo base URL |
| `SAUCEDEMO_USERNAME` | SauceDemo username |
| `SAUCEDEMO_PASSWORD` | SauceDemo password |
| `AIRPORTGAP_BASE_URL` | Airport Gap API base URL |
