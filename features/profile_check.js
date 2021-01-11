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

  it('Navigate to profile', () => {
   cy.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/div').click
   cy.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/div/div/ul/li[2]/a').click
  })

  it('Checkes if previously set data was saved properly' , () => {
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[1]').should('have.text', 'Tom Ford')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[2]').should('have.text', 'ssls.automation+666@gmail.com')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[3]').should('not.be.empty')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[4]').should('have.text', '+380 12312312')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[5]').should('have.text', 'Diagon alley 21, Misto, Uryupinsk 612120, Ukraine')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[6]').should('have.text', 'DeD3')
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[7]').should('have.text', 'Include in mailing list')
  })