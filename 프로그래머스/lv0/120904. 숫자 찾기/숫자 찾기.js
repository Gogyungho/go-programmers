function solution(num, k) {
  const index = [...('' + num)].findIndex(i =>  + i === k);
  return index === -1 ? -1 : index + 1;
}