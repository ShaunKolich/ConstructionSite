// // Event listener for the Hamburger Menu!


// let ToggleClick = document.querySelector('.fa-bars').addEventListener('click', classToggle);

// let test = document.querySelector('nav');
// let test1 = document.querySelector('.nav_show');
// console.log(test);
// console.log(test1);



// function classToggle() {
//     console.log('hello');
//     let test = document.querySelector('#navhide');
//     test.classList.toggle('nav_show');
// }

let mainNav = document.querySelector('.nav_show');
console.log(mainNav);
let navBarToggle = document.querySelector('.fa-bars');
console.log(navBarToggle);

navBarToggle.addEventListener('click', function () {
    console.log('hello');
    mainNav.classList.toggle('navhide');
});