

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


const displayLibrary = (library) => {
    const book = document.createElement('div');
    
    for (let i = 0; i <= library.length-1; i++) {
        libraryElement.appendChild(book)
        let title = book.appendChild(document.createElement('h2'));
        let author = book.appendChild(document.createElement('p'));
        let info = book.appendChild(document.createElement('p'));
        title.textContent = library[i].title;
        author.textContent = library[i].author;
        info.textContent = library[i].bookInfo();
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
const submitBtn = document.querySelector('.submit');

const submitBook = (e) => {
    e.preventDefault(); 

    let title = document.getElementsByName('title');
    let author = document.getElementsByName('author');
    let pages = document.getElementsByName('pages');
    let read = document.getElementsByName('read');

    addBook(title, author, pages, read);
    displayLibrary(library);
    console.log(displayLibrary(library))

}


addBookBtn.addEventListener('click', formPopUp);
submitBtn.addEventListener('submit', submitBook);

addBook('The Hobbit', 'J. R. R. Tolkien', 310)
addBook('The Lord of the Rings', 'J. R. R. Tolkien', 1178)

document.body.onload = displayLibrary(library);