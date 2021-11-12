class Booklist {
    constructor(){
        this.number_readed = 0;
        this.NonReaded = [];
        this.NextBook = book;
        this.PresentBook = book;
        this.LastBook = book;
        this.AllBooks = [];
    }

    add(book){
        this.PresentBook = this.NextBook;
        this.LastBook = this.PresentBook;
        this.NextBook = this.book.title;
        this.AllBooks.push(book);
        this.NonReaded.push(book);
        this.number_readed += 1;
    }

    finishCurrentBook(){
        this.PresentBook.readDate = new.date
    }

}


class Book{
    constructor(title, genre, author, read){
        this.title = title
        this.genre = genre;
        this.author = autor;
        this.readDate = date
    }

}

