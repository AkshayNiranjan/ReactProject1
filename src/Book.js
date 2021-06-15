import React from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';
import errNoCover from './icons/404-cover.png';
/*
 *  Created by Akshay Niranjan 
 *  Last Modified
 *  13th May 2021
 */
const Book = props => {
    const { book, book_array, changeShelfFunc } = props;

    //handles if there are no cover images or title available 
    //from the api using ternary statements
    const coverImg = book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : errNoCover;
    const title = book.title ? book.title : 'No title available';

    return (
        <li>
            <div className="book">
                <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${coverImg})` }}
                />
                <div className="book-top">
                    
                    <ChangeShelf book={book} book_array={book_array} changeShelfFunc={changeShelfFunc} />
                </div>
                
                <div className="book-title">{title}</div>
                {//maps authors to individual lines
                    book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    book_array: PropTypes.array.isRequired,
    changeShelfFunc: PropTypes.func.isRequired
};

export default Book;