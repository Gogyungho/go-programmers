function solution(a, b) {
    var answer = '';
    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    answer = days[new Date(2016, --a, b).getDay()];
    return answer;
}