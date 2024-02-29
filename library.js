const library = document.querySelector('.library');

const templates = {
    read: document.querySelector('.read-template'),
    'not-read': document.querySelector('.not-read-template'),
    delete: document.querySelector('.delete-template'),
};

const myLibrary = [];

let id = myLibrary.length;

function Book(title, author, pages, read, coverImgUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverImgUrl = coverImgUrl;
    this.id = id++;
}

function createElement(type, className, id) {
    const element = document.createElement(type);

    element.classList.add(className);
    if (id) {
        element.id = id;
    }

    return element;
}

function cloneIcon(templateName) {
    const newIcon = templates[templateName].cloneNode(true);

    const classes = [...newIcon.classList];
    classes.forEach(name => newIcon.classList.remove(name));

    newIcon.classList.add(templateName);

    return newIcon;
}


function displayBook({title, author, pages, read, coverImgUrl, id}) {
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

    const icons = createElement('div', 'icons');

    const templateName = read ? 'read' : 'not-read';

    const readIcon = cloneIcon(templateName);
    const deleteIcon = cloneIcon('delete')
    deleteIcon.addEventListener('click', () => {
        const index = myLibrary.findIndex(item => item.id === id);
        myLibrary.splice(index, 1);
        library.removeChild(card);
    });

    icons.appendChild(readIcon);
    icons.appendChild(deleteIcon);

    const details = createElement('div', 'details');
    details.appendChild(content);
    details.appendChild(icons);

    card.appendChild(details);

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
}

// initial test book
addBookToLibrary(
    'Zeus Grants Stupid Wishes: A No-Bullshit Guide to World Mythology',
    'Cory O\'Brien',
    304,
    true,
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356120567i/15808302.jpg'
);

// semi fail test book
addBookToLibrary(
    'An Empire Asunder',
    'Evan Currie',
    331,
    false
);


// TODO allow delete of book from array.
