import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import {Props} from './types'

class BasicRating extends React.Component<Props> {

    render() {
     const {value}=this.props;
        return (
            <Box
            >

                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event: any,newValue:any) => {
                        this.setState({stars: Number(newValue)})
                    }}
                />
            </Box>
        );
    }
}
export default BasicRating;