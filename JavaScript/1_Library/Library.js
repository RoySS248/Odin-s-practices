let myLibrary = ["El oso Juancho", "El oso Juancho 2", "El oso Juancho 3: La venganza"];

function Book() {

}

function addBookToLibrary() {

}



const container = document.querySelector("#container");

myLibrary.forEach(book => {
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = book;
  container.appendChild(paragraph);
});

function formBook() {
  const modal = document.querySelector("#modal");
  modal.style.display = "flex";
}

function closeModal(){
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
}