import React from 'react';
import Book from './book';
import styled from 'styled-components';

const Books = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Home = ({ books }) => {
    return (
        <div>
            <h1>Book list</h1>

            <Books>
                {books.map(book => <Book {...book} />)}
            </Books>
        </div>
    )
};

export default Home;