import Book from "./interfaces/Book";

export default abstract class BooksRepository{
    
    abstract createBook(book: Book): void;
    
    abstract getBook(id: string): Book | undefined;
    
    abstract getBooks(): Book[];
    
    abstract updateBook(id: string): void;
    
    abstract deleteBook(id: string): void;
}

// const container = document.getElementById('content');

// if (container) {
//     container.textContent = `Название книги: ${book.name}, ISBN: ${book.isbn}`;
// }