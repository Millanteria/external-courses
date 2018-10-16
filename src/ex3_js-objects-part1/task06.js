function objDeepClone(obj) {
    var objNew={};
    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            objNew[key]=[];
            for (var i=0; i<obj[key].length; i++) {
            objNew[key][i]=obj[key][i];
            }
        } else if (typeof obj[key]==='object') {
            objNew[key]=objDeepClone(obj[key]);
        } else {
            objNew[key]=obj[key];
        }
    }
    return objNew;
}

var obj={
    a:1,
    bh:21,
    123:'123',
    l:{
        kj:2,
        b:3
    },
    g:[{oj:'f'},'h']
};
console.log(obj);
console.log(objDeepClone(obj));
console.log(obj.g===objDeepClone(obj).g);