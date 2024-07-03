const { By, until } = require('selenium-webdriver');
const { dismissBanners } = require('./utils');

async function login(driver) {
    await driver.get('https://www.myprotein.com/');
    console.log("Navigated to MyProtein website.");

    await driver.manage().window().maximize();
    console.log("Browser window maximized.");

    await dismissBanners(driver);

    const accountButton = await driver.wait(until.elementLocated(By.className('responsiveAccountHeader')), 10000);
    await accountButton.click();
    console.log("Ready to login...");

    const emailAccount = await driver.wait(until.elementLocated(By.css('input[name="Email address"]')), 10000);
    await emailAccount.sendKeys('Your_email');
    console.log("Entered email address.");

    const passwordAccount = await driver.wait(until.elementLocated(By.css('input[name="Password"]')), 10000);
    await passwordAccount.sendKeys("Your_Password");
    console.log("Entered password.");

    const signInButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="main-content"]/div/div[1]/section/div/div[1]/div/form/div[5]/div/button')), 10000);
    await signInButton.click();
    console.log("Clicked login button.");
}

module.exports = { login };
