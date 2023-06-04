

let library = [];
const libraryElement = document.querySelector('.library');

function Book(title, author, pages, read=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = () => {
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


addBook('The Hobbit', 'J. R. R. Tolkien', 310)
addBook('The Lord of the Rings', 'J. R. R. Tolkien', 1178)

document.body.onload = displayLibrary(library);