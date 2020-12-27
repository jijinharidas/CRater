import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Popup from "reactjs-popup";
import { Button, Grid } from "@material-ui/core/";
import RatingCard from "./RatingCard";
import "../../App.css";
import "../../styles/Home.css";

const CourseCard = (props) => {
  return (
    <Card className="courseCardContainer" style={{ background: "transparent", border: "0px", boxShadow: "none" }}>
      <Grid
        container
        alignItems="center"
        direction="column"
        className="mainCourseCard"
      >
        <div
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <div className="courseCardImageContainer">
            <CardContent>
              <img
                alt="placeholder"
                className="courseCardImage"
                src={`http://localhost:8000${props.details.courseCoverPic}`}
              />
            </CardContent>
          </div>

          <div className="courseCardDetailsContainer">
            <CardContent className="courseCardContent">
              <p className="courseCardTitle">
                Course:{" "}
                <a style={{ color: "white" }} href={props.details.courseLink}>
                  {props.details.courseName}
                </a>
              </p>
              <p>
                Instructor: {props.details.courseInstructor}
              </p>
              <p>
                Platform: {props.details.coursePlatform}
              </p>
              <p>
                Rating:{" "}
                <span>
                  {isNaN(
                    Math.round(
                      (props.details.courseTotalVotes /
                        props.details.courseTotalVoters) *
                      10
                    ) / 10
                  )
                    ? 0
                    : Math.round(
                      (props.details.courseTotalVotes /
                        props.details.courseTotalVoters) *
                      10
                    ) / 10}
                </span>
              </p>
              <p>Total Votes: {props.details.courseTotalVoters}</p>
            </CardContent>
          </div>
          <CardContent>
            <Popup
              trigger={
                <Button
                  className="ratingButton"
                >
                  Rate
                </Button>
              }
              position="top center left"
            >
              <RatingCard details={props.details} />
            </Popup>
          </CardContent>
        </div>
      </Grid>
    </Card>
  );
};

export default CourseCard;
