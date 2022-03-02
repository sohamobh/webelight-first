const addstr = (str)=>str.indexOf('New') === 0||str.indexOf('new') === 0 ? str: `New! ${str}`;
console.log(addstr('Offers'));
console.log(addstr('New!'));
console.log(addstr('new!'));