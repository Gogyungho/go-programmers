function solution(x) {
    var result = x.toString().split('').reduce((i, j)=> parseInt(i) + parseInt(j), 0);
    return x % result ? false : true;
}