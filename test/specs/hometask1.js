import { expect } from '@wdio/globals'
describe ("Webdriverio main page", () =>{

    /*it ("Should click on the api link", async () => {
        await browser.url("https://webdriver.io");
        let linkByText = await $('//a[text()="API"]')
        await linkByText.click()
        await browser.pause(3000)
    })


    it ("Should have correct url", async () => {
        await browser.url("https://webdriver.io/docs/api");
        const myUrl = await browser.getUrl()
        console.log(myUrl)
        await expect(browser).toHaveUrl("https://webdriver.io/docs/api/")
    })

    it ("Should have correct breadcrumbs ", async () => {
        await browser.url("https://webdriver.io/docs/api");
        const bcrumbs = await $("span=Introduction")
        const btext = await bcrumbs.getText()
        console.log(btext)
        await expect(btext).toBe('Introduction')
    })

    it ("Should have correct href attribute ", async () => {
        await browser.url("https://webdriver.io/docs/api");
        const alink = await $('a=WebDriver')
        const hrefattr = await alink.getAttribute('href')
        console.log(hrefattr)
        await expect(hrefattr).toBe("/docs/api/webdriver")
    })

    it("Should check for a link on hover", async () => {
        await browser.url("https://webdriver.io/docs/api");
        const element = await $('a=WebDriver')
        await element.moveTo()
        const link = await $('//a')
        const isLinkDisplayed = await link.isDisplayed()
        await expect(isLinkDisplayed).toBe(true)
      });

    it ("Should click on the search input field", async () => {
        await browser.url("https://webdriver.io/docs/api");
        let search = await $('.searchBox_ZlJk')
        await search.click()
        await browser.pause(2000)

        let input = await $(".DocSearch-Input")
        await input.addValue("All is done")
        await browser.pause(2000)
        await input.clearValue()
        await browser.pause(2000)
    })  

    it("Should have correct h1 ", async () => {
        await browser.url("https://webdriver.io/docs/api");
       
        const h1 = await $('h1');
        const h1Text = await h1.getText();
        console.log(h1Text);
        await expect(h1Text).toBe("Introduction");
    });

    it("Should click on the menu item, then scroll to the blog link, click on it and check if it is displayed, visible and clickable", async () => {
        await browser.url("https://webdriver.io/docs/api");
        const apiItem = await $('nav a[href="/docs/api"]')
        await apiItem.click()
        // Check if the blog link is displayed
        const protocolLink = await $('nav a[href="/docs/api/protocols')
        await protocolLink.scrollIntoView()
        let displayed = await protocolLink.isDisplayed()
        console.log("Is displayed: " + displayed)
        //check if th protocol link is enabled
        let enabled = await protocolLink.isEnabled()
        console.log("Is enabled: " + enabled)
        //Check if the protocol link is visible
        let visible = await protocolLink.isDisplayedInViewport()
        console.log("Is visible: " + visible)
        //check if the protocol link is focused
        let focused = protocolLink.isFocused()
        console.log("Is focused" + focused)
        //chech if the protocol link is clickable
        let clickable = await protocolLink.isClickable()
        console.log("Is clickable:" + clickable)
        await browser.pause(2000)
        await protocolLink.click()
        await browser.pause(2000)

        await browser.waitUntil(async () => {
            return $("#webdriver-protocol").isDisplayed();
        }, 5000, "Headline is not displayed")

        const outHtml = await $("#webdriver-protocol").getHTML()
        console.log("Outer HTML: " + outHtml)

        const inHtml = await $("#webdriver-protocol").getHTML(false)
        console.log("Inner HTML: " + inHtml)
    })

    xit("Should click on the button and check the url", async () => {
        await browser.url("https://github.com/");
        const signUp = await $('.HeaderMenu-link--sign-up');
        await signUp.click()
        let signUpUrl = await browser.getUrl()
        console.log(signUpUrl)
        await expect(browser).toHaveUrl('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
    })

    xit("Should click on the button and check the url", async () => {
        await browser.url("https://github.com/");
        const signIn = await $('.HeaderMenu-link--sign-in');
        await signIn.click()
        let signInUrl = await browser.getUrl()
        console.log(signInUrl)
        await expect(browser).toHaveUrl('https://github.com/login');
    })

    xit("Should click in the search input field, add value in the input field, click on the button and check the url", async () => {
        await browser.url("https://github.com/");
        const search = await $('span.flex-1');
        await search.click()

        let searchInput = await $("#query-builder-test");
        await searchInput.addValue("My project")

        let searchClick = await $(".ActionListItem");
        await searchClick.click()

        let searchResultUrl = await browser.getUrl()
        console.log(searchResultUrl)
        await expect(browser).toHaveUrl('https://github.com/search?q=My%20project&type=repositories');
    })

    xit("Should show the dropdown menu is displayed", async () => {
        await browser.url("https://github.com/");
        const product = await $('li.HeaderMenu-item:first-child');
        await product.click()
        await browser.pause(2000)
        const dropDownMenu = await $(".HeaderMenu-dropdown.dropdown-menu-wide");
        let displayed = await dropDownMenu.isDisplayed()
        console.log("Is displayed: " + displayed)   
    })

    xit("Should show the button is not displayed", async () => {
        await browser.url("https://github.com/");
        const search = await $('span.flex-1');
        await search.click()

        const searchInput = await $("#query-builder-test");
        await searchInput.addValue("Cat")
        const searchButton = await $(".ActionListItem");
        await browser.pause(1000)
        let displayed = await searchButton.isDisplayed(false)
        console.log("Element is not displayed: " + displayed)
    })*/
});