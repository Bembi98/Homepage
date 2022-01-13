import { Course } from "./components/CourseCard/types";
import {Persons} from "./components/StudentCard/types";

export const data: Course[] = [
    {
        id: 1,
        course: "UI/UX Design",
        name: "Interpersonal skills - work better with others!",
        img: "./image/spanch.PNG",
        author: "Ilusha Company",
        stars: 1,
        price: 355,
        info: "Some text  about UI/UX Design "
    },
    {
        id: 2,
        course: "Web Developer",
        name: "How to become an Expert Web Developer",
        img: "./image/sova.PNG",
        author: "Menkes Company",
        stars: 2,
        price: 360,
        info: "Some text  about Web Developer "
    },
    {
        id: 3,
        course: "UX Research",
        name: "User Experience Design \n" + "Essentials",
        img: "./image/patrik.PNG",
        author: "Ilusha Company",
        stars: 3,
        price: 365,
        info: "Some text  about UX Research "
    } ,{
        id: 4,
        course: '3D Design',
        name: 'Creating 3D Modelling in \n' + 'Blender ',
        img: "./image/olen.PNG",
        author: 'Menkes Company',
        stars: 4,
        price: 370,
        info: 'Some text  about 3D Design '
    },
    {
        id: 5,
        course: 'UI/UX Design',
        name: "Interpersonal skills - work better with others!",
        img: "./image/krab.PNG",
        author: 'Ilusha Company',
        stars: 5,
        price: 375,
        info: 'Some text  about UI/UX Design '

    },
    {
        id: 6,
        course: 'Public Speaking',
        name: 'Interpersonal skills - work better with others!',
        img: "./image/svinya.PNG",
        author: 'Menkes Company',
        stars: 2,
        price: 380,
        info: 'Some text  about Public Speaking '

    },
    {
        id: 7,
        course: '3D Design',
        name: 'Creating 3D Modelling in \n' + 'Blender ',
        img: "./image/planktnot.PNG",
        author: 'Ilusha Company',
        stars: 4,
        price: 385,
        info: 'Some text  about 3D Design '

    },
    {
        id: 8,
        course: 'UI/UX Design',
        name: 'Interpersonal skills - work better with others!',
        img: "./image/pin.PNG",
        author: 'Menkes Company',
        stars: 3,
        price: 390,
        info: 'Some text  about UI/UX Design '

    }

];
export const  students:Persons[] = [
    {
        id: 1,
        info: 'More Info',
        name: 'Taniel Davit Davidyan',
        img: "./image/spanch.PNG",
        direction: 'Web Developer',
        age: 44,
        type: 'Adult',
        location: 'Sunrise Manor, Nevada, United States',
        birthday: 'Birth date: February 23, 1977 (8:07 AM)',
        gender: 'Masculine',
        national: 'Armenian',

    },
    {
        id: 2,
        info: 'More Info',
        name: 'Gurgen Hovik Davtyan',
        img: './image/patrik.PNG',
        direction: 'Design',
        age: 33,
        type: 'Baby',
        location: 'Tyumen Oblast, Russia',
        birthday: 'September 12, 2021 (7:28 PM)',
        gender: 'Masculine',
        national: 'Croatian',
    },
    {
        id: 3,
        info: 'More Info',
        name: 'Kohar Daniel Nazarian',
        img: './image/krab.png',
        direction: 'Game Developer',
        age: 22,
        type: 'Young Adult',
        location: 'Croatia',
        birthday: 'April 14, 1993 (7:11 AM)',
        gender: 'Feminine',
        national: 'Polish',


    },
    {
        id: 4,
        info: 'More Info',
        name: 'Ohannes Grigor Nazaretyan',
        img: './image/pin.PNG',
        direction: 'Web Developer',
        age: 55,
        type: 'Child',
        location: 'Bosnia and Herzegovina',
        birthday: 'December 6, 2014 (4:53 AM)',
        gender: 'Feminine',
        national: 'Bosnian',
    },
    {
        id: 5,
        info: 'More Info',
        name: 'Perchuhi Harut Krikorian',
        img: './image/patrik.png',
        direction: 'Design',
        age: 11,
        type: 'Adolescent',
        location: 'Basque Country, Spain',
        birthday: 'December 25, 2006 (1:47 AM)',
        gender: 'Masculine',
        national: 'Spanish',
    },
    {
        id: 6,
        info: 'More Info',
        name: 'Hagop Nerses Darbinyan',
        img: './image/krab.png',
        direction: 'Game Developer',
        age: 88,
        type: 'Adult',
        location: 'Ethiopia',
        birthday: 'May 31, 1988 (4:26 AM)',
        gender: 'Masculine',
        national: 'Ethiopian',

    },
    {
        id: 7,
        info: 'More Info',
        name: 'Hurik Gohar Matevosyan',
        img: './image/pin.png',
        direction: 'Web Developer',
        age: 77,
        type: 'Adult',
        location: 'Norway',
        birthday: 'July 27, 1988 (12:25 AM)',
        gender: 'Masculine',
        national: 'Norwegian',
    },
    {
        id: 8,
        info: 'More Info',
        name: 'Gurgen Arevik Sarkisyan',
        img: './image/spanch.png',
        direction: 'Design',
        age: 99,
        type: 'Adolescent',
        location: 'Baden-Württemberg, Germany',
        birthday: 'September 10, 2007 (2:29 AM)',
        gender: 'Masculine',
        national: 'German',

    }

];
export const coaches:Persons[]  = [
    {
        id: 1,
        info: 'More Info',
        name: 'Harut Matevos Petrosyan',
        img: './image/pin.png',
        direction: 'Web Developer',
        age: 44,
        type: 'Young Adult',
        location: 'Maharashtra, India',
        birthday: 'February 17, 2001 (8:12 AM)\n',
        gender: 'Masculine',
        national: 'Indian',
    },
    {
        id: 2,
        info: 'More Info',
        name: 'Lusineh Perchuhi Nazarian',
        img: './image/sova.png',
        direction: 'Design',
        age: 33,
        type: 'Adult',
        location: 'Bucharest, Romania',
        birthday: 'May 18, 2002 (3:08 AM)',
        gender: 'Masculine',
        national: 'Romanian',
    },
    {
        id: 3,
        info: 'More Info',
        name: 'Gohar Sargis Darbinyan',
        img: './image/svinya.png',
        direction: 'Game Developer',
        age: 22,
        type: 'Adult',
        location: 'Saint Vincent and the Grenadines',
        birthday: 'April 27, 1968 (11:39 PM)',
        gender: 'Feminine',
        national: 'German',

    },
    {
        id: 4,
        info: 'More Info',
        name: 'Vosgi Talin Khachaturian',
        img: './image/olen.png',
        direction: 'Web Developer',
        age: 55,
        type: 'Adult',
        location: 'Slovenia',
        birthday: 'July 6, 1991 (9:16 PM)',
        gender: 'Feminine',
        national: 'Slovene',

    },
    {
        id: 5,
        info: 'More Info',
        name: 'Avag Maral Nazaryan',
        img: './image/olen.png',
        direction: 'Design',
        age: 11,
        type: 'Adult',
        location: 'Serbia',
        birthday: 'May 28, 1968 (3:05 AM)',
        gender: 'Feminine',
        national: 'Serbian',

    },
    {
        id: 6,
        info: 'More Info',
        name: 'Bagrat Lucineh Sarkisian',
        img: './image/svinya.png',
        direction: 'Game Developer',
        age: 88,
        type: 'Adult',
        location: 'Sweden',
        birthday: 'March 19, 1985 (9:22 PM)',
        gender: 'Feminine',
        national: 'Swedish',

    },
    {
        id: 7,
        info: 'More Info',
        name: 'Karekin Hamlet Nazaretian',
        img: './image/sova.png',
        direction: 'Web Developer',
        age: 77,
        type: 'Young Adult',
        location: 'Berlin, Germany',
        birthday: 'August 20, 2000 (10:56 PM)',
        gender: 'Masculine',
        national: 'German',

    },
    {
        id: 8,
        info: 'More Info',
        name: 'Anoush Vartan Vardanyan',
        img: './image/pin.png',
        direction: 'Design',
        age: 99,
        type: 'Adolescent',
        location: 'Köln, North Rhine-Westphalia, Germany',
        birthday: 'April 8, 2007 (3:10 PM)',
        gender: 'Masculine',
        national: 'German',


    }

];
