function solution(my_string) {
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex, "");
    return my_string.replace(regex, '').split('').map(Number).reduce((acc, cur)=> acc + cur);
}