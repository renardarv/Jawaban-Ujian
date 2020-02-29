
const userRegex = /^[0-9][a-z]{3,6}[0-9]$/;
const is_username_valid = str => str.match(userRegex) && str[0] === str[str.length-1] ? true : false

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[-]).{7,11}$/; 
let pass = '1-2brah34'
let number = /[a-z|-]+/g
let string = /[0-9|-]+/g
const is_password_valid = str => str.match(passRegex) && str.replace(number, '').length === str.replace(string, '').length ? true : false


console.log(is_username_valid('6andi7')); // false
console.log(is_username_valid('1brah1')); // true 
console.log(is_password_valid('andi-123')); // false
console.log(is_password_valid('1-2brah34')); // true
