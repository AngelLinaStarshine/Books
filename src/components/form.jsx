import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);

        const {
            _id,
            title,
            author,
            year,
            description
        } = props;

        this.state = {
            id: _id,
            title,
            author,
            year,
            description
        };
    }

    submit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('login');
        const baseURL = 'http://localhost:8080/api/books/update';
        const url = `${baseURL}/${this.state.id ? '' : 'create'}?token=${token}`;
        const data = { ...this.state };

        axios.post(url, data).then((res) => {
            if (res.data.success) {
                window.location.href = '/';
            }
        });
    }

    onChange = (event) => {
        const { target } = event;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {        
        const {
            title,
            author,
            year,
            description
        } = this.state;

        return (
            <form onSubmit={this.submit}>
                <label>
                    Title
                    <input onChange={this.onChange} type="text" name="title" value={title} />
                </label>
                <label>
                    Author
                    <input onChange={this.onChange} type="text" name="author" value={author} />
                </label>
                <label>
                    Publication year
                    <input onChange={this.onChange} type="text" name="year" value={year} />
                </label>
                <label>
                    Description
                    <textarea onChange={this.onChange} name="description">{description}</textarea>
                </label>
                <button>Submit</button>
            </form>

        );
    }
}

export default Form;
