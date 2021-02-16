let myLibrary = [
  {
    title: "El oso Juancho",
    author:"Samantha",
    pages: 231,
    read: true
  },
  {
    title: "El oso Juancho 2",
    author:"Samantha",
    pages: 255,
    read: true
  },
  {
    title: "El oso Juancho 3: La venganza",
    author:"Samantha",
    pages: 324,
    read: false
  }
];


const container = document.querySelector("#container");
getBookVisual();


function Book (title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
  const book = new Book (title,author,pages,read);
  myLibrary.push(book);
  getBookVisual();
  getBook();
}


function getBook(){
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}


function changeStateRead(numBook){
  myLibrary[numBook].read = !myLibrary[numBook].read;
  getBookVisual();
  getBook();
}


function deleteBook(numBook){
  myLibrary.splice([numBook],1);
  getBookVisual();
  getBook();
}


//Visual
function getData(){
  let title = document.getElementById("titleBook").value;
  let author = document.getElementById("authorBook").value;
  let pages = document.getElementById("numPages").value;
  let read = document.getElementById("isRead").checked;
    if (title == "" || author == "" || pages == ""){
      alert("Invalid data");
    }else{      
      addBookToLibrary(title,author,pages,read);
      cleanForm();
      closeModal();
    }
}

function cleanForm(){
  document.getElementById("titleBook").value = "";
  document.getElementById("authorBook").value = "";
  document.getElementById("numPages").value = "";
  document.getElementById("isRead").checked = false;
}

function resetWindow(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getBookVisual(){
  if (container.children.length > 0){
    resetWindow();
  }

  myLibrary.forEach(book => {
    let indexBook = myLibrary.indexOf(book);

    const divBook = document.createElement("div");
    divBook.classList.add("card-book");


    const titleBook = document.createElement("h2");
    titleBook.classList.add("title-book");
    titleBook.textContent = book.title;
    divBook.appendChild(titleBook);

    const authorBook = document.createElement("p");
    authorBook.classList.add("author-book");
    authorBook.textContent = `Author: ${book.author}`;
    divBook.appendChild(authorBook);

    const numPages = document.createElement("p");
    numPages.classList.add("num-pages-book");
    numPages.textContent = `Pages:  ${book.pages}`;
    divBook.appendChild(numPages);

    const changeRead = document.createElement("button");
    changeRead.classList.add("btn");
    changeRead.classList.add("btn-read");
    changeRead.textContent = book.read ? "Read" : "Unread";
    changeRead.onclick = () => changeStateRead(indexBook);
    divBook.appendChild(changeRead);

    const deleteCurrent = document.createElement("button");
    deleteCurrent.classList.add("btn");
    deleteCurrent.classList.add("btn-delete");
    deleteCurrent.textContent = "Delete";
    deleteCurrent.onclick = () => deleteBook(indexBook);
    divBook.appendChild(deleteCurrent);

    container.appendChild(divBook);
  });
}


//Form
function formBook() {
  const modal = document.querySelector("#modal");
  modal.style.display = "flex";
}


function closeModal(){
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
}