import { TextField, Button, Grid } from "@material-ui/core/";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { saveState, saveLoggedin } from '../../localStorage';
import '../../App.css';
import '../../styles/Accounts.css';

const checkLoginForm = (username, password) => {
    if (username.length > 0 && password.length > 0) {
        return null;
    }
    return "disabled";
}

const Login = (props) => {
    const history = useHistory();
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    // const [userCookie, changeuserCookie] = useState("");

    return (
        <Grid
            container
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
        >
            <div className="accountsContainer">
                <label style={{ color: '#F2C94C' }} for="username"> Username</label>
                <TextField
                    value={username}
                    onChange={(e) => changeUsername(e.target.value)}
                    id="username"
                    required
                />
                <div style={{ height: 20 }} />
                <label style={{ color: '#F2C94C' }} for="password"> Password</label>
                <TextField
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    type="password"
                    id="password"
                    required
                />
                <div style={{ height: 20 }} />
                <Button
                    className="loginButton"
                    disabled={checkLoginForm(username, password)}
                    onClick={() => {
                        const req = {};
                        req["username"] = username;
                        req["password"] = password;
                        axios
                            .post(`${props.url}/users/api/auth/login`, req)
                            .then((response) => {
                                console.log(response.data);
                                saveState(response.data.token);
                                saveLoggedin('loggedIn');
                                history.push('/')
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    Login
                </Button>
                <div style={{ height: 20 }} />
                <Button style={{ color: "#F2C94C" }} onClick={props.change}>
                    Register?
                </Button>
            </div>
        </Grid>
    );
};


export default Login;
