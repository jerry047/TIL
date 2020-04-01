//Book Constructor 
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){

}

// ADD book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){

    //Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate book obj
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    e.preventDefault();
})