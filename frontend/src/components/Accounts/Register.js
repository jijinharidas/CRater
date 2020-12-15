import { TextField, Button, Grid, InputAdornment } from "@material-ui/core/";
import { AccountCircle, LockRounded, MailRounded } from "@material-ui/icons/";
import React, { useState } from "react";
import axios from "axios";


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
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300, padding: 50 }}>
                <TextField
                    value={username}
                    onChange={(e) => changeUsername(e.target.value)}
                    style={{ marginTop: "1.5vh" }}
                    id="username"
                    label="Username"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }}
                    required
                />
                <TextField
                    value={emailID}
                    onChange={(e) => changeEmailID(e.target.value)}
                    style={{ marginTop: "1.5vh" }}
                    id="emailID"
                    label="Email ID"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <MailRounded /> </InputAdornment> }}
                    required
                />
                <br />
                <TextField
                    value={firstName}
                    onChange={(e) => changeFirstname(e.target.value)}
                    style={{ marginTop: "1.5vh" }}
                    id="firstName"
                    label="First Name"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }}
                    required
                />
                <br />
                <TextField
                    value={lastName}
                    onChange={(e) => changeLastname(e.target.value)}
                    style={{ marginTop: "1.5vh" }}
                    id="lastName"
                    label="Last Name"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }}
                    required
                />
                <br />
                <TextField
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    type="password"
                    style={{ marginTop: "1.5vh" }}
                    id="password"
                    label="Password"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <LockRounded /> </InputAdornment> }}
                    required
                />
                <br />
                <TextField
                    value={rePassword}
                    onChange={(e) => changeRePassword(e.target.value)}
                    type="password"
                    style={{ marginTop: "1.5vh" }}
                    id="repassword"
                    label="Retype Password"
                    InputProps={{ startAdornment: <InputAdornment position="start"> <LockRounded /> </InputAdornment> }}
                    required
                />
                <br />
                <Button
                    style={{ marginTop: "1.5vh", cursor: "pointer" }}
                    variant="contained"
                    color="primary"
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
                <br />
                <Button style={{ marginTop: "1.5vh" }} onClick={props.change}>
                    Login?
                </Button>
            </div>
        </Grid>

    );
};

export default Register;