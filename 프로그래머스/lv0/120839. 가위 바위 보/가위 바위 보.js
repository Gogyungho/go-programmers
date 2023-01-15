function solution(rsp) {
  let result = {0: 5, 2: 0, 5: 2};
  return [...rsp].map(i => result[i]).join('');
}