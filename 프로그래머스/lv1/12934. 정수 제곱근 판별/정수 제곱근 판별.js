function solution(n) {
    var sqrt = Math.sqrt(n);
    return (sqrt === parseInt(sqrt)) ? Math.pow(sqrt+1, 2) : -1; 
}