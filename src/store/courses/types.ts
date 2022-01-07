export type Course = {
    id: number;
    course: string;
    name: string;
    img: string;
    author: string;
    stars: number;
    price: number;
    info: string;
};
export interface CoursesReducer {
    courses: Course[];
    inputValue : [] ,
}
