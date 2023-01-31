function solution(num) {
    var answer = [];
    for(let i = 0; i < num.length; i++){
        for(let j = i+1; j < num.length; j++){
            answer.push(num[i]+num[j]);
        }
    }
    return [...new Set(answer)].sort((a,b)=>a-b);
}