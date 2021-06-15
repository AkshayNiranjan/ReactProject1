import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
	Created by Akshay Niranjan
	Last Modified
	12th May 2021
*/
class ChangeShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        book_array: PropTypes.array.isRequired,
        changeShelfFunc: PropTypes.func.isRequired
    };//basic props needed for handling the shelf change

    updateShelf = event => this.props.changeShelfFunc(this.props.book, event.target.value);
    //event handler for changeShelfFunc

    render() {
        const { book, book_array } = this.props;
        //find book using filter
        console.log(book_array);
        let findBook = this.props.book_array.filter(b => b.id === book.id);
        //If book is in book_array, findbook.shelf is the current shelf
        //If book isnt in shelf, current shelf is none
        console.log(findBook);
        let currentShelf = findBook[0] ? findBook[0].shelf : 'none';
        return (
            <div className="book-shelf-changer">
                <select onChange={this.updateShelf} defaultValue={currentShelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}
export default ChangeShelf;