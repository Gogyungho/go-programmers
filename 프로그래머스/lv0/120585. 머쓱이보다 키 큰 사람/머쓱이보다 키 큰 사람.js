function solution(array, height) {
   let result = 0;
    array.forEach(value => {
        if(value > height) {
            result++;
        };
    });
    
    return result;
}