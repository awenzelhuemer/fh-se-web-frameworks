import React from "react";
import { Navigate } from "react-router-dom";
import { getBooks } from "../api/bookApi";
import BookListItem from "./BookListItem";


class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        getBooks().then(
            data => this.setState({
                books: data.books
            })
        );
    }

    onBookClick(book) {
        this.setState({
            detailBookId: book.id
        });
    }

    render() {
        const books = this.state.books;

        if(this.state.detailBookId) {
            return <Navigate to={`/books/${this.state.detailBookId}`} />
        }

        return (
            <div className="ui middle aligned selection divided list">
                {
                    books.map(book => (
                        <div className="item" key={book.id} onClick={() => this.onBookClick(book)}>
                            <BookListItem book={book}></BookListItem>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default BookList;