import Grid from "@material-ui/core/Grid";
import React from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import "../../App.css";
import Cookies from "universal-cookie";
import Navbar from "../Navbar/Navbar";
import { url } from "../../Creds";
import "../../styles/Home.css";

// Add styles
// Make the cards weight and height fixed
// Make the image fill the card
// Add stars

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = { courses: [], cookies: cookies };
  }

  getCourse = () => {
    const courseurl = `${url}/courses`;
    axios
      .get(courseurl)
      .then((response) => this.setState({ courses: response.data }))
      .then(() => console.log(this.state.courses))
      .catch(() => console.log("Some Error Occured"));
  };
  componentDidMount() {
    this.getCourse();
  }
  // changeStatus = () => {
  //     this.setState({ isLoginPage: !this.state.isLoginPage });
  // }
  // Add a template with a thumbnail, Course Name, Course Instructor name, and clickable link
  render() {
    return (
      <div>
        <Navbar />
        <Grid
          container
          // style={{ margin: "1vw", padding: "1vw" }}
          justify="center"
        >
          {this.state.courses.map((value) => (
            <Grid key={value.courseID} item>
              <CourseCard details={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default HomePage;
