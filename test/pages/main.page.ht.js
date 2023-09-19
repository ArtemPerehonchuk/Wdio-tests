

class MainPage {

    //get forumBtn() { return $('a[href="https://dou.ua/forums/"]')}
    //get bandBtn() { return $('a[href="https://dou.ua/lenta/"]')}
    get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]')}
    get jobsBtn() { return $('a[href="https://jobs.dou.ua/"]')}
    //get searchInput() { return $('#txtGlobalSearch')}
    //get gameDevBtn() { return $('.menu-site__gamedev')}
    get relocateBtn() { return $('.menu-site__relocate')}

    /*async clickOnForumBtn() {
        await this.forumBtn.click()
    }
    async clickOnBandBtn() {
        await this.bandBtn.click()
    }
    async clickOnGameDevBtn() {
        await this.gameDevBtn.click()
    }
    async setSearchInput(value) {
        await this.searchInput.addValue(value)
    }*/
    async clickOnSalariesBtn() {
        await this.salariesBtn.click()
    }
    async clickOnJobsBtn() {
        await this.jobsBtn.click()
    }
    async clickOnRelocateBtn() {
        await this.relocateBtn.click()
    }
    async clickOnRelocateBtn() {
        await this.relocateBtn.click()
    }
} 

export default new MainPage()  
