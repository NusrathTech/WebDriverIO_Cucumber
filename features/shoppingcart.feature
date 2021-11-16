Feature: Account Registration, SignIn and Product Purchase
    To Sign in to website AutomationPractice after successful registration and addition of product to cart
    
    Scenario: TC01 - Register new user
        Given user is on landing page
        Then navigate to signin page
        And create an account with valid email

    Scenario:TC-002 Sign In with newly created user credentials
        Given the user is on the signin page
        When login with registered credentials
        Then verify account information    

    Scenario:TC-003 Add product to cart and checkout
        Given the user is on the signin page
        Given login with registered credentials
        Given I am on the myaccount page
        Then add to cart and proceed to checkout page    
    