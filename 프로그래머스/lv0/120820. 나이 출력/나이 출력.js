function solution(age) {
    const date = new Date();
    const year = date.getFullYear();
    return (year-age)+1;
}