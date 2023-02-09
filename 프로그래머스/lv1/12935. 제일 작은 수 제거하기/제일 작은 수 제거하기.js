function solution(arr) {
    if(arr.length <= 1){
        return [-1];
    } else {
        var i = arr.indexOf(Math.min(...arr));
        arr.splice(i, 1);
        return arr;
    }
}