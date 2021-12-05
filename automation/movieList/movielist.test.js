const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('file:///C:/Users/signp/Downloads/automation/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const movieName = 'star wars'
const secondMovie = 'Die Hard'

test('Movie Test' , async () => {
    
    await driver.findElement(By.xpath('//input')).sendKeys(movieName)

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/span')).getText()

    await driver.sleep(2000)
    
    await driver.findElement(By.xpath('//input')).sendKeys(secondMovie)

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/span')).getText()

    await driver.sleep(2000)

    await driver.findElement(By.xpath('//ul/li/span')).click()

    await driver.sleep(2000) 

    await driver.findElement(By.xpath('//ul/li/span')).click()

    await driver.sleep(2000) 

    await driver.findElement(By.xpath('//li/button')).click()

    await driver.sleep(2000)
    
    await driver.findElement(By.xpath('//li/button')).click()

    await driver.sleep(2000) 


   
})