function solution(s) {
    let string = [/zero/ig, /one/ig, /two/ig, /three/ig, /four/ig, /five/ig, /six/ig, /seven/ig, /eight/ig, /nine/ig];
    
    for (let i=0; i<50; i++){
      let answer = s.replace(string[i], i);
        s=answer;
    };
    return parseInt(s);
};

