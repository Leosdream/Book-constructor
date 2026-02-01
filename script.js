const myLibrary = [];

function Book(title,author,pages,read) {
     this.id=crypto.randomUUID();
  this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
   
}

function addBookToLibrary(title,author,pages,read) {
const addBook=new Book(title,author,pages,read);
myLibrary.push(addBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("AAAAAAAA", "George Orwell", 328, true);

function displayBooks(){
const container= document.getElementById('container');
container.innerHTML = '';
for(let i=0; i<myLibrary.length;i++){
const book = myLibrary[i];
const con = document.createElement("div");
con.classList.add('book-card');

const titleDL=document.createElement("div");
titleDL.textContent= "TITLE: " + book.title;
titleDL.classList.add('titleDL');

const authorDL=document.createElement("div");
authorDL.textContent="AUTHOR: "+book.author;

const pagesDL=document.createElement("div");

pagesDL.textContent="PAGES: "+book.pages;
pagesDL.classList.add('pagesDL');
const readDL=document.createElement("button");
readDL.classList.add('readDL');
//deleteBook.type = "button";
readDL.textContent = book.read ? "Read" : "Not Read";

readDL.addEventListener("click", () => {
  book.read = !book.read;
  if (book.read) {
    readDL.textContent = "Read";
} else {
    readDL.textContent = "Not Read";
}
});

const deleteBook=document.createElement("button");
deleteBook.classList.add('deleteBook');
//deleteBook.type = "button";
deleteBook.textContent = "Delete";
deleteBook.addEventListener("click", ()=>{
myLibrary.splice(i, 1);
con.remove();
});

con.appendChild(titleDL);
con.appendChild(authorDL);
con.appendChild(pagesDL);
con.appendChild(readDL);
con.appendChild(deleteBook);

container.appendChild(con);
}
}

displayBooks();


const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const pages = Number(form.pages.value);
  const read = form.read.checked;

  addBookToLibrary(title, author, pages, read);
  form.reset();
  dialog.close();
  displayBooks();
});


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});