function positiveSum (arr){
    let i;
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(positiveSum([2, 4, 6, 8]));
