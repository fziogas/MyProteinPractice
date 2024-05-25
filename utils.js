const { By, until } = require('selenium-webdriver');

async function dismissBanners(driver) {
    console.log("Attempting to dismiss banners...");
    try {
        const banner1 = await driver.wait(until.elementLocated(By.css('*[id="onetrust-accept-btn-handler"]')), 3000);
        await banner1.click();
        console.log("Dismissed banner 1.");
    } catch (error) {
        console.log("Banner 1 not found.");
    }

    try {
        const banner2 = await driver.wait(until.elementLocated(By.xpath('//*[@id="epopup-close-button"]')), 3000);
        await banner2.click();
        console.log("Dismissed banner 2.");
    } catch (error) {
        console.log("Banner 2 not found.");
    }

    try {
        const banner3 = await driver.wait(until.elementLocated(By.css('button.emailReengagement_close_button')), 3000);
        await banner3.click();
        console.log("Dismissed banner 3.");
    } catch (error) {
        console.log("Banner 3 not found.");
    }
}

module.exports = { dismissBanners };
