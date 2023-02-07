function solution(num) {
    var result = 0;
    var n = num;
    
    while(true){
        if(n == 1){
            return result;
        }
        if(result >= 500){
            return -1;
        }
        n = (n%2===0) ? n/2 : n*3+1;
        result++;
    }
}