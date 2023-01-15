function solution(n, numlist) {
    let arr = [];
    numlist.forEach(i => {
        if(i%n === 0) {
            arr.push(i);
        };
    })
    return arr;
}