
# Mailsafety

A small npm library to identify whether an email is disposable email or not, also retrieving the mail validation information with its mx records for additional use.




## Installation

Install mailsafety with npm

```bash
  npm install mailsafety
```
    
## Usage/Examples

```javascript
const mailsafety = require('mailsafety');
const validationInfo = mailsafety.validationInfo('test@example.com')
/*
    Sample Response
    {
        isEmail: true,
        email: "test@example.com",
        domain: "example.com",
        tld: ".com",
        localPart: "test",
        mx: [
            {
                exchange: "smtp.example.com",
                priority: 1
            }
        ],
        isDisposable: false,
        isValid: true
    }
*/
```


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@iamrealbhuvi](https://www.github.com/captcha781)

