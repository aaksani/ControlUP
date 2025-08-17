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