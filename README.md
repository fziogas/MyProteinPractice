# MyProtein Automation Project

This project uses Selenium WebDriver to automate login, search, and adding a product to the basket on the MyProtein website.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)

## Introduction

This project automates:
1. Logging into the MyProtein website.
2. Searching for "whey protein."
3. Adding the product to the basket.

## Prerequisites

- **Node.js**: Download from [nodejs.org](https://nodejs.org/).
- **Google Chrome**: Ensure it's installed.
- **ChromeDriver**: Download from [here](https://sites.google.com/a/chromium.org/chromedriver/) and ensure it matches your Chrome version.

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/FilipzGit/myprotein-automation.git
    cd myprotein-automation
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Update Login Credentials**:

    Before running the test, open the `login.js` file and update it with your personal email and password.

    ```javascript
    
        const emailAccount = await driver.wait(until.elementLocated(By.css('input[name="Email address"]')), 10000);
        await emailAccount.sendKeys('your-email@example.com'); // Replace with your email
        console.log("Entered email address.");

        const passwordAccount = await driver.wait(until.elementLocated(By.css('input[name="Password"]')), 10000);
        await passwordAccount.sendKeys("your-password"); // Replace with your password
        console.log("Entered password.");
    ```

## Usage

1. **Run the automation script**:

    ```bash
    node index.js
    ```

    This will:
    - Open a Chrome browser.
    - Navigate to MyProtein.
    - Log in with provided credentials.
    - Search for "whey protein."
    - Add the product to the basket.

## Author

- **Filippos Ziogas** - [GitHub Profile](https://github.com/FilipzGit)
