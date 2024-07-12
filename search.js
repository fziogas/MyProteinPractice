const { By, Key, until } = require('selenium-webdriver');
const { dismissBanners } = require('./utils');

async function search(driver) {
    console.log("Starting search function.");

    try {
        const searchInput = await driver.findElement(By.css('input[placeholder="Search for a product"]'));
        await searchInput.sendKeys("whey protein", Key.ENTER);
        console.log("Search triggered.");

        await dismissBanners(driver);

        let productFound = false;

        while (!productFound) {
            await driver.executeScript("window.scrollBy(0, 500);");
            try {
                const product = await driver.findElement(By.xpath('//h3[@class="productBlock_productName" and contains(text(), "Impact Whey Protein Powder")]'));
                await product.click();
                console.log("Product found and clicked.");
                productFound = true;

                await driver.executeScript("window.scrollBy(0, 600);");
                console.log("Scrolled down to view options.");
            } catch (error) {
                console.log("Product not found. Continuing to scroll...");
            }
        }

        await driver.sleep(2000);

        const option25kgButton = await driver.findElement(By.xpath('//button[contains(@class, "athenaProductVariationsOption") and contains(text(), "2.5 kg")]'));
        await option25kgButton.click();
        console.log("Selected the 2.5kg option.");

        const addToBasketButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="mainContent"]/div[3]/div[2]/div/div[6]/div[2]/div[2]/span/span/button')), 10000);
        await driver.executeScript("arguments[0].scrollIntoView();", addToBasketButton);
        await addToBasketButton.click();
        console.log("Clicked on Add to basket button.");
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

module.exports = { search };
