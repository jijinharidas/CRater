import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core/";
import axios from 'axios';
import {loadState} from '../../localStorage';
// import { useHistory } from 'react-router-dom';


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
        <Card style={{ height: '50vh', position: 'static', top: '0vh', left: '20%', border: '1px solid black' }}>
            <CardContent>
                <img src="https://balletonwheels.org/wp-content/uploads/2014/08/thumbnail-placeholder.jpg" />
            </CardContent>
            <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                {props.details.courseName}
            </CardContent>
            <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                {props.details.courseInstructor}
            </CardContent>
            <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                {props.details.coursePlatform}
            </CardContent>
            <CardContent style={{ width: '40ch', textAlign: 'center' }}>
                <p>{Math.round((props.details.courseTotalVotes / props.details.courseTotalVoters) * 10) / 10}/5</p>
                <p>Total Votes:{props.details.courseTotalVoters}</p>
            </CardContent>
            <CardContent>
                <Rating
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
                                if(response.data.status === true){
                                    window.location.reload();
                                }
                                else{
                                    alert('Voting already done');
                                }
                            })
                            .catch((err) => alert('You must be logged in to rate')) // error 400
                    }}>Rate</Button>
            </CardContent>
        </Card>
    );
}

export default RatingCard;