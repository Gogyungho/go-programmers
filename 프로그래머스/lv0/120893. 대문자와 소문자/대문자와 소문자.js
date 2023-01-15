function solution(my_string) {
    let newArr = [];
    return [...my_string].map(i => {
        if(i.match(new RegExp(/^[A-Z]/)) !== null){
           return i.toLowerCase();
        }else {
            return i.toUpperCase()
        };
    }).join('');
    
}