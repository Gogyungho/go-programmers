function solution(dartResult) {
    let sum = [];

    for(let i = 0; i < dartResult.length; i++){
        let sumLength = sum.length;
        if((dartResult[i-2] === "1") && (dartResult[i-1] === "0")){
            if(dartResult[i] === "S") sum.push(10**1);
            if(dartResult[i] === "D") sum.push(10**2);
            if(dartResult[i] === "T") sum.push(10**3);
        }
        if(dartResult[i] === "S"){
            sum.push(dartResult[i-1]**1);
        } else if (dartResult[i] === "D"){
            sum.push(dartResult[i-1]**2);
        } else if (dartResult[i] === "T"){
            sum.push(dartResult[i-1]**3);
        } else if (dartResult[i] === "*"){
            sum[sumLength - 1] *= 2;
            sum[sumLength - 2] *= 2;
        } else if (dartResult[i] === "#"){
            sum[sumLength - 1] *= (-1);
        } 
    }
  
    return sum.reduce((acc, curr) => acc + curr, 0);
}