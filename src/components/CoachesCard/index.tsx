import React from 'react';
import {Button, Card, CardMedia, IconButton, Typography,} from "@material-ui/core";
import {Props, State} from './types';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class StudentCard extends React.Component<Props, State> {
    render() {
        const {coach, classes, onDelete,handleSelectPerson,handleOpenEditModal} = this.props;
        return (
            <Card variant="outlined" className={classes.card}>
                <CardMedia className={classes.cardImg}>
                    <img className={classes.img} src={coach.img} alt={coach.name}/>
                    <Button className={classes.btnCourse} variant="outlined" onClick={handleSelectPerson}> {coach.info} </Button>
                </CardMedia>
                <Typography className={classes.nameCourse} variant="h5">{coach.name}</Typography>
                <Typography className={classes.author} variant= 'overline' paragraph>Direction :  {coach.direction} </Typography>
                <Typography className={classes.price}  paragraph>Age :  {coach.age} y.o </Typography>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={classes.like}/>
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
export default withStyles(styles)(StudentCard);