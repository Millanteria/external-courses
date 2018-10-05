function arrEqualElements(arr) {
    for (var i=0; i<arr.length-1; i++) {
        if (arr[i]===arr[++i]) {
        } else {
            return false;
        }
    }
    return true;
}

var arr=[1,1,1,1];
var arr2=[1,0,1,1];
var arr3=[20,20,20,1];

var res1=arrEqualElements(arr);
var res2=arrEqualElements(arr2);
var res3=arrEqualElements(arr3);
console.log(res1, res2, res3);