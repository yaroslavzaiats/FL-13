function isBigger(a, b){
    return a > b;
}

function getDifference(a, b){
    if(isBigger(a, b)){
        return a - b;
    } else {
        return b - a;
    }
}
console.log(getDifference(2, -2));
