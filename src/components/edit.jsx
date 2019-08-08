import React from 'react';
import Form from './form';

const Edit = (props) => {
    const { id } = props.match.params;
    const book = props.books.find(({ _id }) => _id === id);

    return (
        <div>
            <h1>Edit</h1>
            <Form {...book} />
        </div>
    )
};

export default Edit;