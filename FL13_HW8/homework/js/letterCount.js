function letterCount(str, letter){
    let i;
    let count = 0;
    let newStr = str.toLowerCase();
    let newLetter = letter.toLowerCase();
    for(i = 0; i < str.length; i++){
        if(newStr[i] === newLetter[0]){
            count++;
        }
    }
    return count;
}
console.log(letterCount("Barry", "b"));
