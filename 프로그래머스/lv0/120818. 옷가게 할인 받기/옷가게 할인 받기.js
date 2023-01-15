function solution(price) {
    switch(true){
        case price >= 100000 && price < 300000:
            return parseInt(price*0.95);
            break;
        case price >= 300000 && price < 500000:
            return parseInt(price*0.9);
            break;
        case price >= 500000: 
            return parseInt(price*0.8);
            break;
        default:
            return price;
            break;
    };
};