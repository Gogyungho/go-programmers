function solution(s){
    let arr1 = s.split('').filter((i)=> ['p','P'].includes(i)).length;
    let arr2 = s.split('').filter((i)=> ['y','Y'].includes(i)).length;
    return arr1 === arr2;
}