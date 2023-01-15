function solution(my_string) {
    let answer = [];
    my_string.split('').forEach(i => {
        if(isNaN(i) === false) {
            answer.push(Number(i));
        };
    })
    return answer.sort();
}