function prime (a) {
    if (a>=1000) {
        return('Данные не верны')
    };
    for (var i=2; i<a; i++) {
        if (a%i===0) {
            return ('составное число');
        }
    }
    return('простое число');
}