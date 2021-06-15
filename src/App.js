import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import Search from './Search';
import Errors from './Errors';
/*
 *  Created by Akshay Niranjan 
 *  Last Modified
 *  12th May 2021
 */
class BooksApp extends React.Component {
    state = { book_array: [] };
    componentDidMount() {
        BooksAPI.getAll().then(book_array => this.setState({ book_array }));
    }
    changeShelfFunc = (changedBook, shelf) => {
        BooksAPI.update(changedBook, shelf).then(response => {
            changedBook.shelf = shelf;
            this.setState(prevState => ({
                book_array: prevState.book_array
                    .filter(book => book.id !== changedBook.id)
                    .concat(changedBook)
            }));
        });
    };
    render() {
        const { book_array } = this.state;
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/search"
                            render={() => (
                                <Search book_array={book_array} changeShelfFunc={this.changeShelfFunc} />
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <div className="list-books">
                                    <div className="list-books-title">
                                        <h1>MyReads</h1>
                                    </div>
                                    <BookList book_array={book_array} changeShelfFunc={this.changeShelfFunc} />
                                    <div className="open-search">
                                        <Link to="/search">Search</Link>
                                    </div>
                                </div>
                            )}
                        />
                        <Route component={Errors} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default BooksApp;

