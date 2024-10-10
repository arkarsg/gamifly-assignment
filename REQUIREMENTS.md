# Requirements

- For implementation use NodeJS
- Create a payment gateway library, that can handle payments with:
  - Paypal REST API
  - Braintree payments

NOTE on Braintree:

- In official [spec](https://developers.braintreepayments.com/reference/request/transaction/sale/node) stated that either paymentMethodNonce or paymentMethodToken could be used. But actually there is one more option to use creditCard. For the sake of assignment's simplicity please go with creditCard.

- [Credit Card Payload](https://developers.braintreepayments.com/reference/request/transaction/sale/node#credit_card)
  Example:

```
{
    "amount": "100",
    "creditCard": {
    "number": "4111111111111111",
    "expirationMonth": "2",
    "expirationYear": "2020",
    "cvv": "111"
    }
}
```

Library should be designed to easily add additional payment gateways.

- Create a simple form for making payment.
- Form should have this fields:
- In order section:
  - Price (amount)
  - Currency (USD, EUR, THB, HKD, SGD, AUD)
  - Customer Full name
- In payment section:
  - Credit card holder name
  - Credit card number
  - Credit card expiration
  - Credit card CCV
  - Submit button

Show success or error message after payment.

Use appropriate form validations.

Save order data + response from payment gateway to database table.

Create a public repository on Github and push the solution there. Send us the link to the repository.

---

# Specification

- Create your own sandbox accounts for Paypal and Braintree

- To make it easier, implement only single payment with a credit card. No need to implement saving credit cards and authorization of payments (unless you really want to try it out).

- After submitting the form, use a different gateway based on these rules:

1. If the credit card type is AMEX, then use Paypal.
2. if currency is USD, EUR, or AUD, then use Paypal. Otherwise use Braintree.
3. if currency is not USD and credit card is AMEX, return error message, that AMEX is possible to use only for USD

Use any Node.js framework you want or no framework at all, it's up to you.

Usually we use Express.js - feel free to use this one, if you don't have any preferred one.

---

Don't bother with any graphics, just simple HTML, simple form, no CSS needed. Or just use Twitter Bootstrap.

- Use only Paypal and Braintree Node.js libraries, not any other 3rd party libraries.
- Cover code with unit tests.
- The code needs to work after we pull it and try it (no bugs) and should process the payments.
- No Angular.js (jquery is fine)

---

# Quality requirements

Similarly as during any other code review in our team, we'll be checking the following:

- code quality
- usage of the configuration files
- usage of the unit tests
- naming convention

---

# Bonus question

How would you handle security for saving credit cards?
