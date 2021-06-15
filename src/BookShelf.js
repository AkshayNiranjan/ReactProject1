import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
/*
	Created by Akshay Niranjan
	Last Modified
	12th May 2021
*/
class BookShelf extends Component {
    static propTypes = {
        book_array: PropTypes.array.isRequired,
        changeShelfFunc: PropTypes.func.isRequired
    };

    render() {
        const { book_array, changeShelfFunc } = this.props;

        return (
            <ol className="books-grid">
                {book_array.map(book => (
                    <Book
                        book={book}
                        book_array={book_array}
                        key={book.id}
                        changeShelfFunc={changeShelfFunc}
                    />
                ))}
            </ol>
        );
    }
}

export default BookShelf;