import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
/*
	Created by Akshay Niranjan
	Last Modified
	12th May 2021
*/
class Search extends Component {
    static propTypes = {
        book_array: PropTypes.array.isRequired,
        changeShelfFunc: PropTypes.func.isRequired
    };

    state = {
        query: '',
        newBooks: [],
        searchError: false
    };

    getBooks = event => {//using book api we can search to find a list of books
        const query = event.target.value;
        this.setState({ query });
        //run search if user input is found
        if (query) {
            BooksAPI.search(query, 20).then((books) => {
                if (books !== undefined && books.error !== "empty query") {
                    this.setState({
                        newBooks: books,
                        searchError: false
                    })
                } else {
                    this.setState({
                        newBooks: [],
                        searchError: true
                    })
                }

            })
        }
        else {
            this.setState({ newBooks: [], searchError: false });
        }

    };

    clearQuery = () => {
        this.setState({
            query: '',
            newBooks: [],
            searchError: false
        })
    }

    render() {
        const { query, newBooks, searchError } = this.state;
        const { book_array, changeShelfFunc } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" onClick={this.clearQuery}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={this.getBooks}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {newBooks.length > 0 && (
                        <div>
                            <h3>Search returned {newBooks.length} books </h3>
                            <ol className="books-grid">
                                {newBooks.map(book => (
                                    <Book
                                        book={book}
                                        book_array={book_array}
                                        key={book.id}
                                        changeShelfFunc={changeShelfFunc}
                                    />
                                ))}
                            </ol>
                        </div>
                    )}
                    {searchError && (<h3>Search did not return any books. Please try again!</h3>)}
                </div>
            </div>
        );
    }//accidentally didnt tab render, fix later
}
export default Search;
