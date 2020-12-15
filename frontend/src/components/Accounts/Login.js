import { TextField, Button, Grid, InputAdornment } from "@material-ui/core/";
import { AccountCircle, LockRounded } from "@material-ui/icons/";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { saveState } from '../../localStorage';


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
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300, padding:50 }}>
                <TextField
                    value={username}
                    onChange={(e) => changeUsername(e.target.value)}
                    id="username"
                    label="Username"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }}
                    required
                />
                <div style={{ height: 20 }} />
                <TextField
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    type="password"
                    id="password"
                    label="Password"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <LockRounded /> </InputAdornment> }}
                    required
                />
                <div style={{ height: 20 }} />
                <Button
                    variant="contained"
                    color="primary"
                    disabled={checkLoginForm(username, password)}
                    onClick={() => {
                        const req = {};
                        req["username"] = username;
                        req["password"] = password;
                        axios
                            .post(`${props.url}/users/api/auth/login`, req)
                            .then((response) => {
                                console.log(response.data)
                                saveState(response.data.token)
                                history.push('/')
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    Login
                </Button>
                <div style={{ height: 20 }} />
                <Button onClick={props.change}>
                    Register?
                </Button>
            </div>
        </Grid>
    );
};


export default Login;