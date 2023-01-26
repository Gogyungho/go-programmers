function solution(s) {
    const arr = s.split(' ').map(i => Number(i)).sort((a, b) => a-b);
    return `${arr[0]} ${arr[arr.length - 1]}`;
}