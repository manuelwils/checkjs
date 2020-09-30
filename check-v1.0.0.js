/**
* check.js is a public Library.
* @author: Emmanuel Godswill - (Ryan Lincoln);
* @version: 1.0.0;
* Usage: Include script at the bottom of webpage just before closing body tag;
*/
var check, exports = {};
!(function () {
    "use strict";
    var n;
    (check = function () {}),
        "undefined" === Object.prototype && (Object.prototype, Object[["prototype"]]),
        (check.prototype = {
            config: function () {
                var e = arguments[0];
                if (e && "object" == typeof e) return (n = e);
            },
            validateEmail: function (e) {
                return (e = e.replace(" ", "")), !!/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-z]/.test(e) || (n && n.emailError && (document.querySelector(n.emailError).innerHTML = "<span>Invalid email address</span>"), !1);
            },
            validateNumber: function (e) {
                return (e = e.replace(" ", "")), !!/(\+\d{1,3})?-?(\d{3,4})-?(\d{3,4})-?(\d{3,4})/.test(e) || (n && n.phoneError && (document.querySelector(n.phoneError).innerHTML = "<span>Invalid phone number</span>"), !1);
            },
            validatePassword: function (e) {
                return (
                    !!/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&\*\(\)\_\-\+\=\{\}\|\:\;\"\'\?\>\<\.\,])?.{8,}$/.test(e) ||
                    (n && n.passwordError && (document.querySelector(n.passwordError).innerHTML = "<span>Weak password, password must contain an uppercase, lowercase and number of 8 characters minimum</span>"), !1)
                );
            },
            validateAll: function () {
                for (var e = Array.prototype.slice.call(arguments), r = 0; r < e.length; r++) {
                    if (!0 !== e[r]) return n && n.allErrors && (document.querySelector(n.allErrors).innerHTML = "<span>Invalid form field details, crosscheck details provided</span>"), !1;
                }
                return !0;
            },
        }),
        (window.check && "undefined" !== window.check) || (window.check = new check());
})(),
    (exports.default = check);
