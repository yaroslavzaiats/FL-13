const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const getSuccessCode = 200;
const postSuccessCode = 201;
const putSuccessCode = 204;
const deleteSuccessCode = 204;
const doneReadyState = 4;
const secondItem = 1;
const thirdItem = 2;

let addUserButton = document.querySelector('.add-user-form__add-btn');
addUserButton.addEventListener('click', () => {
  addUser();
  addUserButton.disabled = true;
});

document.onload = getUsers();

function showUser(user) {
  let usersList = document.querySelector('.users-list');
  let userItem = document.createElement('li');
  userItem.classList = 'user-item';

  let idHolder = document.createElement('span');
  idHolder.classList = 'user-id';
  idHolder.textContent = user.id;

  let nameHolder = document.createElement('input');
  nameHolder.classList = 'user-name';
  nameHolder.value = user.name;

  let usernameHolder = document.createElement('input');
  usernameHolder.classList = 'username-holder';
  usernameHolder.value = user.username;

  let updateBtn = document.createElement('button');
  updateBtn.classList = 'update-btn';
  updateBtn.innerHTML = 'Update';

  let deleteBtn = document.createElement('button');
  deleteBtn.classList = 'delete-btn';
  deleteBtn.innerHTML = 'Delete'

  usersList.appendChild(userItem);
  userItem.append(idHolder, nameHolder, usernameHolder, updateBtn, deleteBtn);
  updateBtn.addEventListener('click', (e) => {
    updateUser(e.target);
    updateBtn.disabled = true;
  });
  deleteBtn.addEventListener('click', (e) => {
    deleteUser(e.target);
    deleteBtn.disabled = true;
  });
}

function getUsers() {
  let request = new XMLHttpRequest();
  request.open('GET', `${baseUrl}/users`, true)
  request.onreadystatechange = function() {
    if (request.readyState === doneReadyState && request.status === getSuccessCode) {
        let response = JSON.parse(request.responseText);
        response.forEach(element => {
          showUser(element);
        });
    }
  }

  request.onprogress = function() {
    let loadingNotification = document.querySelector('.loading-notification');
    loadingNotification.parentNode.removeChild(loadingNotification);
  }
  request.send();
}

function addUser() {
  let nameInput = document.querySelector('.add-user-form__name');
  let userNameInput = document.querySelector('.add-user-form__user-name');
  let name = nameInput.value;
  let userName = userNameInput.value;

  saveUser(name, userName);
}

function saveUser(name, userName) {
    const userItem = {
    'name': name,
    'username': userName
  }

  let request = new XMLHttpRequest();
  request.open('POST', `${baseUrl}/users`, true)
  request.setRequestHeader('Content-type', 'application/json');

  request.onreadystatechange = function() {
    if (request.readyState === doneReadyState && request.status === postSuccessCode) {
        showNewUser();
    }
  }

  request.send(JSON.stringify(userItem));
}

function showNewUser() {
  let request = new XMLHttpRequest();

  request.open('GET', `${baseUrl}/users`, true)
  request.onreadystatechange = function() {
    if (request.readyState === doneReadyState && request.status === getSuccessCode) {
      let response = JSON.parse(request.responseText);
      showUser(response[response.length - 1]);
      addUserButton.disabled = false;
    }
  }

  request.send();
}

function updateUser(target) {
  let targetId = target.parentNode.childNodes[0].textContent;
  const updatedUser = {
    'name': target.parentNode.childNodes[secondItem].value,
    'username': target.parentNode.childNodes[thirdItem].value
  }

  let request = new XMLHttpRequest();
  request.open('PUT', `${baseUrl}/users/${targetId}`);
  request.setRequestHeader('Content-type', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === doneReadyState && request.status === putSuccessCode) {
      target.disabled = false;
    }
  }

  request.send(JSON.stringify(updatedUser));
}

function deleteUser(target) {
  let targetId = target.parentNode.childNodes[0].textContent;
  let request = new XMLHttpRequest();
  request.open('DELETE', `${baseUrl}/users/${targetId}`);
  request.setRequestHeader('Authorization', 'admin');
  request.onreadystatechange = function() {
    if (request.readyState === doneReadyState && request.status === deleteSuccessCode) {
      target.parentNode.parentNode.removeChild(target.parentNode);
      target.disabled = false;
    }
  }

  request.send();
}