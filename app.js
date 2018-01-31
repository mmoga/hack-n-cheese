const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');

button.addEventListener('click', generateName);

function generateName(e) {
    console.log(firstNameEl);
    console.log(lastNameEl);
}