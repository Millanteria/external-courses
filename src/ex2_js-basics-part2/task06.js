function prime (a) {
    if (a>=1000) {
        return('Данные неверны')
    };
    for (var i=2; i<a; i++) {
        if (a%i===0) {
            return ('Число ' + a + ' - составное число');
        }
    }
    return('Число ' + a + ' - простое число');
}