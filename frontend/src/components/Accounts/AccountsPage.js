import React from "react";
import Login from './Login';
import Register from './Register';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { url } from '../../Creds'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginPage: true };
  }
  changeStatus = () => {
    this.setState({ isLoginPage: !this.state.isLoginPage });
  };
  getComponent = () => {
    if (this.state.isLoginPage) {
      return <Login url={url} change={this.changeStatus} />;
    }
    return <Register url={url} change={this.changeStatus} />;
  }
  render() {
    return (
      <div>
        <Navbar />
        <Grid container style={{ minHeight: '100vh' }}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            alignItems="column"
            direction="column"
            justify="space-between"
            style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          >
            <div />
            {this.getComponent()}
            <div />
            <div />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home;
