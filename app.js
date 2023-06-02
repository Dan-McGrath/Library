let library = [];

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


const displayLibrary = (arr) => {
    for (let i = 0; i <= arr.length-1; i++) {
        console.log(arr[i].bookInfo());
    }
}



addBook('The Hobbit', 'J. R. R. Tolkien', 310)
addBook('The Lord of the Rings', 'J. R. R. Tolkien', 1178)
console.log(displayLibrary(library));