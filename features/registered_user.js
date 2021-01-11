it('Navigates the url ', () => {
    cy.visit('https://www.sbzend.ssls.com/')
  })

  it('Clicks on Element', () => {
    cy.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/button[1]').click()
  })

  it('Send email value to imput', () => {
    cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/input').type('ssls.automation+666@gmail.com')
    cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[1]/input').type('123456')
    cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[3]/button').click
  })

  it('Checks if button had changed', () => {
    cy.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/div/button').find('button')

  })