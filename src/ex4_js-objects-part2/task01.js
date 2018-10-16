var obj = {
    a:1,
    b:2,
    c:3
};
var objNew = Object.create(obj);

function findProperty(objNew, prop) {
    for (prop in objNew.__proto__) {
        if (objNew.__proto__[prop] != 'underfined') {
        return true
        } else {
            return false
        }
    }
}

var x=findProperty(objNew, 'd');
console.log(x);

console.log(objNew.__proto__['d']);