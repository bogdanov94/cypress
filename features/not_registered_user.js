it('Navigates the url ', () => {
   cy.visit('https://www.sbzend.ssls.com/')
  })

  it('Clicks on Element', () => {
   cy.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/button[1]').click()
  })

  it('Checks if element is present', () => {
   cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div').find('div')
  })

  it('Send email value to imput', () => {
  // in good way, best practice is to use some faker to generate new email on each test. But for now sorry, have no time for it.
  cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/input').type('fake@email.com')
  cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[1]/input').type('fakepassword')
  cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button').click
})

  it('Checks if password is displayed', () => {
  cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]').click()
  cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]').should('have.text', 'fakepassword')
})
 
it('Login button click', () => {
 cy.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[3]/button').click
 cy.xpath('//*[@id="noty_1606171429162258400"]/div/div[2]/div').find('div')
})