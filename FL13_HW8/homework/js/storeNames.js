function storeNames (){
    let i;
    let arr = [];
    for (i = 0; i < arguments.length; i++){
        arr[i] = arguments[i];
    }
    return arr;
}
console.log(storeNames('Nick Fury', 'Iron Man', 'Doctor Strange'));
