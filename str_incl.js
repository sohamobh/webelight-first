// The includes() method determines whether a string contains another string
// The includes() method returns true if the searchString found in the string; otherwise false.

let mail = 'abc@gmail.com';
console.log(mail.includes('@'));
console.log(mail.includes('abc'));
console.log(mail.includes('Abc'));//case sensitivity
console.log(mail.includes('@', 3));//position