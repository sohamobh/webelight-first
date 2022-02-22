let message = "ES6 Modules.. Variable"; //export keyword can be used here as well

function user(name) { //export keyword can be used here as well
    return `Hello ${name}`;
}

class test { //export keyword can be used here as well
    constructor() {
        console.log("Class");
    }
}

export { message, user, test }; //shortcut for export

export default function () {
    console.log("Default..");
}

export function testagg() {
    return 'Aggregate';
}