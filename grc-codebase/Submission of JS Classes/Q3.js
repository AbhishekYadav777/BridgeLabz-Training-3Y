"use strict";

// Create Book class
class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    // Issue a book
    issueBook() {

        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    // Return a book
    returnBook() {

        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not issued.`);
        }
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "Smith", "102"),
    new Book("Web Development", "David", "103")
];

// Display available books
function displayAvailableBooks() {

    console.log("Available Books:");

    const availableBooks = books.filter(
        book => !book.isIssued
    );

    availableBooks.forEach(book => {
        console.log(
            `${book.title} | ${book.author} | ${book.isbn}`
        );
    });
}

// Search and issue book using ISBN
function issueBookByISBN(isbn) {

    const book = books.find(
        book => book.isbn === isbn
    );

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

// Test program
displayAvailableBooks();

issueBookByISBN("101");

console.log("After issuing book:");

displayAvailableBooks();