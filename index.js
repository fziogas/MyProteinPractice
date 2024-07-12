const { Builder } = require('selenium-webdriver');
const { login } = require('./login');
const { search } = require('./search');
const { dismissBanners } = require('./utils');

(async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.manage().window().maximize();
        console.log("Browser window maximized..");

        console.log("Starting the login process...");
        await login(driver);
        console.log("Logged in successfully!");

        console.log("Dismissing any banners...");
        await dismissBanners(driver);
        console.log("Banners dismissed!");

        console.log("Starting product search...");
        await search(driver);
        console.log("Product search completed!");
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    } finally {
        await driver.quit();
        console.log("Browser closed.");
    }
})();
