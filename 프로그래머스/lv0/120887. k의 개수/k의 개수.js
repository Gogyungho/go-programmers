function solution(i, j, k) {
    var answer = 0;
    for(let a=i; a<=j; a++){
        [...(''+a)].map(i => {if(Number(i) === k) answer++} )
    }
    return answer;
}