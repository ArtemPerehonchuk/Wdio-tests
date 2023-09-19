/*import { expect } from '@wdio/globals'
describe ("Webdriverio main page", () =>{
    xit("Should have correct title", async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO' )    
    });

    xit ("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")
    });

    xit ("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        let input = await $("#username")
        await input.setValue("world")
        await browser.pause(2000)

        console.log(await input.getValue())

        await expect(input).toHaveValue("world")
    });

    xit ("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $(".radius")
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue('Tom_Smith')
        await browser.pause(4000)

        let inputPassword = await $("#password")
        await inputPassword.addValue('SuperSecretPassword')
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)

    });

    xit("Should show getAttribute command", async () => {
        await browser.url("https://dou.ua/search");
        let inputSearch = await $("#gsc-i-id1")
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: " + attr)

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value atribute is: " + attr)
    });

    xit("Should show getLocation command", async () => {
        await browser.url("https://dou.ua");
        let inputSearch = await $("#txtGlobalSearch")
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location)

        let xlocation = await inputSearch.getLocation("x")
        console.log("Location x is: " + xlocation)
    });

    xit("Should show getText command", async () => {
        await browser.url("https://webdriver.io");
        let subtitle = await $(".hero__subtitle")
        console.log("Subtitle text is: " + await subtitle.getText())
    });

    xit("Should show if an element is clicable", async () => {
        await browser.url('https://webdriver.io');
        const blogButton = await $('.button[href="/docs/gettibgstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable)
    });

    xit("Should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io');
        const blogButton = await $('.button[href="/docs/gettibgstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed)
    });

    xit("Should show if an element is visible", async () => {
        await browser.url('https://webdriver.io');
        const blogButton = await $('.button[href="/docs/gettibgstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log("Is blogbutton displayed in viewport: " + displayedInViewport)
    });

    it("Should show if an element is enabled", async () => {
        await browser.url('https://webdriver.io');
        const getStartedButton = await $('//a[text()="Get Started"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is enabled: " + isEnabled)
    });

    it("Should show if an element is focused", async () => {
        await browser.url('https://webdriver.io');
        const getStartedButton = await $('//a[text()="Get Started"]')
        let isFocused = await getStartedButton.isFocused()
        console.log("Is getStartedButton focused: " + isFocused)
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is getStartedButton focused after click: " + isFocused)
        await browser.pause(2000)
    });

    it("Should show movement to the action", async () => {
        await browser.url('https://webdriver.io');
        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.click()
        await browser.pause(2000)
    });

    it("Should show save screenshot command", async () => {
        await browser.url('https://webdriver.io');
        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenshot.png')
    })

    it("Should switch to another window", async () => {
        await browser.url('https://webdriver.io');
        await browser.newWindow('https://google.com')
        await browser.pause(2000)
        await browser.switchWindow('https://webdriver.io')
        await browser.pause(2000)
    })

    it("Should switch wait untill command", async () => {
        await browser.url('https://webdriver.io');
        await browser.waitUntil(async () => {
            return $('//a[text()="Get Started"]').isDisplayed();
        }, 5000, "Button is not displayed")
    })

    it("Should get html for certain elements", async () => {
        await browser.url('https://webdriver.io');
        
        // Отримати зовнішній HTML-код елемента .dropdown__menu.
        const outerHtml = await $('.dropdown__menu').getHTML();
        console.log("Outer html: " + outerHtml);
        
        // Отримати внутрішній HTML-код елемента .dropdown__menu.
        const innerHtml = await $('.dropdown__menu').getHTML(false);
        console.log("Inner html: " + innerHtml);
    });
});*/

/*import LoginPage from "./../pages/main.page.js"
describe("Webdriverio main page", () => {
    it("Should show addValue command", async () => {
        await browser.url("https://the-internet.herokuapp.com/login");

        await LoginPage.setUsernameInput(1234)
        await browser.pause(2000)

        await LoginPage.setPasswordInput("superpassword")
        await browser.pause(2000)

        await LoginPage.clickOnLoginBtn()
        await browser.pause(2000)
    });
});*/

/*import MainPage from "./../pages/main.page.js"
import GameDevPage from "./../pages/gamedev.page.js"
import GameDevTopRatesPage from "./../pages/gamedevToprates.js"

describe ("Webriverio main page", () => {

    it("done", async () => {
        await browser.url("https://dou.ua");

        await MainPage.clickOnBandBtn()
        await browser.pause(2000)

        await MainPage.clickOnForumBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)

        expect(GameDevPage.companyGameDevsRateLink).toBeClickable()

        await GameDevPage.clickOnTopGamesRateLink()
        expect (GameDevTopRatesPage.title).toHaveValue("Матеріали на тему «топ ігор місяця»")
    })
})*/
