import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button, Grid } from "@material-ui/core/";
import axios from 'axios';
import { loadState } from '../../localStorage';
// import { useHistory } from 'react-router-dom';
import '../../App.css';
import "../../styles/Home.css";


// todo List
// Force render component rather than reloading page
// Show if the user has already submitted a review
// Ask to change the review or not


const url = 'http://localhost:8000';

const RatingCard = (props) => {
    // const history = useHistory();
    const [rating, changeRating] = useState(0);
    const token = loadState('token');
    // const [value, setValue] = useState();

    // Add a useEffect method that will fetch if I have voted or not 
    /*
    useEffect(() => {
        axios.load()
    })
    */
    return (
        <Card className="ratingCardContainer">
            <Grid
                container
                direction="column"
                justify="space-between"
                style={{ backgroundColor: "#211D2C", color: "white", border: "0.1px solid white" }}
            >
                <Grid item xs={12} md={6}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <div className="ratingCardDetailsContainer">
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
                        <Rating
                            style={{backgroundColor: "white"}}
                            name="simple-controlled"
                            value={rating}
                            onChange={(event) => {
                                // console.log(event.target.value)
                                changeRating(event.target.value)
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                const req = {};
                                const config = {
                                    headers: { Authorization: `Token ${token}` }
                                }
                                req["course"] = props.details.courseID;
                                req["stars"] = rating;
                                axios.post(`${url}/courses/rating`, req, config)
                                    .then((response) => {
                                        if (response.data.status === true) {
                                            window.location.reload();
                                        }
                                        else {
                                            alert('Voting already done');
                                        }
                                    })
                                    .catch((err) => alert('You must be logged in to rate')) // error 400
                            }}>Rate</Button>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} />
            </Grid>
        </Card>
    );
}

export default RatingCard;
