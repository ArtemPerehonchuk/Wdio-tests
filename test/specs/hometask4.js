import { expect } from '@wdio/globals'
describe ("Webdriverio main page", () =>{

    /*it("Should scroll to the link, check the text, click on the link, check the h1 text and click on the link", async () => {
        await browser.url("https://github.com/");
        const freeEnterpriseContainer = await $('.d-flex.flex-justify-center.mt-6')
        await freeEnterpriseContainer.scrollIntoView()
        await browser.pause(2000)
        const freeEnterpriseLink = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
        const headLine = await $('h2.color-fg-default')
        let headLineText = await headLine.getText()
        expect(headLineText).toHaveText("The place for anyone from anywhere to build anything")
        let linkIsVisible = await freeEnterpriseLink.isDisplayedInViewport()
        console.log("Link is visible" + linkIsVisible)
        await freeEnterpriseLink.waitForClickable({ timeout: 5000 })
        await freeEnterpriseLink.click()
        await browser.pause(2000)
        const headline2 = await $('.lh-condensed-ultra ')
        let headLineText2 = await headline2.getText()
        expect(headLineText2).toHaveText("Pick your trial plan")
        const enterpriseCloud = await $('a[href="/account/enterprises/new?ref_cta=Enterprise%2520Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Benterprise%2Btrial%26ref_loc%3DHome%2Bcampaign%2Bfooter%26ref_page%3D%252F"]')
        await enterpriseCloud.waitForClickable({ timeout: 5000})
        await enterpriseCloud.click()
        await browser.pause(2000)

    })*/

    /*it("Should show scroll to the button, check whether it is displayed and clickable, click on the button, check the url, check the h1 text, add value to the input field, select item from the list, click on the checkbox, click on the button and check the h1 text", async () => {
        await browser.url("https://github.com/");
        const subscribeBtn= await $('a[href="https://resources.github.com/newsletter/"]');
        await subscribeBtn.scrollIntoView()
        let btnIsDisplayed = await subscribeBtn.isDisplayed()
        let btnIsClickable = await subscribeBtn.isClickable()
        console.log("Subscribe button is displayed: " + btnIsDisplayed)
        console.log("Subscribe button is clickable: " + btnIsClickable)
        await subscribeBtn.click()
        await browser.pause(2000)
        let newUrl = await browser.getUrl()
        expect(newUrl).toHaveUrl('https://resources.github.com/newsletter/')
        const headlineResources = await $('#hero-section-brand-heading')
        let headlineResourcesText = await headlineResources.getText()
        expect(headlineResourcesText).toHaveText("Subscribe to our developer newsletter")
        const workEmail = await $('.Primer_Brand__TextInput-module__TextInput___EtKj3')
        await workEmail.addValue("qwerty@gmail.com")
        const countrySelect = await $('#country')
        await countrySelect.click()
        let country = await $('option[value="UA"]')
        await country.click()
        const checkBox = await $('#gated-agree-marketingEmailOptin1')
        await checkBox.click()
        const subscribeResourcesBtn = await $('.Primer_Brand__Button-module__Button___lDruK')
        await subscribeResourcesBtn.click()
        await browser.pause(2000)
        const headlineResources2 = await $('#hero-section-brand-heading')
        let headlineResourcesText2 = await headlineResources2.getText()
        expect(headlineResourcesText2).toHaveText("Thanks for subscribing!")
    })

    it("Should click in the search input field, add value in the input field, click on the button and check text in the href attribute", async () => {
        await browser.url("https://github.com/");
        const search = await $('span.flex-1');
        await search.click()

        let searchInput = await $("#query-builder-test");
        await searchInput.addValue("act")

        let searchClick = await $(".ActionListItem");
        await searchClick.click()

        const linkAttr = await $('a[href="/nektos/act"]').getAttribute('href')
        const expectedText = 'act'
        expect(linkAttr).toHaveText(expectedText)
    })

    it("Should click on the main menu item, check the h1 text, scroll to the link, click on the link and check the h1 text", async () => {
        await browser.url("https://github.com/");
        const pricing = await $('a[href="/pricing"]')
        await pricing.click()

        const headlinePricing = await $('main h1.h2-mktg')
        let headlinePricingText = await headlinePricing.getText()
        expect(headlinePricingText).toHaveText('Get the complete developer platform.')

        const compareLink = await $('a[href="#compare-features"]')
        await compareLink.scrollIntoView()
        await compareLink.click()

        const headlineCompare = await $('.h1')
        let headlineCompareText = await headlineCompare.getText()
        expect(headlineCompareText).toHaveText('Compare features')

    })
});*/