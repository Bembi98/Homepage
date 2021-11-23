import React from 'react';
import {Button, Card, CardMedia, IconButton, Typography,} from "@material-ui/core";
import {Props} from './types';
import Rating from '../Rating';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


class CourseCard extends React.Component<Props> {
    render() {
        const {course, classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia className={classes.cardImg}>
                    <img className={classes.img} src={course.img} alt={course.name}/>
                </CardMedia>
                <Button className={classes.btnCourse} variant="outlined">{course.course}</Button>
                <Typography className={classes.nameCourse} variant="h5">{course.name}</Typography>
                <Typography className={classes.author} paragraph>{course.author} </Typography>
                <Rating/>
                <Typography className={classes.price} paragraph>{course.price} $</Typography>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={classes.like} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon className={classes.shareIcon} />
                </IconButton>
            </Card>
        );
    }
}

export default withStyles(styles)(CourseCard);