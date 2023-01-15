function solution(order) {
    let answer = 0;
    [...(''+order)].map(i => { 
        if(Number(i) === 3 || Number(i) === 6 || Number(i) === 9) answer++
    });
    return answer
}