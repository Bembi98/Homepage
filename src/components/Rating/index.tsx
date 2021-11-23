import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {State} from './types'

class BasicRating extends React.Component<any, State> {
    state = {
        stars: 2,
    }
    render() {
        return (
            <Box
            >
                <Typography component="legend"></Typography>
                <Rating
                    name="simple-controlled"
                    value={this.state.stars}
                    onChange={(event, newValue) => {
                        this.setState({stars: Number(newValue)})
                    }}
                />
            </Box>
        );
    }
}
export default BasicRating;