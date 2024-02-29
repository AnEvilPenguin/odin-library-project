const library = document.querySelector('.library');

const myLibrary = [];

function Book(title, author, pages, read, coverImgUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverImgUrl = coverImgUrl;
}

function createElement(type, className, id) {
    const element = document.createElement(type);

    element.classList.add(className);
    element.id = id;

    return element;
}


function displayBook({title, author, pages, read, coverImgUrl}, id) {
    const card = createElement('div', 'card', id);

    const titleElement = createElement('h2', 'title');
    titleElement.textContent = title;

    card.appendChild(titleElement);

    const content = createElement('div', 'content');

    const authorElement = createElement('p', 'author');
    authorElement.textContent = author;

    const pagesElement = createElement('p', 'pages');
    pagesElement.textContent = `${pages} pages`;

    content.appendChild(authorElement);
    content.appendChild(pagesElement);

    const details = createElement('div', 'details');
    details.appendChild(content);

    card.appendChild(details);

    // TODO figure out how to SVG nicely.

    const img = createElement('img', 'cover');
    img.setAttribute('src', coverImgUrl ?? 'assets/cover-not-found.jpg');
    img.setAttribute('alt', 'Book cover');
    
    card.appendChild(img);

    library.appendChild(card);
}

function addBookToLibrary(title, author, pages, read, coverImgUrl) {
    const newBook = new Book(title, author, pages, read, coverImgUrl);
    myLibrary.push(newBook);
    displayBook(newBook, myLibrary.length);
    // TODO display book on page
        // possibly delete all cards from library and rebuild from array?
        // simply append new book?
}

// initial test book
addBookToLibrary(
    'Zeus Grants Stupid Wishes: A No-Bullshit Guide to World Mythology',
    'Cory O\'Brien',
    304,
    true,
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356120567i/15808302.jpg'
);


// TODO allow delete of book from array.
