function solution(cipher, code) {
    return [...cipher].reduce((acc,cur,idx) => (
        (idx + 1) % code === 0 ? acc + cur : acc
    ), '')
}