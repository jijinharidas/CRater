import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState } from 'react';
import axios from "axios";
import CourseCard from './CourseCard';
import "../../App.css";
import Cookies from 'universal-cookie';
// Add styles
// Make the cards weight and height fixed
// Make the image fill the card 
// Add stars


const url = 'http://localhost:8000/courses'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = { courses: [], cookies: cookies };
  }

  getCourse = () => {
    axios.get(url)
      .then((response) => this.setState({ courses: response.data }))
      .then(() => console.log(this.state.courses))
      .catch(() => console.log('Some Error Occured'));
  }
  componentDidMount() {
    this.getCourse();
  }
  // changeStatus = () => {
  //     this.setState({ isLoginPage: !this.state.isLoginPage });
  // }
  // Add a template with a thumbnail, Course Name, Course Instructor name, and clickable link
  render() {
    return (
      <Grid style={{ marginTop: '5%' }} container spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {this.state.courses.map((value) => (
              <Grid key={value.courseID} item>
                <CourseCard details={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;