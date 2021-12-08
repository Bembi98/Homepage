import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {Props,State} from './types';


class BasicRating extends React.Component<Props,State> {
state={
    stars:this.props.value
}
    render() {
    const {stars} = this.state
        return (
            <Box
            >

                <Rating
                    name="simple-controlled"
                    value={stars}
                    onChange={(event: any,newValue:any) => {
                        this.setState({stars: Number(newValue)})
                    }}
                />
            </Box>
        );
    }
}
export default BasicRating;