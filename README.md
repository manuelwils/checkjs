# check
check.js is a form validation library which helps for quick assembling of frontend applications

# Usage
Include script at the bottom of your webpage before the closing body tag

# Code Sample

```
<form class="form" action="/register" method="POST">
    <fieldset>
        <div class="form-group">
          <label>phone</label>
          <input type="text" name="phone" class="phone">
          <small id="phone-error"></small>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" class="email">
          <small id="email-error"></small>
        </div>
        <div class="form-group">
          <label>password</label>
          <input type="password" name="password" class="password">
          <small id="password-error"></small>
        </div>
</form>
```

first add a script for config file anywhere in your webpage
```
check.config({
  emailError: '#email-error',
  passwordError: '#password-error',
  phoneError: '#phone-error'
})
```
the config file helps render errors when the form field details provided is invalid,
```
let email = document.querySelector('#email');
let password = document.querySelector('#password')
let phone = document.querySelector('#phone')

//validate a single item.. also have .validatePassword(password), .validateNumber(phone)
if(check.validateEmail(email)){
  //submit your form 
}

//validate everything
let validEmail = check.validateEmail(email)
let validNumber = check.validateNumber(phone)
let validPassword = check.validatePassword(password)

if(check.validateAll(validEmail, validPassword, validNumber)){
  //submit your form
}
```
