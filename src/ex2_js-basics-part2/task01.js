function typeVar (a) {
    if (typeof a === 'string') {
        console.log('string')
    } else if (typeof a === 'number') {
        console.log('number')
    } else {
        console.log('underfined')
    }
}

var b=10, str='my', arr=[];

typeVar(b);
typeVar(str);
typeVar(arr);
