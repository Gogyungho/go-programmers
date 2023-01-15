function solution(s1, s2) {
    let result = 0;
    s1.forEach(i => s2.forEach(j => {
        if(i === j) {
            result++;
        };
    }));
    return result;
}