function arrEqualElements(arr) {
    var element = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== element) {
            return false
        }      
    }
    return true
}