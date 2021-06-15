import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './icons/404-page.png';

const Errors = () => (
    <div>
        <h1 className="not-found-title">
            No books found matching your description.
    </h1>
        <figure className="not-found-img">
            <img src={notFound} alt="Page Not Found" />
            <figcaption>
                Error 404 - Not Found
      </figcaption>
        </figure>
        <div className="home-link">
            <Link to="/">Return home and try again</Link>
        </div>
    </div>
);

export default Errors;