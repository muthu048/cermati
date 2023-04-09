
describe('Scenario 1', () => {
    it('Access a Product via category after applying multiple filters', async () => {
        await browser.url(`www.ebay.com`)

        await $('//button[text()="Shop by category"]').click()
        await $('//a[text()="Cell phones & accessories"]').click()
        await $('//a[text()="Cell Phones & Smartphones"]').click()
        // const count = await $$('//span[text()="Apple"]//ancestor::ul[1]//child::li').length
        // console.log(count)
        // for (let index = 1; index <= count; index++) {
        //     await $('//span[text()="Brand"]//parent::button').click()
        //     await $('//span[text()="Apple"]//ancestor::ul[1]//child::li['+index+']//child::a').click() 
        // }
        await $('(//span[text()="See All"]//parent::button)[1]').click()
        await $('//span[text()="Screen Size"]//parent::div').click()
        await $('//span[text()="5.0 - 5.4 in"]//parent::label//parent::span//child::span[1]//child::input').click()
        await $('//span[text()="Price"]//parent::div').click()
        await $('(//span[text()="to"]//ancestor::div[1]//child::div[1]//child::input)[1]').setValue("200")
        await $('(//span[text()="to"]//ancestor::div[1]//child::div[1]//child::input)[2]').setValue("400")
        await $('//span[text()="Item Location"]//parent::div').click()
        await $('//span[text()="US Only"]//parent::label//parent::span//child::span[1]//child::input').click()
        await $('//button[text()="Apply"]').click()
        const filtercount=await $('//span[contains(text(),"Filter")]').getText()
        console.log(filtercount)
    })
})

describe('Scenario 2', () => {
    it('Access a Product via Search', async () => {
        await $('//input[@aria-label="Search for anything"]').setValue("MacBook")
        await $('//select[@aria-label="Select a category for search"]').click()
        await $('//option[text()=" Computers/Tablets & Networking"]').click()
        await $('//input[@type="submit"]').click()
        const value=await $('(//li[contains(@data-view,"id:1")][2]//child::span)[4]').getText()
        console.log(value)

    })
})



