function solution(babbling) {
    let cnt = 0;
    babbling.forEach(el => {
        if (el.split(/aya|ye|woo|ma/g).join('') === '') {
            cnt++;
        }
    });
    return cnt;
};