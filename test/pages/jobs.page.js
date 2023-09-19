class JobsPage {
    get example() { return $('.example')}
    get searchBtn() { return $('.btn-search')}
    
    async clickOnSearchBtn() {
        await this.searchBtn.click()
    }
    
}
export default new JobsPage()