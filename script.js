//userRating starts at 0 (let userRating = 0)
//create var reference to rating buttons
//creat forEach loop to add event listeners to each rating button
//the function 
//user clicks a rating.
//store
//let userRating = 0;
const oldCard = document.querySelector('.oldCard');
const buttons = document.querySelectorAll('button');
const submitBtn = document.querySelector('.submit');
const newCard = document.querySelector('.thanksContainer');
const rateChoice = document.querySelector('#selectedRating');
let rate = 0;

buttons.forEach(num => {
    num.addEventListener('click', (e) => {
        rate = e.target.innerHTML
        buttons.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    })
});

function rateHandler() {
    if (rate === 0) {
        alert("Please select a rating")
    } else {
        //need to try to append rate to rating-string
        rateChoice.innerHTML = rate
        newCard.classList.remove('hidden');
        oldCard.classList.add('hidden');
    }
}







