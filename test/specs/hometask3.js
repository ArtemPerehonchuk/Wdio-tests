/*import { expect } from '@wdio/globals'
describe ("Webdriverio main page", () =>{

    it("Should sign up", async () => {
        await browser.url("https://github.com/");
        let signUpLink = await $('.HeaderMenu-link--sign-up')
        await signUpLink.click()

        await browser.waitUntil(async () => {
            return $('span[data-target="typing-effect.content"]').isDisplayed();
        }, 5000, "Is not displayed")
        let message = await $('span[data-target="typing-effect.content"]')
        let messageText = await message.getText()
        expect(messageText).toHaveText("Welcome to GitHub!")
        
        await browser.waitUntil(async () => {
            return $('#email').isDisplayed();
        }, 5000, "Button is not displayed")
       
        
        let emailInput = await $('#email')
        await emailInput.addValue('example@com.com')
        await $('button[data-optimizely-event="click.signup_continue.email"]').waitForEnabled({ timeout: 3000 });
        let continueBtn1 = await $('button[data-optimizely-event="click.signup_continue.email"]')
        await continueBtn1.click()

        let passwordInput = await $('#password')
        await passwordInput.addValue('s3#25dr&89')
        await $('button[data-optimizely-event="click.signup_continue.password"]').waitForEnabled({ timeout: 3000 });
        let continueBtn3 = await $('button[data-optimizely-event="click.signup_continue.password"]')
        await continueBtn3.click()

        let usernameInput = await $('#login')
        await usernameInput.addValue('Jack-snake')
        await $('button[data-optimizely-event="click.signup_continue.username"]').waitForEnabled({ timeout: 3000 });
        let continueBtn4 = await $('button[data-optimizely-event="click.signup_continue.username"]')
        await continueBtn4.click()

        let confirmInput = await $('#opt_in')
        await confirmInput.addValue('y')
        await $('button[data-optimizely-event="click.signup_continue.opt-in"]').waitForEnabled({ timeout: 3000 });
        let continueBtn5 = await $('button[data-optimizely-event="click.signup_continue.opt-in"]')
        await continueBtn5.click()
        await browser.pause(2000)
        
    })
});*/