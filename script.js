//User clicks one of five rating buttons:
//  +JS should: *store # as variable (ratingNum);
//              *change color of button clicked;

//When user clicks 'submit':
//  +JS should: *open new card;
//              *concatenate obj. literal to string to make rating statement;
//              *append rating statement to DOM;

//First, store clicked rating num as variable,
//then, make a function that creates rating string.
//That function should return a new variable with the full string.
//Finally, append that new variable to the HTML (new card)

document.getElementById('1').addEventListener('click', orangeRating);

function orangeRating() {
    //document.getElementsByClassName('.ratingButton').style.backgroundColor = "orange";
    console.log('test');
}