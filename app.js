

let library = [];
const libraryElement = document.querySelector('.library');


class Book{
    constructor(title, author, pages, read=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

    bookInfo() {
        let hasRead = (this.read ? 'have' : 'have not')
        return `${this.title} by ${this.author} has ${this.pages} pages. You ${hasRead} read this book.`
    }
    
}

const addBook = (title, author, pages, read=false) => {
    let newBook = new Book(title, author, pages, read);
    library.unshift(newBook);
}

// refreshes html by clearing divs
const resetLibrary = () => {
    while (libraryElement.childNodes[1]) {
        libraryElement.childNodes[1].remove()
    }
}

const displayLibrary = (library) => {

    for (let i = 0; i <= library.length -1; i++) {
        // create book divs
        const book = document.createElement('div');
        book.classList.add('books');
        book.dataset.index = i;

        libraryElement.appendChild(book);
        // add book info
        let bookTitle = book.appendChild(document.createElement('h2'));
        let bookAuthor = book.appendChild(document.createElement('p'));
        let bookInfo = book.appendChild(document.createElement('p'));
        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = library[i].author;
        bookInfo.textContent = library[i].bookInfo();
    }

}

// Add Book
const addBookBtn = document.querySelector('.btn');
const bookForm = document.querySelector('.book-form');

const formPopUp = () => {
    if (addBookBtn.dataset.active === 'false') {
        addBookBtn.dataset.active = 'true';
        bookForm.dataset.active = 'true';
    } else {
        addBookBtn.dataset.active = 'false';
        bookForm.dataset.active = 'false';
    }
   
}


//Submit Book
const addBookForm = document.getElementById('book-form');
const submit = document.getElementById('submit')

const submitBook = (e) => {
    e.preventDefault();
    let output_box = document.getElementById('output-box')
    // Get Values
    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let newRead = document.getElementById('read').checked;
    
    
    // Validations
    if (newTitle === '' || newAuthor === '' || newPages === '') {
        let warn = 'Please add book info!';
        
        
        if (output_box.innerHTML === '') {
            output_box.innerHTML += warn;
        }
            
    } else {
        // Add values to library
        addBook(newTitle, newAuthor, newPages, newRead);

        
        // show new library
        resetLibrary()
        displayLibrary(library)

        // Clear info
        output_box.innerHTML = '';
        addBookBtn.dataset.active = 'false';
        bookForm.dataset.active = 'false';
        addBookForm.reset();
    }

    
    
    
}


addBookBtn.addEventListener('click', formPopUp);
submit.addEventListener('click', submitBook);

addBook('The Hobbit', 'J. R. R. Tolkien', 310)
addBook('The Lord of the Rings', 'J. R. R. Tolkien', 1178)

document.body.onload = displayLibrary(library);