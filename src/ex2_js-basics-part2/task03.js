function arrCheck(arr) {
    var evenNum=0, oddNum=0, zeros=0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]===0) {
            zeros++
        }
        if (arr[i]%2===0 && arr[i]!==0) {
            evenNum++;
        }
        if (arr[i]%2!==0) {
            oddNum++;
        }
    }
    var result=[];
    result[0]=evenNum;
    result[1]=oddNum;
    result[2]=zeros;

    console.log(result);
}