import React from 'react';
import {CardMedia, Grid, Paper, Typography} from "@material-ui/core";
import {Props, State} from './types';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";



class MainInfo extends React.Component<Props, State> {
    render() {
        const { classes} = this.props;
        return (
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundColor: `#fafafa`}}>
                <Container fixed >
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    Find the Best Courses and Amazing Mentor
                                </Typography>
                                <Typography component="h4" color="inherit" variant= 'overline' paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                    amet luctus venenatis,
                                    lectus magna fringilla urna, porttitor rhoncus
                                </Typography>
                                <Button variant="outlined" color="inherit">
                                    Learn More
                                </Button>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </Paper>


        );
    }
}
export default withStyles(styles)(MainInfo);