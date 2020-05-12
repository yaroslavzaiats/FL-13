const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

let rootNode = document.getElementById('root');

let fatherElement = document.createElement('ul');
rootNode.appendChild(fatherElement);

function makeFolderTree(struct, fatherEl) {
  struct.forEach(el => {
      let listItem = document.createElement('li');
      let itemContainer = document.createElement('p');
      let itemTitle = document.createElement('span');
      let icon = document.createElement('i');
      icon.className = 'material-icons';
      itemTitle.innerHTML = el.title;
      itemContainer.appendChild(icon);
      itemContainer.appendChild(itemTitle);
      listItem.appendChild(itemContainer);
      fatherEl.appendChild(listItem);
      if(!el.folder){
        icon.innerHTML = 'insert_drive_file';
      } else {
        icon.innerHTML = 'folder';
      }
      if(el.folder){
        itemContainer.className = 'folder';
        itemContainer.addEventListener('click', function (){
          icon = this.children[0].innerHTML;
          if (icon === 'folder_open') {
              this.children[0].innerHTML = 'folder'; 
          } else {
              this.children[0].innerHTML = 'folder_open'; 
          }
          let folderBlock = this.nextElementSibling.style.display;
          if (folderBlock === 'block') {
              this.nextElementSibling.style.display = 'none';
          } else {
              this.nextElementSibling.style.display = 'block';
          }
        });
      } 
      if (el.children === false || el.children === null && el.folder) {
          let emptyAttachment = document.createElement('ul');
          let emptyListItem = document.createElement('li');
          let emptyItemContainer = document.createElement('p');
          emptyItemContainer.innerHTML = 'Folder is empty';
          emptyItemContainer.style.fontStyle = 'italic';
          emptyListItem.appendChild(emptyItemContainer);
          emptyAttachment.appendChild(emptyListItem);
          emptyAttachment.style.display = 'none';
          listItem.appendChild(emptyAttachment);
      }
      if (el.children) {
          let newAttachment = document.createElement('ul');
          newAttachment.style.display = 'none';
          listItem.appendChild(newAttachment);
          makeFolderTree(el.children, newAttachment);
      }
  });  
}

makeFolderTree(data, fatherElement);


let customContextMenu = document.createElement('ul');
customContextMenu.className = 'menu';
fatherElement.appendChild(customContextMenu);
let contextMenuRename = document.createElement('li');
contextMenuRename.innerHTML = 'Rename';
contextMenuRename.id = 'rename';
customContextMenu.appendChild(contextMenuRename);
let contextMenuDelete = document.createElement('li');
contextMenuDelete.innerHTML = 'Delete item';
contextMenuDelete.id = 'delete';
customContextMenu.appendChild(contextMenuDelete);
let menu = null;
let rightClickTarget;
let titleInput;

document.addEventListener('DOMContentLoaded', function(){
    menu = document.querySelector('.menu');
    menu.classList.add('off');
    document.addEventListener('contextmenu', showmenu);
    document.addEventListener('click', hideMenu);
    addMenuListeners();
});    
function addMenuListeners(){
    document.getElementById('rename').addEventListener('click', renameItem);
    document.getElementById('delete').addEventListener('click', deleteItem);
}
        
function renameItem(){
    titleInput = document.createElement('input');
    titleInput.classList.add('titleInput');
    let text = rightClickTarget.closest('span').innerText;
    titleInput.setAttribute('value', text);
    let rightBoundery = titleInput.value.indexOf('.')||titleInput.value.length - 1;
    rightClickTarget.closest('p').replaceChild(titleInput, rightClickTarget.closest('span'));
    titleInput.focus();
    titleInput.setSelectionRange(0, rightBoundery);
    hideMenu();
}
function deleteItem(){
    hideMenu();
    rightClickTarget.closest('li').remove();
}

function showmenu(ev){
    ev.preventDefault(); 
    menu.style.top = `${ev.clientY}px`;
    menu.style.left = `${ev.clientX}px`;
    menu.classList.remove('off');
    rightClickTarget = event.target;
}
        
function hideMenu(){
    menu.classList.add('off');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}

function saveTitle(){
    /*let newSpan = document.createElement('span');
    let qwe = document.querySelector('.titleInput');
    newSpan.innerHTML = qwe.value;
    rightClickTarget.closest('p').replaceChild(newSpan, qwe);*/
    console.log('qwe');
}