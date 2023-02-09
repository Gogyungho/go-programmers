function solution(a, b) {
    var start = a > b ? b : a;
    var end = a > b ? a : b;
    
    return (start + end) * (end - start + 1) / 2;
}