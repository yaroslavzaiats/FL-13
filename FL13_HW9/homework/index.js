function convert(){
    let arr = [];
    for(let i = 0; i < arguments.length; i++){
        let arg = arguments[i];
        if(typeof arg === 'string'){
            arr[i] = parseInt(arg);
        } else {
            arr[i] = String(arg);
        }
    }
    return arr;
}
console.log(convert('1', 2, 3, '4'));


function executeforEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}
executeforEach([1,2,3], function(el) {
    console.log(el * 2)
} );


function mapArray (arr, func){
    let newArr = [];
    executeforEach(arr, function(el){
      newArr.push(func(Number(el)))
    });
    return newArr;
}
console.log(mapArray([2, '5', 8], function(el) { 
    return el + 3
}));


function filterArray(arr, func){
    let filteredArr = [];
    executeforEach(arr, function(el){
        if(func(el)){
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
console.log(filterArray([2, 5, 8], function(el) { 
    return el % 2 === 0 
}));


function containsValue (arr, checkingValue){
    let contains = false;
    executeforEach(arr, function(el){
        if(el === checkingValue){
            contains = true; 
        }
    });
    return contains;
}
console.log(containsValue([2, 5, 8], 2));


function flipOver(str){
    let flipStr = '';
    let i;
    for(i = str.length - 1; i >= 0; i--){
        flipStr += str[i];
    }
    return flipStr;
}
console.log(flipOver('hey world'));


function makeListFromRange(arr){
    let min = arr[0];
    let max = arr[1];
    let range = max-min;
    let list = [];
    for(let i = 0; i <= range; i++){
        list[i] = min + i;
    }
    return list;
}
console.log(makeListFromRange([2, 7]));


const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];  
function getArrayOfKeys (arr, name){
    let namesArr = [];
    executeforEach(arr, function(el){
      namesArr.push(el[name]);
    });
    return namesArr;
}
console.log(getArrayOfKeys(fruits, 'name'));


function substitute(arr){
    let minNum = 10;
    let maxNum = 20;
    return mapArray(arr, function(el){
      if(el > minNum && el < maxNum) {
        return '*';
      }else{
    return el;
  }
    });
}
console.log(substitute([58, 14, 48, 12, 31, 19, 10]));


const date = new Date();
function getPastDay(date, ago){
    let day = date.getUTCDate();
    let dayAgo = day - ago;
    return dayAgo;
}
console.log(getPastDay(date, 1));


function formatDate(){
    let date = arguments[0];
    let year = date.getUTCFullYear();
    let month = date.getMonth() + 1;
    let day = date.getUTCDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let fDate;
    if(hours > 9 && minutes < 10){
        fDate = `${year}/${month}/${day} ${hours}:0${minutes}`;
    } else if(hours < 10 && minutes > 9){
        fDate = `${year}/${month}/${day} 0${hours}:${minutes}`;
    } else if(hours < 10 && minutes < 10){
        fDate = `${year}/${month}/${day} 0${hours}:0${minutes}`;
    } else {
        fDate = `${year}/${month}/${day} ${hours}:${minutes}`;
    }
    return fDate;
}
console.log(formatDate(new Date()));