/*import MainPage from "./../pages/main.page.ht.js"
import JobsPage from "./../pages/jobs.page.js"
import SalariesPage from "./../pages/salaries.page.js"
import RelocatePage from "./../pages/relocate.page.js"

describe ("Webdriverio main page", () => {
    it("Done", async () => {
        await browser.url("https://dou.ua");

        await MainPage.clickOnSalariesBtn()
        await browser.pause(2000)
        expect(SalariesPage.headline).toHaveValue("I Квартиль")

        await MainPage.clickOnJobsBtn()
        await browser.pause(2000)

        const element = await JobsPage.searchBtn
        const isElementDisplayed = await element.isDisplayed()
        console.log("The search button is displayed: " + isElementDisplayed)
        //expect(JobsPage.searchBtn).toBeDisplayed()
        await JobsPage.clickOnSearchBtn()
        expect(JobsPage.example).toHaveValue("Швидкий перехід:")

        await MainPage.clickOnRelocateBtn()
        await browser.pause(2000)
        expect(RelocatePage.news).toHaveValue("Новини")
        expect(RelocatePage.blogs).toHaveValue("Блоги")
        expect(RelocatePage.popular).toHaveValue("Популярне на форумі")

    })
})*/