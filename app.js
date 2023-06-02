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


