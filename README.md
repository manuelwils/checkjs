# check
check.js is a form validation library which helps for quick assembling of frontend applications

# Usage
Include script at the bottom of your webpage before the cloasing body tag

# Code Sample

```
<form>
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
          <input type="password" name="email" class="password">
          <small id="email-error"></small>
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
var email = document.querySelector('.email');
var password = document.querySelector('.password')
var phone = document.querySelector('.phone')

//validate a single item.. also have .validatePassword(password), .validateNumber(phone)
if(check.validateEmail(email)){
  //submit your form 
}

//validate everything
if(check.validateAll(email, password, phone)){
  //submit your form
}
```
