import React from 'react';
import Book from './book';

const Show = (props) => {
    const { id } = props.match.params;
    const book = props.books.find(({ _id }) => _id === id);

    return (
        <div className="flex-container">
            <Book {...book} />
        </div>
    )
};

export default Show;
