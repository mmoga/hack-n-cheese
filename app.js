//create your variables
const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const lastNames = [
    'Gorgonzola',
    'Mcgee',
    'Pipsqueak',
    'Wifey'
];
const firstNames = [
    'Juicy',
    'Snuggles',
    'Gimpy',
    'Smutty'
];

//add your eventListeners
button.addEventListener('click', generateName);

//functions
function generateName(e) {
    const rndLastName = randomChoice(lastNames);
    const rndFirstName = randomChoice(firstNames);
    firstNameEl.textContent = rndFirstName;
    lastNameEl.textContent = rndLastName;
}

function randomChoice(array) {
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}