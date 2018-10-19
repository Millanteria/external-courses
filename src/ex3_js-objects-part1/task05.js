function objCopy(obj) {
    var objNew={};
    for (var key in obj) {
        objNew[key]=obj[key];
    }
    return objNew
}