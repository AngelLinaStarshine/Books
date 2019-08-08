import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Actions = styled.div`
    margin-top: auto;
`;

const Container = styled.div`
    width: 49%;
    margin-right: 2%;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 10px solid #ccc;
    background: #eee;
    margin-bottom: 2%;
    border-radius: 2px;
    display: flex;
    flex-direction: column;

    &:nth-child(2n) {
        margin-right: 0;
    }
`;

const Title = styled.h2`
    margin-top: 0;
`;  

const deleteBook = (event, id) => {
    event.preventDefault();
    
    const token = localStorage.getItem('login');
    axios.get(`http://localhost:8080/api/books/update/delete/${id}?token=${token}`)
        .then((response) => {
            window.location.href = '/';
        })
};

const Book = (props) => {
    const {
        title,
        author,
        year,
        description,
        _id
    } = props;

    return (
        <Container>
            <Title>
                <Link to={`/show/${_id}`}>{title}</Link>
            </Title>
            <h4 className="author">
                written by<br />
                {author} in {year}
            </h4>
            <p className="description">
                {description}
            </p>
            <Actions>
                <Link to={`/edit/${_id}`}>Edit</Link><br />
                <a href="#" onClick={(event) => deleteBook(event, _id)}>Delete</a>
            </Actions>
        </Container>
    );
};

export default Book;
