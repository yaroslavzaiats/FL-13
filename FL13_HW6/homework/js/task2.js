let str = prompt('Type your word');
let spaceTest = /^\s+$/.test(str);
if(str.length === 0 || spaceTest){
    alert('Invalid input data');
} else {
    if(str.length%2){
        let midCharNum = (str.length - 1 )/2;
        alert(str[midCharNum]);
    } else {
        let midCharNum = str.length/2;
        alert(`${str[midCharNum - 1]}${str[midCharNum]}`);
    }
}