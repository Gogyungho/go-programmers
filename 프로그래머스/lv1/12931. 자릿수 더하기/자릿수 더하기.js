function solution(num){
    return num.toString().split('').reduce((a,b) =>  a + parseInt(b), 0);
}