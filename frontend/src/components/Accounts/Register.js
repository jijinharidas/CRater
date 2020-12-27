import { TextField, Button, Grid } from "@material-ui/core/";
import React, { useState } from "react";
import axios from "axios";
import '../../App.css';
import '../../styles/Accounts.css';

const checkRegisterForm = (
    username,
    password,
    firstName,
    lastName,
    rePassword
) => {
    if (
        password === rePassword &&
        username.length > 0 &&
        password.length > 0 &&
        firstName.length > 0 &&
        lastName.length > 0
    ) {
        return null;
    }
    return "disabled";
};


const Register = (props) => {
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    const [firstName, changeFirstname] = useState("");
    const [lastName, changeLastname] = useState("");
    const [rePassword, changeRePassword] = useState("");
    const [emailID, changeEmailID] = useState("");

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
                <label style={{ color: '#F2C94C' }} for="emailID">Email</label>
                <TextField
                    value={emailID}
                    onChange={(e) => changeEmailID(e.target.value)}
                    id="emailID"
                    required
                />
                <div style={{ height: 20 }} />
                <label style={{ color: '#F2C94C' }} for="firstName">First Name</label>
                <TextField
                    value={firstName}
                    onChange={(e) => changeFirstname(e.target.value)}

                    id="firstName"
                    required
                />
                <div style={{ height: 20 }} />
                <label style={{ color: '#F2C94C' }} for="lastName">Last Name</label>
                <TextField
                    value={lastName}
                    onChange={(e) => changeLastname(e.target.value)}
                    id="lastName"
                    required
                />
                <div style={{ height: 20 }} />
                <label style={{ color: '#F2C94C' }} for="password">Password</label>
                <TextField
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    type="password"
                    id="password"
                    required
                />
                <div style={{ height: 20 }} />
                <label style={{ color: '#F2C94C' }} for="repassword">Password Again</label>
                <TextField
                    value={rePassword}
                    onChange={(e) => changeRePassword(e.target.value)}
                    type="password"
                    id="repassword"
                    required
                />
                <div style={{ height: 20 }} />
                <Button
                    style={{ marginTop: "1.5vh", cursor: "pointer" }}
                    className="loginButton"
                    disabled={checkRegisterForm(
                        username,
                        password,
                        firstName,
                        lastName,
                        rePassword
                    )}
                    onClick={() => {
                        let status = false;
                        const req = {};
                        req["username"] = username;
                        req["password"] = password;
                        req["firstname"] = firstName;
                        req["lastname"] = lastName;
                        req["email"] = emailID;
                        axios.post(`${props.url}/users/api/auth/register`, req)
                            .then((response) => {
                                props.change();
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    Register
                </Button>
                <div style={{ height: 20 }} />
                <Button style={{ color: "#F2C94C" }} onClick={props.change}>
                    Login?
                </Button>
            </div>
        </Grid>

    );
};

export default Register;