const root = document.getElementById('root');

let listDiv = document.createElement('div');
let pagesDiv = document.createElement('div');
pagesDiv.setAttribute('class', 'pages');

let bookList = document.createElement('ul');

let editPage = document.createElement('div');
editPage.setAttribute('class', 'edit-section');
let editInputs = document.createElement('div');
editInputs.setAttribute('class', 'edit-inputs');
let editName = document.createElement('input');
editName.setAttribute('type', 'text');
editName.setAttribute('class', 'edit-name');
let editAuthor = document.createElement('input');
editAuthor.setAttribute('type', 'text');
editAuthor.setAttribute('class', 'edit-author');
let editImage = document.createElement('input');
editImage.setAttribute('type', 'text');
editImage.setAttribute('class', 'edit-image');
let editPlot = document.createElement('input');
editPlot.setAttribute('type', 'text');
editPlot.setAttribute('class', 'edit-plot');
let editButtons = document.createElement('div');
editButtons.setAttribute('class', 'edit-buttons');
let saveEdit = document.createElement('button');
saveEdit.setAttribute('class', 'save-edit');
saveEdit.innerHTML = 'save';
let canselEdit = document.createElement('button');
canselEdit.setAttribute('class', 'cansel-button');
canselEdit.innerHTML = 'cansel';

editPage.appendChild(editInputs);
editInputs.appendChild(editName);
editInputs.appendChild(editAuthor);
editInputs.appendChild(editImage);
editInputs.appendChild(editPlot);

editPage.appendChild(editButtons);
editButtons.appendChild(canselEdit);
editButtons.appendChild(saveEdit);

let addBtn = document.createElement('button');
addBtn.classList = 'add-new-item';
addBtn.innerHTML = 'Add new';

let addPage = document.createElement('div');
addPage.setAttribute('class', 'add-section');
let addInputs = document.createElement('div');
addInputs.setAttribute('class', 'add-inputs');
let addName = document.createElement('input');
addName.setAttribute('type', 'text');
addName.setAttribute('class', 'add-name');
let addAuthor = document.createElement('input');
addAuthor.setAttribute('type', 'text');
addAuthor.setAttribute('class', 'add-author');
let addImage = document.createElement('input');
addImage.setAttribute('type', 'text');
addImage.setAttribute('class', 'add-image');
let addPlot = document.createElement('input');
addPlot.setAttribute('type', 'text');
addPlot.setAttribute('class', 'add-plot');
let addButtons = document.createElement('div');
addButtons.setAttribute('class', 'add-buttons');
let canselAdd = document.createElement('button');
canselAdd.setAttribute('class', 'cansel-button');
canselAdd.innerHTML = 'cansel';
let saveAdd = document.createElement('button');
saveAdd.setAttribute('class', 'save-add');
saveAdd.innerHTML = 'save';

let previewPage = document.createElement('div');
previewPage.setAttribute('class', 'preview-section');

let preview = document.createElement('div');
preview.setAttribute('class', 'preview');
let previewName = document.createElement('span');
previewName.setAttribute('class', 'preview-name');
let previewAuthor = document.createElement('span');
previewAuthor.setAttribute('class', 'preview-author');
let previewImage = document.createElement('img');
previewImage.setAttribute('class', 'preview-img');
let previewPlot = document.createElement('span');
previewPlot.setAttribute('class', 'preview-plot');

let previewClose = document.createElement('button');
previewClose.setAttribute('class', 'close-preview');
previewClose.innerHTML = 'close';

previewPage.appendChild(preview);
preview.appendChild(previewName);
preview.appendChild(previewAuthor);
preview.appendChild(previewImage);
preview.appendChild(previewPlot);
previewPage.appendChild(previewClose);

addInputs.appendChild(addName);
addInputs.appendChild(addAuthor);
addInputs.appendChild(addImage);
addInputs.appendChild(addPlot);

addButtons.appendChild(canselAdd);
addButtons.appendChild(saveAdd);

addPage.appendChild(addInputs);
addPage.appendChild(addButtons);

root.appendChild(listDiv);
listDiv.appendChild(bookList);
listDiv.appendChild(addBtn);

root.appendChild(pagesDiv);
pagesDiv.appendChild(editPage);
pagesDiv.appendChild(addPage);
pagesDiv.appendChild(previewPage);

let bookElements = [];
let elemIndex = null;
let prevItem = null;

const listBookItems = () => {
    bookList.innerHTML = '';
    for(let item = 0; item < bookElements.length; item++){
        let bookElem = document.createElement('li');
        bookElem.setAttribute('class', 'book');
        bookElem.setAttribute('id', `book${item+1}`);
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-item');
        editBtn.innerHTML = 'edit';
        editBtn.onclick = function() {
            editName.value = bookElements[item].name;
            editAuthor.value = bookElements[item].author;
            editImage.value = bookElements[item].image;
            editPlot.value = bookElements[item].plot;
            showEditPage();
            elemIndex = item;
        };

        let listName = document.createElement('span');
        listName.classList = 'list-name';
        let listAuthor = document.createElement('span');
        listAuthor.classList = 'list-author';
        let listImage = document.createElement('img');
        listImage.classList = 'list-image';
        let listPlot = document.createElement('span');
        listPlot.classList = 'list-plot';

        listName.onclick = function() {
            let id = item + 1;
            history.pushState({id}, `title${id}`, `?id=${id}#preview`);
            prevItem = item;
            showPreviewPage();
        }
        previewName.innerHTML = bookElements[0].name;
        listName.innerHTML = bookElements[item].name;
        listAuthor.innerHTML = bookElements[item].author;
        listImage.src = bookElements[item].image;
        listPlot.innerHTML = bookElements[item].plot;
        
        bookElem.appendChild(listName);
        bookElem.appendChild(editBtn);
        bookList.appendChild(bookElem);
    }
    saveItems();
};

function previewFunc (){
    console.log('Hi!');
}

window.addEventListener('popstate', e => {
    previewFunc(e.state.id);
});

window.addEventListener('load', () => {
    getItems();
    listBookItems();
});

addBtn.addEventListener('click', () => {
    showAddPage();
});

saveAdd.addEventListener('click', () => { 
    addBookItem(addName.value, addAuthor.value, addImage.value, addPlot.value);
    showMainPage();
});

canselAdd.addEventListener('click', () => {
    addName.value = '';
    addAuthor.value = '';
    addImage.value = '';
    addPlot.value = '';
    showMainPage();
});

saveEdit.addEventListener('click', () => {
    bookElements[elemIndex].name = editName.value;
    bookElements[elemIndex].author = editAuthor.value;
    bookElements[elemIndex].image = editImage.value;
    bookElements[elemIndex].plot = editPlot.value;
    listBookItems();
    elemIndex = null;
    showMainPage();
});

canselEdit.addEventListener('click', () => {
    let check = confirm('Discard changes?');
    if(check){
        location.hash = 'main-page';
        showMainPage();
    }
});

previewClose.addEventListener('click', () => {
    showMainPage();
});

function showMainPage () {
    editPage.style.display = 'none';
    previewPage.style.display = 'none';
    addPage.style.display = 'none';
    addBtn.style.display = 'flex';
}

function showEditPage () {
    editPage.style.display = 'flex';
    addPage.style.display = 'none';
    previewPage.style.display = 'none';
}

function showAddPage() {
    addPage.style.display = 'flex';
    editPage.style.display = 'none';
    previewPage.style.display = 'none';
}

function showPreviewPage() {
    previewPage.style.display = 'flex';
    addPage.style.display = 'none';
    editPage.style.display = 'none';
    previewName.innerHTML = bookElements[prevItem].name;
    previewAuthor.innerHTML = bookElements[prevItem].author;
    previewImage.src = bookElements[prevItem].image;
    previewPlot.innerHTML = bookElements[prevItem].plot;
}

function addBookItem(name, author, image, plot) {
    let newItem = {
        name: name,
        author: author,
        image: image,
        plot: plot
    };
    bookElements.push(newItem);
    addName.value = '';
    addAuthor.value = '';
    addImage.value = '';
    addPlot.value = '';
    listBookItems();
}

function saveItems() {
    let strItems = JSON.stringify(bookElements);
    localStorage.setItem('books', strItems);
}

function getItems() {
    let strItems = localStorage.getItem('books');
    bookElements = JSON.parse(strItems);
    !bookElements ? bookElements = [] : null;
}
