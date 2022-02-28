//useful for validation and adding custom behaviour
//proxy is a wrapper
function fakeproxy(target, handler) {
    return {
        get: handler.get
            ? (property) => handler.get(target, property)
            : (property) => target[property],
        set: handler.set
            ? handler.set
            : (property, value) => (target[property] = value),
    };
}
const myobj = {
    //name: 'Soha',
};
const handler = {
    get: (target, property) => {
        return `YOUR NAME IS ${target[property]}`;
    }
};
const myproxy = new fakeproxy(myobj, handler);
myproxy.set('name', 'Soha')
const name = myproxy.get('name');
console.log(name);