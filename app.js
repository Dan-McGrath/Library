

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

const removeEvent = (e) => {
    library.splice(e.target.dataset.index, 1);
    resetLibrary();
    displayLibrary(library);
} 

const changeRadioInput = (e) => {
    
    if (e.target.checked === true) {
        let index = e.target.dataset.index;
        let bookAtIndex = library[index];
        if (bookAtIndex.read === true) {
            bookAtIndex.read = false
        } else {
            bookAtIndex.read = true
        }
    }
    resetLibrary();
    displayLibrary(library);

}

const radioLabelEvent = (e) => {
    if (e.target.dataset.read === 'false') {
        let index = e.target.dataset.index;
        let bookAtIndex = library[index];
        if (bookAtIndex.read === true) {
            bookAtIndex.read = false
        } else {
            bookAtIndex.read = true
        }
    } 
    resetLibrary();
    displayLibrary(library);
    
}

const displayLibrary = (library) => {

    for (let i = 0; i <= library.length -1; i++) {
        // create book divs
        const book = document.createElement('div');
        book.classList.add('books');
        book.dataset.index = i;

        // Create book info div
        const bookInfoText = document.createElement('div');
        bookInfoText.classList.add('book-info');
        let bookTitle = bookInfoText.appendChild(document.createElement('h2'));
        let bookAuthor = bookInfoText.appendChild(document.createElement('p'));
        bookAuthor.classList.add('book-author')
        let bookInfo = bookInfoText.appendChild(document.createElement('p'));
        bookInfo.classList.add('book-info-text')
        

        // create remove btn div
        const removeBtnDiv = document.createElement('div');
        removeBtnDiv.classList.add('btn-remove');

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'remove');
        removeBtn.dataset.index = i;
        removeBtn.textContent = 'Remove';
        removeBtnDiv.appendChild(removeBtn)
        removeBtn.addEventListener('click', removeEvent);

        book.appendChild(removeBtnDiv);
        

        //Create read/not read Toggle
        const readBool = document.createElement('div');
        readBool.classList.add('read-bool')

        const boolToggleInputRead = document.createElement('input');
        boolToggleInputRead.setAttribute('type', 'radio');
        boolToggleInputRead.setAttribute('name', 'read-' + i);
        boolToggleInputRead.setAttribute('id', 'update-read-' + i);
        boolToggleInputRead.dataset.index = i;
        boolToggleInputRead.classList.add('input');
        boolToggleInputRead.addEventListener('click', changeRadioInput);

        const boolToggleInputNotRead = document.createElement('input');
        boolToggleInputNotRead.setAttribute('type', 'radio');
        boolToggleInputNotRead.setAttribute('name', 'read-'+ i);
        boolToggleInputNotRead.setAttribute('id', 'update-not-read-' + i);
        boolToggleInputNotRead.dataset.index = i;
        boolToggleInputNotRead.classList.add('input');
        boolToggleInputNotRead.addEventListener('click', changeRadioInput);

        if (library[i].read === true) {
            boolToggleInputRead.checked = true;
            boolToggleInputNotRead.checked = false;
        } else {
            boolToggleInputRead.checked = false;
            boolToggleInputNotRead.checked = true;
        }

        const boolToogleLabelRead = document.createElement('label');
        boolToogleLabelRead.setAttribute('for', 'update-read-' + i)
        boolToogleLabelRead.textContent = 'Read';
        boolToogleLabelRead.dataset.index = i;
        boolToogleLabelRead.classList.add('label');
        boolToogleLabelRead.addEventListener('click', radioLabelEvent);
        
        if (library[i].read === true) {
            boolToogleLabelRead.dataset.read = 'true';
        } else {
            boolToogleLabelRead.dataset.read = 'false';
        }

        const boolToogleLabelNotRead = document.createElement('label');
        boolToogleLabelNotRead.setAttribute('for', 'update-not-read-' + i)
        boolToogleLabelNotRead.textContent = 'Not Read';
        boolToogleLabelNotRead.dataset.index = i;
        boolToogleLabelNotRead.classList.add('label');
        boolToogleLabelNotRead.addEventListener('click', radioLabelEvent)
        
        if (library[i].read === true) {
            boolToogleLabelNotRead.dataset.read = 'false';
        } else {
            boolToogleLabelNotRead.dataset.read = 'true';
        }
        
        readBool.appendChild(boolToogleLabelRead);
        readBool.appendChild(boolToggleInputRead);
        readBool.appendChild(boolToogleLabelNotRead);
        readBool.appendChild(boolToggleInputNotRead);
        
        
        book.appendChild(readBool);
        

        // add book info
        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = library[i].author;
        bookInfo.textContent = library[i].bookInfo();
        
        book.appendChild(bookInfoText)
        libraryElement.appendChild(book);
        
        
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

addBook('The Hobbit', 'J. R. R. Tolkien', 310, true)
addBook('The Lord of the Rings', 'J. R. R. Tolkien', 1178)

document.body.onload = displayLibrary(library);

