// Book Constructor
function Book(title, author, isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book)
{
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML =
    `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;
    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className)
{
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
    // Timeout
    setTimeout(function()
    {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function()
{
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Delete Book
UI.prototype.deleteBook = function(target)
{
    if (target.className === 'delete')
        target.parentElement.parentElement.remove();
}

// Event Listener
document.getElementById('book-form').addEventListener('submit',function(e)
{
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // Instantiate book
    const book = new Book(title, author, isbn);
    // Instantiate UI
    const ui = new UI();
    // Validate
    if (title === '' || author === '' || isbn === '')
        ui.showAlert('Please fill in all fields', 'error');
    else
    {
        // Add book to list
        ui.addBookToList(book);
        // Show success
        ui.showAlert('Book Added!', 'success');
        // Clear Fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e)
{
    // Instantiate UI
    const ui = new UI();
    // Delete book
    ui.deleteBook(e.target);
    // Show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();

})