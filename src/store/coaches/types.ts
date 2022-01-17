export type Persons ={
    id: number;
    info: string;
    name: string;
    img: string;
    direction: string;
    age: number;
    type: string;
    location: string;
    birthday : string;
    gender : string;
    national : string;

}
export interface CoachesReducer {
    coaches: Persons[];
    inputValue : [] ,
}
