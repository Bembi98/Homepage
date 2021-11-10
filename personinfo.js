let person = [
    {
        id: 1,
        info: 'More Info',
        name: 'Taniel Davit Davidyan',
        img: './img/spanch.png',
        direction: 'Web Developer',
        age: '44',
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
        img: './img/patrik.png',
        direction: 'Design',
        age: '33',
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
        img: './img/krab.png',
        direction: 'Game Developer',
        age: '22',
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
        img: './img/skvid.png',
        direction: 'Web Developer',
        age: '55',
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
        img: './img/patrik.png',
        direction: 'Design',
        age: '11',
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
        img: './img/krab.png',
        direction: 'Game Developer',
        age: '88',
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
        img: './img/skvid.png',
        direction: 'Web Developer',
        age: '77',
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
        img: './img/spanch.png',
        direction: 'Design',
        age: '99',
        type: 'Adolescent',
        location: 'Baden-Württemberg, Germany',
        birthday: 'September 10, 2007 (2:29 AM)',
        gender: 'Masculine',
        national: 'German',

    }

];
let personTwo = [
    {
        id: 1,
        info: 'More Info',
        name: 'Harut Matevos Petrosyan',
        img: './img/pin.png',
        direction: 'Web Developer',
        age: '44',
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
        img: './img/sova.png',
        direction: 'Design',
        age: '33',
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
        img: './img/svinya.png',
        direction: 'Game Developer',
        age: '22',
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
        img: './img/olen.png',
        direction: 'Web Developer',
        age: '55',
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
        img: './img/olen.png',
        direction: 'Design',
        age: '11',
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
        img: './img/svinya.png',
        direction: 'Game Developer',
        age: '88',
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
        img: './img/sova.png',
        direction: 'Web Developer',
        age: '77',
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
        img: './img/pin.png',
        direction: 'Design',
        age: '99',
        type: 'Adolescent',
        location: 'Köln, North Rhine-Westphalia, Germany',
        birthday: 'April 8, 2007 (3:10 PM)',
        gender: 'Masculine',
        national: 'German',


    }

];

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu-list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.add('menu_active');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('menu_active');
    }
});


function personAll(person) {
    const peoples = document.querySelector('#tab_1');
    peoples.textContent = '';
    person.forEach(function (item) {

            const personCards = document.createElement('div');
            personCards.classList.add('cards');
            peoples.appendChild(personCards);

            const imgdiv = document.createElement('div');
            imgdiv.classList.add('imgbtn')
            personCards.appendChild(imgdiv)

            const imgcards = document.createElement('img')
            imgcards.src = item.img
            imgdiv.appendChild(imgcards)

            const moreInfo = document.createElement('input')
            moreInfo.setAttribute('type', 'button')
            moreInfo.value = item.info;
            moreInfo.classList.add('typePerson')
            moreInfo.onclick = () => {
                if (!modOpen) {
                    modActive.classList.add('openMod');
                    modOpen = true;
                }
                studentShowDetails(item);
            }
            imgdiv.appendChild(moreInfo)

            const zagl = document.createElement('h3');
            zagl.classList.add('namecourse')
            zagl.textContent = item.name;
            personCards.appendChild(zagl);

            const dirPerson = document.createElement('p')
            dirPerson.classList.add('direction')
            dirPerson.textContent = "Direction:" + " " + item.direction;
            personCards.appendChild(dirPerson)

            const agePerson = document.createElement('p')
            agePerson.classList.add('age')
            agePerson.textContent = "Age:" + " " + item.age
            personCards.appendChild(agePerson)


        }
    )

}

personAll(person)

function personAllTwo(personTwo) {
    const peoples = document.querySelector('#tab_2');
    peoples.textContent = '';
    personTwo.forEach(function (item) {

            const personCards = document.createElement('div');
            personCards.classList.add('cards');
            peoples.appendChild(personCards);

            const imgdiv = document.createElement('div');
            imgdiv.classList.add('imgbtn')
            personCards.appendChild(imgdiv)

            const imgcards = document.createElement('img')
            imgcards.src = item.img
            imgdiv.appendChild(imgcards)

            const moreInfo = document.createElement('input')
            moreInfo.setAttribute('type', 'button')
            moreInfo.value = item.info;
            moreInfo.classList.add('typePerson')
            moreInfo.onclick = () => {
                if (!modOpen) {
                    modActive.classList.add('openMod');
                    modOpen = true;
                }
                coachShowDetails(item)
            }
            imgdiv.appendChild(moreInfo)

            const zagl = document.createElement('h3');
            zagl.classList.add('namecourse')
            zagl.textContent = item.name;
            personCards.appendChild(zagl);

            const dirPerson = document.createElement('p')
            dirPerson.classList.add('direction')
            dirPerson.textContent = "Direction:" + " " + item.direction;
            personCards.appendChild(dirPerson)

            const agePerson = document.createElement('p')
            agePerson.classList.add('age')
            agePerson.textContent = "Age:" + " " + item.age
            personCards.appendChild(agePerson)


        }
    )

}

personAllTwo(personTwo)


const modBtn = document.querySelectorAll('.typePerson');
const modActive = document.querySelector('.modalka')
const modInactive = document.querySelector('.modalka-close')
let modOpen = false;
modInactive.addEventListener('click', () => {
    modActive.classList.remove('openMod');
    modOpen = false;
})

function studentShowDetails(person) {
    const pGender = document.querySelector('#gender')
    const pType = document.querySelector('#type')
    const pNational = document.querySelector('#national')
    const pLocation = document.querySelector('#location')
    const pAge = document.querySelector('#age')
    const pBirth = document.querySelector('#birthday')

    pGender.textContent = `Gender: ${person.gender}`;
    pType.textContent = `Type: ${person.type}`;
    pNational.textContent = `National: ${person.national}`;
    pLocation.textContent = `Location: ${person.location}`;
    pAge.textContent = `Age: ${person.age}`;
    pBirth.textContent = `birthday: ${person.birthday}`;

}

function coachShowDetails(personTwo) {
    const pGender = document.querySelector('#gender')
    const pType = document.querySelector('#type')
    const pNational = document.querySelector('#national')
    const pLocation = document.querySelector('#location')
    const pAge = document.querySelector('#age')
    const pBirth = document.querySelector('#birthday')

    pGender.textContent = `Gender: ${personTwo.gender}`;
    pType.textContent = `Type: ${personTwo.type}`;
    pNational.textContent = `National: ${personTwo.national}`;
    pLocation.textContent = `Location: ${personTwo.location}`;
    pAge.textContent = `Age: ${personTwo.age}`;
    pBirth.textContent = `birthday: ${personTwo.birthday}`;

}

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
