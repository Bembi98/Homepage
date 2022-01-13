import React from "react";
import CourseCard from "../../components/CourseCard/index";
import { FormGroup, withStyles} from "@material-ui/core";
import {styles} from "./style";
import {ComponentProps, State} from "./types";
import {data} from '../../data'
import {Course} from "./types"
import Modal from "../../components/Modal";
import Typography from '@mui/material/Typography';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';
import {
    deleteCourse,
    addCourse,
    setCourses,
    editCourse,
    findCourse,
    filterCourses
} from "../../store/courses/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DispatchProps, StateProps} from './types'
import Paginatoins from "../../components/Paginatoin";
import FilterCourse from "../../components/FilterCourse";
import Header from "../../components/Header";





class CoursePage extends React.Component<ComponentProps, State> {
    componentDidMount() {
        const courses = localStorage.getItem("courses");
        if (!courses) {
            localStorage.setItem("courses", JSON.stringify(data))
        }
        this.props.setCourses(courses ? JSON.parse(courses) : data);
    }

    state = {
        data,
        selectedCourse: null,
        open: false,
        inputValues: {img: '', name: '', course: '', author: '', stars: '', price: ''},
        selectedForEdit: null,
        inputEdit: {id: "", img: "", name: '', course: '', author: '', stars: '', price: ''},
        checkedDir: [false,false],
        checkedComp: [false,false],
        selectedTypes:[],

    };

    onSubmitHandler = () => {
        const newCourse = {
            id: new Date().getTime().toString() + Math.floor(Math.random() * 1000000),
            info: '',
            img: this.state.inputValues.img,
            name: this.state.inputValues.course,
            course: this.state.inputValues.name,
            author: this.state.inputValues.author,
            stars: Number(`${this.state.inputValues.stars}`),
            price: Number(`${this.state.inputValues.price}`),
        }
        this.props.addCourse(newCourse)
        localStorage.setItem("courses", JSON.stringify([...this.props.courses, newCourse]));
    }
    onSubmitEditHandler = () => {
        const newCourse = {
            id: this.state.inputEdit.id,
            info: '',
            img: this.state.inputEdit.img,
            name: this.state.inputEdit.course,
            course: this.state.inputEdit.name,
            author: this.state.inputEdit.author,
            stars: Number(`${this.state.inputEdit.stars}`),
            price: Number(`${this.state.inputEdit.price}`),
        }
        this.props.editCourse(Number(this.state.inputEdit.id), newCourse)
        localStorage.setItem("courses", JSON.stringify(this.props.courses.map((course) => course.id === newCourse.id ? newCourse : course)))
    }
    handleDelete = (id: number) => () => {
        this.props.deleteCourse(id)
        localStorage.setItem("courses", JSON.stringify(this.props.courses.filter((course) => course.id !== id)));
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
    handleOpenEditModal = (course: Course) => () => {
        this.setState({selectedForEdit: course})
        this.setState({
            inputEdit: {
                id: course.id,
                img: course.img,
                name: course.course,
                course: course.name,
                author: course.author,
                stars: course.stars,
                price: course.price
            }
        })
    }
    handleCloseEditModal = () => {
        this.setState({selectedForEdit: null})
    }
    handleChangeDir = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({checkedDir:[event.target.checked,event.target.checked]});
        if (this.state.selectedTypes.some(key => key === "UI/UX Design"|| key === "3D Design")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "UI/UX Design" && type !=="3D Design") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "UI/UX Design","3D Design"] })
        }

    };
    handleChangeDir2= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedDir: [event.target.checked, this.state.checkedDir[1]] })
        if (this.state.selectedTypes.some(key => key === "UI/UX Design")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "UI/UX Design") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "UI/UX Design"] })
        }

    };

    handleChangeDir3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedDir: [ this.state.checkedDir[0], event.target.checked] })
        if (this.state.selectedTypes.some(key => key === "3D Design")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "3D Design") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "3D Design"] })
        }
    };
    handleChangeComp = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({checkedDir:[event.target.checked,event.target.checked]});
        if (this.state.selectedTypes.some(key => key === "UI/UX Design"|| key === "3D Design")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "Ilusha Company" && type !=="Menkes Company") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "Ilusha Company","Menkes Company"] })
        }
    };
    handleChangeComp2= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedComp: [event.target.checked, this.state.checkedComp[1]] })
        if (this.state.selectedTypes.some(key => key === "Ilusha Company")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "Ilusha Company") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "Ilusha Company"] })
        }
    };

    handleChangeComp3= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checkedComp: [ this.state.checkedComp[0], event.target.checked] })
        if (this.state.selectedTypes.some(key => key === "Menkes Company")) {
            this.setState(state => ({ selectedTypes: state.selectedTypes.filter(type => type !== "Menkes Company") }))
        } else {
            this.setState({ selectedTypes: [...this.state.selectedTypes, "Menkes Company"] })
        }

    };
    findCourse =  (name:string) => {
        this.props.findCourse(name)
    };
    componentDidUpdate (prevProps:ComponentProps,prevState: State) {
        if (this.state.selectedTypes !== prevState.selectedTypes) {
            this.props.filterCourses(this.state.selectedTypes)
        }
}

    render() {
        const {classes} = this.props;
        const {selectedCourse, open, inputValues, selectedForEdit, inputEdit} = this.state;
        const course = selectedCourse as any

        return (
            <>
                <Header findCourse={this.findCourse}/>
                <div className={classes.cardsSection}>
                    <div className={classes.filterCourses}>
                        <FormGroup>
                           <Typography variant="h5" >Faster Search</Typography>
                            <br/>
                            <FilterCourse checkedDir={this.state.checkedDir} checkedComp={this.state.checkedComp}
                                          handleChangeDir={this.handleChangeDir} handleChangeDir2={this.handleChangeDir2}
                                          handleChangeDir3={this.handleChangeDir3} handleChangeComp={this.handleChangeComp}
                                          handleChangeComp2={this.handleChangeComp2} handleChangeComp3={this.handleChangeComp3}
                             />

                        </FormGroup>
                    </div>

                    <div className={classes.courseGallery}>
                        {(this.props.filtredCourses.length?this.props.filtredCourses:this.props.courses).map((course) => (
                            <CourseCard handleOpenEditModal={this.handleOpenEditModal(course)} course={course}
                                        handleSelectCourse={this.handleSelectCourse(course)}
                                        onDelete={this.handleDelete(course.id)}/>
                        ))}
                    </div>

                </div>
                <Paginatoins/>
                <Fab className={classes.fab} color="primary" aria-label="add"
                     onClick={this.handleOpenModal}>
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
                        <input placeholder="Image URL" value={inputValues.img}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, img: event.target.value}
                               }))}/>
                        <input placeholder="Course" value={inputValues.course}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, course: event.target.value}
                               }))}/>
                        <input placeholder="Direction" value={inputValues.name}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, name: event.target.value}
                               }))}/>
                        <input placeholder="Company" value={inputValues.author}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, author: event.target.value}
                               }))}/>
                        <input placeholder="Rating" type="number" min="0" max="5" value={inputValues.stars}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, stars: event.target.value}
                               }))}/>
                        <input placeholder="Price" type="number" min="0" value={inputValues.price}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputValues: {...state.inputValues, price: event.target.value}
                               }))}/>
                        <Button variant="outlined" color="secondary" onClick={this.onSubmitHandler}>Save</Button>
                    </div>
                </Modal>
                <Modal open={!!selectedForEdit} onClose={this.handleCloseEditModal}>
                    <div className={classes.inputAdd}>
                        <Typography variant="h6" color="secondary" component="h2">Edit Course</Typography>
                        <input placeholder="Image URL" value={inputEdit.img}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, img: event.target.value}
                               }))}/>
                        <input placeholder="Course" value={inputEdit.course}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, course: event.target.value}
                               }))}/>
                        <input placeholder="Direction" value={inputEdit.name}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, name: event.target.value}
                               }))}/>
                        <input placeholder="Company" value={inputEdit.author}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, author: event.target.value}
                               }))}/>
                        <input placeholder="Rating" type="number" min="0" max="5" value={inputEdit.stars}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, stars: event.target.value}
                               }))}/>
                        <input placeholder="Price" type="number" min="0" value={inputEdit.price}
                               onChange={(event) => this.setState(state => ({
                                   ...state, inputEdit: {...state.inputEdit, price: event.target.value}
                               }))}/>
                        <Button variant="outlined" color="secondary" onClick={this.onSubmitEditHandler}>Save</Button>
                    </div>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: any): StateProps => ({
    courses: state.courses.courses,
    filtredCourses: state.courses.inputValue
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setCourses: (courses: Course[]) => {
        dispatch(setCourses(courses));
    },
    addCourse: (course: Course) => {
        dispatch(addCourse(course));
    },
    deleteCourse: (id: number) => {
        dispatch(deleteCourse(id))
    },
    editCourse: (id: number, course: Course) => {
        dispatch(editCourse(id, course))
    },
    findCourse: (name: string) => {
        dispatch(findCourse(name))
    },
    filterCourses: (filters:string[])=>{
        dispatch(filterCourses(filters))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CoursePage));