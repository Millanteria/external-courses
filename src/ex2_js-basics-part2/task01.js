function typeVar (a) {
    if (typeof a === 'string') {
        console.log('string')
    } else if (typeof a === 'number') {
        console.log('number')
    } else {
        console.log('underfined')
    }
}