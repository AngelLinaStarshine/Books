import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Submit = styled.button`
    background: #094;
    border: 0;
    color: white;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        opacity: .8;
    }
`;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'admin',
            password: '123456'
        };
    }

    submit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8080/api/login';
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post(url, data).then((res) => {
            if (res.data.success) {
                localStorage.setItem('login', res.data.token);
                window.location.href = '/';
            } else {
                alert('Incorrect username or password');
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
            username,
            password
        } = this.state;

        return (
            <form onSubmit={this.submit}>
                <h1>Login</h1>
                <label>
                    Username
                    <input onChange={this.onChange} type="text" name="username" value={username} />
                </label>
                <label>
                    Password
                    <input onChange={this.onChange} type="password" name="password" value={password} />
                </label>
                <Submit>Submit</Submit>
            </form>

        );
    }
}

export default Login;
