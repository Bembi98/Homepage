import React from "react";
import CourseCard from "../../components/CourseCard/index";
import {withStyles} from "@material-ui/core";
import {styles} from "./style";
import {Props, State} from "./types";
import {data} from '../../data'
import {Course} from "./types"
import Modal from "../../components/Modal";
import Typography from '@mui/material/Typography';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';


class CoursePage extends React.Component<Props, State> {
    maxId = 100;
    state = {
        data,
        selectedCourse: null,
        open: false,
        inputValues: { img: '', name: '', course: '', author: '', stars: '', price: ''},

    };

    onSubmitHandler = () => {

        this.setState(({data}) => ({
            data: [...data,
                {
                    id: Symbol('id'),
                    info: '',
                    img: this.state.inputValues.img,
                    name: this.state.inputValues.name,
                    course: this.state.inputValues.course,
                    author: this.state.inputValues.author,
                    stars: Number(`${this.state.inputValues.stars}`),
                    price: Number(`${this.state.inputValues.price}`),
                }]
        }))
    }

    //     this.setState(({ data }) => ({ data: [...data, course] }))
// input value={this.state.name} onChange={(value) => this.setState({ name: value })}

    handleDelete = (id: number) => () => {
        this.setState(({data}) => ({
            data: data.filter((item) => item.id !== id)
        }));
    };

    handleSelectCourse = (course: Course) => () => {
        this.setState({selectedCourse: course})
    }

    handleCloseDetailsModal = () => {
        this.setState({selectedCourse: null})
    }
    handleOpenModal = () => {
        this.setState({open: true})
    }
    handleCloseModal = () => {
        this.setState({open: false})
    }



    render() {

        const {classes} = this.props;
        const {data, selectedCourse, open,inputValues} = this.state;
        const course = selectedCourse as any


        return (
            <>
                <div className={classes.courseGallery}>
                    {data.map((course) => (
                        <CourseCard handleSelectCourse={this.handleSelectCourse(course)} course={course}
                                    onDelete={this.handleDelete(course.id)}/>
                    ))}
                </div>
                <Fab className={classes.fab} color="primary" aria-label="add" onClick={this.handleOpenModal}>
                    <AddIcon/>
                </Fab>
                <Modal open={!!selectedCourse} onClose={this.handleCloseDetailsModal}>{!!selectedCourse && (
                    <div className={classes.courseInfo}>
                        <Typography variant="h6" component="h2">More Info about course</Typography>
                        <Typography>{'Course: ' + course.course}</Typography>
                        <Typography>{"Tagline: " + course.name}</Typography>
                        <Typography>{"Company: " + course.author}</Typography>
                        <Typography>{"More info about direction: " + course.info}</Typography>
                    </div>)}</Modal>

                <Modal open={open} onClose={this.handleCloseModal}>
                    <div className={classes.inputAdd}>
                        <Typography variant="h6" color="secondary" component="h2">Add new course</Typography>
                        <input placeholder="Image URL" value={inputValues.img} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,img:event.target.value}
                        }))}/>
                        <input placeholder="Course"value={inputValues.course} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,course:event.target.value}
                        }))}/>
                        <input placeholder="Direction" value={inputValues.name} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,name:event.target.value}
                        }))}/>
                        <input placeholder="Company" value={inputValues.author} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,author:event.target.value}
                        }))}/>
                        <input placeholder="Rating" type="number" min="0" max="5" value={inputValues.stars} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,stars:event.target.value}
                        }))}/>
                        <input placeholder="Price" type="number" min="0" value={inputValues.price} onChange={(event) => this.setState(state=>({
                            ...state,inputValues:{...state.inputValues,price:event.target.value}
                        }))}/>
                        <Button variant="outlined" color="secondary" onClick={this.onSubmitHandler}>Save</Button>
                    </div>


                </Modal>


            </>
        );
    }
}

export default withStyles(styles)(CoursePage);