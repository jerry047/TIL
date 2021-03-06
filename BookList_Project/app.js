//Book Constructor 
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {} 

// ADD book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert Cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Show alerts
UI.prototype.showAlert = function(message, className){
    //Create div
    const div = document.createElement('div');
    //Add class
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);
    //Timeout after 2 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);

}

// Delete Book prototype
UI.prototype.deleteBook = function (target) { 
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
 }

// Clear fields function
UI.prototype.clearFields = function () { 
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
 }

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){

    //Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book obj
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Please fill all the fields', 'error');
    }else {

    // Add book list to UI
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added', 'success');

    // Clear Fields
    ui.clearFields();
    }

    e.preventDefault();
})

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    //Show delete alert
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
})