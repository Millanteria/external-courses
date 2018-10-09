function objPropertyAdd(str, obj) {
    if (str in obj) {
        return obj
    } else {
        obj[str]='new';
        return obj
    }
}