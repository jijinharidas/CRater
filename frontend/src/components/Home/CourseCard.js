import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Button, Grid } from "@material-ui/core/";
import RatingCard from './RatingCard';
import '../../App.css';

const CourseCard = (props) => {
    return (
        <Card style={{ width:'30vw', minHeight: '65vh', maxHeight: '80vh', borderRadius: 15, backgroundColor: '#aba9ad', margin: '1vw' }}>
            <Grid
                container
                alignItems="center"
                direction="column"
                justify="space-between"
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <img style={{ width: '100%' }} src="https://balletonwheels.org/wp-content/uploads/2014/08/thumbnail-placeholder.jpg" />
                    </CardContent>
                    <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                        <a style={{ color: 'black' }} href={props.details.courseLink}>{props.details.courseName}</a>
                    </CardContent>
                    <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                        By: <i>{props.details.courseInstructor}</i>
                    </CardContent>
                    <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                        Platform: <i>{props.details.coursePlatform}</i>
                    </CardContent>
                    <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                        <p>{isNaN(Math.round((props.details.courseTotalVotes / props.details.courseTotalVoters) * 10) / 10) ? 0 : (Math.round((props.details.courseTotalVotes / props.details.courseTotalVoters) * 10) / 10)}/5</p>
                        <p>Total Votes:{props.details.courseTotalVoters}</p>
                    </CardContent>
                    <CardContent>
                        <Popup
                            trigger={<Button style={{ width: '100%' }} variant="contained" color="primary">Rate</Button>}
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