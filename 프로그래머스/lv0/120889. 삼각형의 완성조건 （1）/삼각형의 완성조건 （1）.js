function solution(sides) {
    const sideSort = sides.sort((a, b) => a-b);
    const largeNum = sideSort.slice(2);
    const calNum = sideSort.slice(0,2).reduce((acc, cur) => acc+cur);
    if(largeNum < calNum) {
        return 1;
    } else {
        return 2;
    };
};