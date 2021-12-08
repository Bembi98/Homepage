import React from 'react';
import {Button, Card, CardMedia, IconButton, Typography,} from "@material-ui/core";
import {Props, State} from './types';
import Rating from '../Rating';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class CourseCard extends React.Component<Props, State> {
    render() {
        const {course, classes, onDelete,handleSelectCourse,handleOpenEditModal} = this.props;
        return (
            <Card variant="outlined" className={classes.card}>
                <CardMedia className={classes.cardImg}>
                    <img className={classes.img} src={course.img} alt={course.name}/>
                    <Button className={classes.btnCourse} variant="outlined" onClick={handleSelectCourse}  >{course.course} </Button>
                </CardMedia>
                <Typography className={classes.nameCourse} variant="h5">{course.name}</Typography>
                <Typography className={classes.author} paragraph>{course.author} </Typography>
                <Rating value={course.stars}/>
                <Typography className={classes.price} paragraph>{course.price} $</Typography>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={classes.like}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon className={classes.shareIcon}/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={onDelete}/>
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon onClick={handleOpenEditModal}/>
                </IconButton>
            </Card>
        );
    }
}
export default withStyles(styles)(CourseCard);