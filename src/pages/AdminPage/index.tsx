import React from 'react';
import {State} from './types';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {coaches, students} from "../../data";
import StudentCard from "../../components/StudentCard";
import { DispatchProps, StateProps} from "./types";
import {Dispatch} from "redux";
import {addStudent, deleteStudent, editStudent, filterStudents, findStudent, setStudent} from "../../store/students/actions";
import {addCoach, deleteCoach, editCoach, filterCoaches, findCoach, setCoach} from "../../store/coaches/actions";
import {connect} from "react-redux";
import {ComponentProps} from "./types";
import {Persons} from '../../components/StudentCard/types'
import Paginatoins from "../../components/Paginatoin";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CoachesCard from '../../components/CoachesCard';

class AdminPage extends React.Component<ComponentProps, State> {
    componentDidMount() {
        const student = localStorage.getItem("students");
        if (!student) {
            localStorage.setItem("students", JSON.stringify(students))
        }
        this.props.setStudent(student ? JSON.parse(student) : students);

        const coach = localStorage.getItem("coaches");
        if (!coach) {
            localStorage.setItem("coaches", JSON.stringify(coaches))
        }
        this.props.setCoach(coach ? JSON.parse(coach) : coaches);
    }

    state={
        value:'1',
        selectedStudent: null,
        inputValues: {img: '', name: '', direction: '',  age: ''},
        selectedForEdit: null,
        selectedForEditCoach: null,
        inputEdit: {id: "", img: "", name: '', direction: '', age: ''},
        open: false,
        students,
        coaches,
        selectedCoach:null,


    }
    onSubmitHandler = () => {
        const newStudent = {
            id: Number(new Date().getTime().toString() + Math.floor(Math.random() * 1000000)),
            info: '',
            img: this.state.inputValues.img,
            name: this.state.inputValues.name,
            direction: this.state.inputValues.direction,
            age: Number(`${this.state.inputValues.age}`),
            type:'',
            location: '',
            birthday :'',
            gender : '',
            national : '',
        }
        this.props.addStudent(newStudent)
        localStorage.setItem("students", JSON.stringify([...this.props.students, newStudent]));
    }
    onSubmitHandlerCoaches = () => {
        const newCoach = {
            id: Number(new Date().getTime().toString() + Math.floor(Math.random() * 1000000)),
            info: '',
            img: this.state.inputValues.img,
            name: this.state.inputValues.name,
            direction: this.state.inputValues.direction,
            age: Number(`${this.state.inputValues.age}`),
            type:'',
            location: '',
            birthday :'',
            gender : '',
            national : '',
        }
        this.props.addCoach(newCoach)
        localStorage.setItem("coaches", JSON.stringify([...this.props.coaches, newCoach]));
    }

    onSubmitEditHandler = () => {
        const newStudent = {
            id: Number(this.state.inputEdit.id),
            info: '',
            img: this.state.inputEdit.img,
            name: this.state.inputEdit.name,
            direction: this.state.inputEdit.direction,
            age: Number(`${this.state.inputEdit.age}`),
            type:'',
            location: '',
            birthday :'',
            gender : '',
            national : '',

        }
        this.props.editStudent(Number(this.state.inputEdit.id), newStudent)
        localStorage.setItem("students", JSON.stringify(this.props.students.map((student) => student.id === newStudent.id ? newStudent : student)))
    }
    onSubmitEditHandlerCoaches = () => {
        const newCoach = {
            id: Number(this.state.inputEdit.id),
            info: '',
            img: this.state.inputEdit.img,
            name: this.state.inputEdit.name,
            direction: this.state.inputEdit.direction,
            age: Number(`${this.state.inputEdit.age}`),
            type:'',
            location: '',
            birthday :'',
            gender : '',
            national : '',

        }
        this.props.editCoach(Number(this.state.inputEdit.id), newCoach)
        localStorage.setItem("coaches", JSON.stringify(this.props.coaches.map((coach) => coach.id === newCoach.id ? newCoach : coach)))
    }
    handleDelete = (id: number) => () => {
        this.props.deleteStudent(id)
        localStorage.setItem("students", JSON.stringify(this.props.students.filter((student) => student.id !== id)));
    };
    handleDeleteCoaches = (id: number) => () => {
        this.props.deleteCoach(id)
        localStorage.setItem("coaches", JSON.stringify(this.props.coaches.filter((coach) => coach.id !== id)));
    };
    handleSelectPerson = (student: Persons) => () => {
        this.setState({selectedStudent: student})
    }
    handleSelectPersonCoaches = (coach: Persons) => () => {
        this.setState({selectedStudent: coach})
    }
    handleCloseDetailsModal = () => {
        this.setState({selectedForEdit: null})
    }
    handleCloseDetailsModalCoach = () => {
        this.setState({selectedForEditCoach: null})
    }

    handleOpenModal = () => {
        this.setState({open: true})
    }
    handleCloseModal = () => {
        this.setState({open: false})

    }
    handleOpenEditModal = (student: Persons) => () => {
        this.setState({selectedForEdit: student})
        this.setState({
            inputEdit: {
                id: student.id,
                img: student.img,
                name: student.name,
                direction: student.direction,
                age: student.age
            }
        })
    }
    handleOpenEditModalCoaches = (coach: Persons) => () => {
        this.setState({selectedForEditCoach: coach})
        this.setState({
            inputEdit: {
                id: coach.id,
                img: coach.img,
                name: coach.name,
                direction: coach.direction,
                age: coach.age
            }
        })
    }

    handleChange = (event: React.SyntheticEvent, newValue: string) => {
        this.setState({value:newValue});
    };
    findStudent =  (name:string) => {
        this.props.findStudent(name)
    };
    findCoach =  (name:string) => {
        this.props.findCoach(name)
    };

    render() {
        const {selectedStudent,open, inputValues, selectedForEdit, inputEdit,selectedCoach,selectedForEditCoach} = this.state;
        const {classes} = this.props;
        const student = selectedStudent as any
        const coach = selectedCoach as any
        return (
            <>
           <Header />
                <div className={classes.tabsBox} >
                    <Box >
                    <TabContext value={this.state.value}>
                        <Box className={classes.tabs}>
                            <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                                <Tab label="STUDENTS" value="1" />
                                <Tab label="COACHES" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className={classes.tab1}>
                            {(this.props.students || []).map((student) => <StudentCard key={student.id} student={student} handleOpenEditModal={this.handleOpenEditModal(student)}
                                                                    handleSelectPerson={this.handleSelectPerson(student)}
                                                                    onDelete={this.handleDelete(student.id)}  />)}
                        </TabPanel>
                        <TabPanel value="2" className={classes.tab2}>
                            {(this.props.coaches || []).map((coach) => <CoachesCard key={coach.id} coach={coach} handleOpenEditModal={this.handleOpenEditModalCoaches(coach)}
                                                                                       handleSelectPerson={this.handleSelectPersonCoaches(coach)}
                                                                                       onDelete={this.handleDeleteCoaches(coach.id)}  />)}
                        </TabPanel>
                    </TabContext>
                        <Fab className={classes.fab} color="primary" aria-label="add"
                             onClick={this.handleOpenModal}>
                            <AddIcon/>
                        </Fab>
                        <Modal open={!!selectedStudent} onClose={this.handleCloseDetailsModal}>{!!selectedStudent && (
                            <div className={classes.studentInfo}>
                                <Typography variant="h6" component="h2">More Info about person</Typography>
                                <Typography>{'Name: ' + student.name}</Typography>
                                <Typography>{"Direction: " + student.direction}</Typography>
                                <Typography>{"Age: " + student.age}</Typography>
                            </div>)}</Modal>
                        <Modal open={open} onClose={this.handleCloseModal}>
                            <div className={classes.inputAdd}>
                                <Typography variant="h6" color="secondary" component="h2">Add new person</Typography>
                                <input placeholder="Image URL" value={inputValues.img}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, img: event.target.value}
                                       }))}/>
                                <input placeholder="Name" value={inputValues.name}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, name: event.target.value}
                                       }))}/>
                                <input placeholder="Direction" value={inputValues.direction}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, direction: event.target.value}
                                       }))}/>

                                <input placeholder="Age" type="number" min="0" value={inputValues.age}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, age: event.target.value}
                                       }))}/>
                                <Button variant="outlined" color="secondary" onClick={this.onSubmitHandler}>Save</Button>
                            </div>
                        </Modal>
                        <Modal open={!!selectedForEdit} onClose={this.handleCloseDetailsModal}>
                            <div className={classes.inputAdd}>
                                <Typography variant="h6" color="secondary" component="h2">Edit Students Info</Typography>
                                <input placeholder="Image URL" value={inputEdit.img}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, img: event.target.value}
                                       }))}/>
                                <input placeholder="Name" value={inputEdit.name}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, name: event.target.value}
                                       }))}/>
                                <input placeholder="Direction" value={inputEdit.direction}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, direction: event.target.value}
                                       }))}/>

                                <input placeholder="Age" type="number" min="0" value={inputEdit.age}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, age: event.target.value}
                                       }))}/>
                                <Button variant="outlined" color="secondary" onClick={this.onSubmitEditHandler}>Save</Button>
                            </div>
                        </Modal>
                        <Modal open={!!selectedCoach} onClose={this.handleCloseDetailsModalCoach}>{!!selectedCoach && (
                            <div className={classes.studentInfo}>
                                <Typography variant="h6" component="h2">More Info about person</Typography>
                                <Typography>{'Name: ' + coach.name}</Typography>
                                <Typography>{"Direction: " + coach.direction}</Typography>
                                <Typography>{"Age: " + coach.age}</Typography>
                            </div>)}</Modal>
                        <Modal open={open} onClose={this.handleCloseModal}>
                            <div className={classes.inputAdd}>
                                <Typography variant="h6" color="secondary" component="h2">Add new person</Typography>
                                <input placeholder="Image URL" value={inputValues.img}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, img: event.target.value}
                                       }))}/>
                                <input placeholder="Name" value={inputValues.name}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, name: event.target.value}
                                       }))}/>
                                <input placeholder="Direction" value={inputValues.direction}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, direction: event.target.value}
                                       }))}/>

                                <input placeholder="Age" type="number" min="0" value={inputValues.age}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputValues: {...state.inputValues, age: event.target.value}
                                       }))}/>
                                <Button variant="outlined" color="secondary" onClick={this.onSubmitHandlerCoaches}>Save</Button>
                            </div>
                        </Modal>
                        <Modal open={!!selectedForEditCoach} onClose={this.handleCloseDetailsModalCoach}>
                            <div className={classes.inputAdd}>
                                <Typography variant="h6" color="secondary" component="h2">Edit Coaches Info</Typography>
                                <input placeholder="Image URL" value={inputEdit.img}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, img: event.target.value}
                                       }))}/>
                                <input placeholder="Name" value={inputEdit.name}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, name: event.target.value}
                                       }))}/>
                                <input placeholder="Direction" value={inputEdit.direction}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, direction: event.target.value}
                                       }))}/>

                                <input placeholder="Age" type="number" min="0" value={inputEdit.age}
                                       onChange={(event) => this.setState(state => ({
                                           ...state, inputEdit: {...state.inputEdit, age: event.target.value}
                                       }))}/>
                                <Button variant="outlined" color="secondary" onClick={this.onSubmitEditHandlerCoaches}>Save</Button>
                            </div>
                        </Modal>
                </Box>
                    <Paginatoins/>
                </div>
            <Footer/>
            </>
        );
    }
}
const mapStateToProps = (state: any): StateProps => ({
    students: state.students.students,
    filtredStudents: state.students.inputValue,
    coaches: state.coaches.coaches,
    filtredCoaches: state.coaches.inputValue
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({

    setStudent: (students: Persons[]) => {
        dispatch(setStudent(students));
    },
    addStudent: (student: Persons) => {
        dispatch(addStudent(student));
    },
    deleteStudent: (id: number) => {
        dispatch(deleteStudent(id))
    },
    editStudent: (id: number, student: Persons) => {
        dispatch(editStudent(id, student))
    },
    findStudent: (name: string) => {
        dispatch(findStudent(name))
    },
    filterStudents: (filters:string[])=>{
        dispatch(filterStudents(filters))
    },
    setCoach: (coaches: Persons[]) => {
        dispatch(setCoach(coaches));
    },
    addCoach: (coach: Persons) => {
        dispatch(addCoach(coach));
    },
    deleteCoach: (id: number) => {
        dispatch(deleteCoach(id))
    },
    editCoach: (id: number, coach: Persons) => {
        dispatch(editCoach(id, coach))
    },
    findCoach: (name: string) => {
        dispatch(findCoach(name))
    },
    filterCoaches: (filters:string[])=>{
        dispatch(filterCoaches(filters))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminPage));