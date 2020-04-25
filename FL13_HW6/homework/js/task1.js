let checkNum = parseFloat(prompt('Enter check number'));
let tipNum = parseFloat(prompt('Enter tip percentage'));
console.log(checkNum);
console.log(tipNum);
if(checkNum <= 0 || isNaN(checkNum) || tipNum < 0 || tipNum > 100 || isNaN(tipNum)){
    alert('Invalid input data');
} else {
    let tipAmount = checkNum * tipNum/100;
    console.log(tipAmount);
    let totalSum = checkNum + tipAmount;
    console.log(totalSum);
    alert(`Check number: ${checkNum.toFixed(2)}
Tip: ${tipNum.toFixed(2)}%
Tip amount: ${tipAmount.toFixed(2)}
Total sum to pay:  ${totalSum.toFixed(2)}`);
}