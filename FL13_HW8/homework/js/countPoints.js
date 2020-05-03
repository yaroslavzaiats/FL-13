function isBigger(a, b){
    return a > b;
}

function countPoints(collection){
    let i; 
    let str;
    let count = 0;
    for(i = 0; i < collection.length; i++){
        str = collection[i];
        if(isBigger(str[0], str[2])){
            count += 3;
        } else if(str[0] === str[2]){
            count += 1;
        } else {
            count += 0;
        }
    }
    return count;
}
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
