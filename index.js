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
let id = 9;
let selectedItemId = null;
let courslist = [
    {
        id: 1,
        course: 'UI/UX Design',
        name: 'Interpersonal skills - work better with others!',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '1',
        price: '355',
    },
    {
        id: 2,
        course: 'Web Developer',
        name: 'How to become an Expert Web Developer',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '2',
        price: '360',
    },
    {
        id: 3,
        course: 'UX Research',
        name: 'User Experience Design \n' + 'Essentials',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '3',
        price: '365',
    },
    {
        id: 4,
        course: '3D Design',
        name: 'Creating 3D Modelling in \n' + 'Blender ',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '4',
        price: '370',

    },
    {
        id: 5,
        course: 'UI/UX Design',
        name: 'How to become an Expert Web Developer',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '5',
        price: '375',

    },
    {
        id: 6,
        course: 'Public Speaking',
        name: 'Interpersonal skills - work better with others!',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '2',
        price: '380',

    },
    {
        id: 7,
        course: '3D Design',
        name: 'Creating 3D Modelling in \n' + 'Blender ',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '4',
        price: '385',

    },
    {
        id: 1,
        course: 'UI/UX Design',
        name: 'Interpersonal skills - work better with others!',
        img: './img/pon3.jpg',
        author: 'Ilusha Company',
        stars: '8',
        price: '390',

    }

];
const editInfo = document.querySelector('.addInfo')
const editName = document.querySelector('.addName')
const editImg = document.querySelector('.addImg')
const editAuthor = document.querySelector('.addCompany')
const editPrice = document.querySelector('.addPrice')

function clearInput() {
    editPrice.value = '';
    editAuthor.value = '';
    editName.value = '';
    editInfo.value = '';
    editImg.value = '';
}

function coursesAll(courslist) {
    const nazovigalerry = document.querySelector('.gallery');
    nazovigalerry.textContent = '';
    courslist.forEach(function (item) {

            const newcards = document.createElement('div');
            newcards.classList.add('cards');
            nazovigalerry.appendChild(newcards);

            const imgdiv = document.createElement('div');
            imgdiv.classList.add('imgbtn')
            newcards.appendChild(imgdiv)

            const imgcards = document.createElement('img')
            imgcards.src = './img/pon3.jpg'
            imgdiv.appendChild(imgcards)

            const typekyrs = document.createElement('input')
            typekyrs.setAttribute('type', 'button')
            typekyrs.value = item.course;
            typekyrs.classList.add('typecourse')
            imgdiv.appendChild(typekyrs)



            const deleteBtn = document.createElement('span')
            deleteBtn.classList.add('remove');
            deleteBtn.onclick = removeCourse(item.id);
            newcards.appendChild(deleteBtn)

            const zagl = document.createElement('h3');
            zagl.classList.add('namecourse')
            zagl.textContent = item.name;
            newcards.appendChild(zagl);

            const avtor = document.createElement('p')
            avtor.classList.add('author')
            avtor.textContent = item.author;
            newcards.appendChild(avtor)

            const ratingcourse = document.createElement('div')
            ratingcourse.classList.add('rating')
            newcards.appendChild(ratingcourse)

            const editbtn = document.createElement('input')
            editbtn.classList.add('edit')
            editbtn.setAttribute('type', 'button')
            editbtn.value = 'edit'
            editbtn.onclick = editCourses(item.id)
            newcards.appendChild(editbtn);

            let ratingstars = document.createElement('span')
            let stars = 5;
            for (let i = 0; i < stars; i++) {
                ratingstars = document.createElement('span');
                if (i < item.stars) {
                    ratingstars.classList.add('gold');
                }
                ratingcourse.appendChild(ratingstars);
            }
            const pricecourse = document.createElement('p')
            pricecourse.classList.add('price')
            pricecourse.textContent = "$" + item.price
            newcards.appendChild(pricecourse)
        }
    )

}

coursesAll(courslist)

const btnadd = document.querySelector('.btnAdd');
btnadd.addEventListener('click', addCourses);


function addCourses() {

    if (btnadd.value === 'Add') {
        courslist.push({
            id,
            img: document.querySelector('.addImg').value,
            course: document.querySelector('.addName').value,
            author: document.querySelector('.addCompany').value,
            price: document.querySelector('.addPrice').value,
            name: document.querySelector('.addInfo').value,

        });
        clearInput();
        id++;
    } else {
        courslist = courslist.map(item => item.id === selectedItemId ? {
            ...item,
            name: editInfo.value,
            course: editName.value,
            img: editImg.value,
            price: editPrice.value,
            author: editAuthor.value,
        } : item)
btnadd.value = 'Add'
        clearInput();

    }
    coursesAll(courslist);
}

const deleteCourse = document.querySelector('.remove');
deleteCourse.addEventListener('click', removeCourse);

function removeCourse(id) {
    return function () {
        courslist = courslist.filter(item => item.id !== id);
        coursesAll(courslist);
    }
}


const editCourse = document.querySelector('.edit');
editCourse.addEventListener('click', editCourses);

function editCourses(id) {
    return function () {

        if (btnadd.value === 'Add') {
            window.scrollTo({
                top : 500,behavior:'smooth'
            })
            const item = courslist.find(item => item.id === id);
            editInfo.value = item.name;
            editName.value = item.course;
            editImg.value = item.img;
            editAuthor.value = item.author;
            editPrice.value = item.price
            btnadd.value = 'Save';
            selectedItemId = id;
        }

    }
}