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

function displayBooks(){
for(let i=0; i<myLibrary.length();i++){
//what im going to do is add a div suing the DOM and in it its going to be like a box with multiple other text in it. The big div will be in the container and its going to be display:grid
}
}
