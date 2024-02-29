const myLibrary = [
    new Book(
        'Zeus Grants Stupid Wishes: A No-Bullshit Guide to World Mythology',
        'Cory O\'Brien',
        304,
        true,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356120567i/15808302.jpg'
    )
];

function Book(title, author, pages, read, coverImgUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverImgUrl = coverImgUrl;
}

function addBookToLibrary(title, author, pages, read, coverImgUrl) {
    const newBook = new Book(title, author, pages, read, coverImgUrl);
    myLibrary.push(newBook);
    // TODO display book on page
        // possibly delete all cards from library and rebuild from array?
        // simply append new book?
}

// TODO allow delete of book from array.
