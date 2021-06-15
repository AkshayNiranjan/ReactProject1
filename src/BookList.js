import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
/*
	Created by Akshay Niranjan
	Last Modified
	12th May 2021
*/
const BookList = props => {
    const { book_array, changeShelfFunc } = props;
    const shelfTypes = [
        { type: 'currentlyReading', title: 'Currently Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' }
    ];

    return (
        <div className="list-books-content">
            {shelfTypes.map((shelf, index) => {
                const shelfBooks = book_array.filter(book => book.shelf === shelf.type);
                return (
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <BookShelf book_array={shelfBooks} changeShelfFunc={changeShelfFunc} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

BookList.propTypes = {
    book_array: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default BookList;
