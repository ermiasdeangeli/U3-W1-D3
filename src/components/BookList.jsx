import React from 'react';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
    return (
        <div>
            {books.map((book, index) => <SingleBook key={index} book={book} />)}
        </div>
    );
}

export default BookList;