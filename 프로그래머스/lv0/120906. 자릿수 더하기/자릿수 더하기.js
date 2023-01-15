function solution(n) {
    let numArr = n.toString().split('').map(Number);
    return numArr.reduce((acc, cur) => acc+cur);
}