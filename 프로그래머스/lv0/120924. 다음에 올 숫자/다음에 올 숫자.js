function solution(common) {
    const check = common[1] - common[0] === common[2] - common[1];
    const cd = check ? common[1]-common[0] : common[1]/common[0];
    
    return check ? 
        common[common.length-1] + cd
    : common[common.length-1] * cd;
}