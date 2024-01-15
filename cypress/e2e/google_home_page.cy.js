describe('Test Google Search', () => {

   it('search a value', () => {
    cy.visit('https://google.com')
    cy.get('textarea[name=q]').type("capital rock{enter}")
    cy.wait(2500)
    cy.url({log: true}).should("include", "q=capital")
  })

  it('How search works', () => {
    cy.visit('https://gooogle.com')
    cy.get('[href="https://google.com/search/howsearchworks/?fg=1"]').click()
    cy.wait(2500)
    cy.url().should('include', 'howsearchworks')
  }) 

  it('Search using button', () => {
    cy.visit('https://google.com')
    cy.get('textarea[name=q]').type("capital rock").click()
    cy.get('body').click(0,0)
    //cy.get('.LLD4me').click()
    cy.get('input[value="Google Search"]').last().click()
    cy.url({log: true}).should("include", "q=capital")
  })

  it('Search using Im feeling lucky button', () => {
    cy.visit('https://google.com')
    cy.url().should("eq","https://www.google.com/")
    cy.get('input[value="I\'m Feeling Lucky"]').last().click().wait(1000).click({force: true})
    cy.url().should("not.equal","https://www.google.com/")
  })
})

