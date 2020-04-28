let login = prompt('Login:');
let userLog = 'User';
let userPass = 'UserPass';
let adminLog = 'Admin';
let adminPass = 'RootPass';
let currentTime = new Date().getHours();
let nameLength = 4;
let eveningTime = 20;
console.log(currentTime);
if(login === '' || login === null){
    alert('Canceled.');
} else if (login.length < nameLength){
    alert(`I don't know any users having name length less than 4 symbols`);
} else if (login === userLog || login === adminLog){
    let pass = prompt('Password:');
    if(pass === '' || pass === null){
        alert('Canceled.');
    } else if(login === userLog && pass === userPass || login === adminLog && pass === adminPass){
        if(currentTime < eveningTime){
            alert(`Good day, dear ${login}!`);
        } else {
            alert(`Good evening, dear ${login}!`);
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}