import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Popup from 'reactjs-popup';
import { Button, Grid } from "@material-ui/core/";
import RatingCard from './RatingCard';
import '../../App.css';

const CourseCard = (props) => {
    return (
        <Card className="courseCardContainer">
            <Grid
                container
                alignItems="center"
                direction="column"
                justify="space-between"
            >
                <div
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <div className="courseCardImageContainer">
                        <CardContent>
                            <img
                                alt="placeholder"
                                style={{ width: '100%', minHeight: '250px' }}
                                src={`http://localhost:8000${props.details.courseCoverPic}`}
                            />
                        </CardContent>
                    </div>

                    <div className="courseCardDetailsContainer" >
                        <CardContent className="courseCardContent">
                            Course: <a style={{ color: 'black' }} href={props.details.courseLink}>{props.details.courseName}</a>
                        </CardContent>
                        <CardContent className="courseCardContent">
                            Instructor: <i>{props.details.courseInstructor}</i>
                        </CardContent>
                        <CardContent className="courseCardContent">
                            Platform: <i>{props.details.coursePlatform}</i>
                        </CardContent>
                        <CardContent className="courseCardContent">
                            Rating: <span>{isNaN(Math.round((props.details.courseTotalVotes / props.details.courseTotalVoters) * 10) / 10) ? 0 : (Math.round((props.details.courseTotalVotes / props.details.courseTotalVoters) * 10) / 10)}</span>
                            <p>Total Votes: {props.details.courseTotalVoters}</p>
                        </CardContent>
                    </div>
                    <CardContent>
                        <Popup
                            trigger={<Button className="ratingButton" style={{ border: '0.5vh solid #000000' }} variant="outlined" >Rate</Button>}
                            position="top center left">
                            <RatingCard details={props.details} />
                        </Popup>
                    </CardContent>
                </div>
            </Grid>
        </Card>
    );
}

export default CourseCard;
