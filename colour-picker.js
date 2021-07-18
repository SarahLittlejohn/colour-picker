var noOfSquares = Math.floor(Math.random() * 9 + 1);
for (var i = 0; i < noOfSquares; i++) {
    document.write('<div class="square"></div>');
}

//pallet
var arr = [];

//background colour
var backgroundColour = "rgb(243, 236, 221)";

//heading colour
var headingColour = "#73E29B";

//colour picked for target
var picked

//to get the RGB display
var targetColour = document.getElementById("targetColour");

//message that can be empty, try again or correct
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementById("Random");
var easy = document.getElementById("Easy");
var medium = document.getElementById("Medium");
var hard = document.getElementById("Hard");


init();

function init() {
    setGame();

    //to get all the squares div
    var squares = document.getElementsByClassName("square");

    for (var i = 0; i < squares.length; i++) {
        //setting each square's colour
        squares[i].style.backgroundColor = arr[i];

        //adding event listener
        squares[i].addEventListener("click", function () {
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "steelblue";
                changeColour(this.style.backgroundColor);
            } else {
                message.textContent = "Try Again";
                message.style.color = "hotpink";
                this.style.backgroundColor = backgroundColour;
            }

        })
    }

    //Button listen for reset of game
    reset.addEventListener("click", resetIn);
    easy.addEventListener("click", resetEasy);
    medium.addEventListener("click", resetMedium);
    hard.addEventListener("click", resetHard);

    //Changes squares and heading to correct colour
    function changeColour(colour) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colour;
        }
        head.style.backgroundColor = colour;
    }

    //Resets the game
    function resetIn() {
        setGame();
        message.textContent = "";

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = arr[i];
        }
    }
}

//Function to set game
function setGame() {
    //generate random coloured palette
    arr = generateRandomColour(noOfSquares);

    //get target colour randomly from the array size
    picked = arr[randomPickedColourIndex()];

    //updating RGB display
    targetColour.textContent = picked;

    //Generates colourPallet
    function generateRandomColour(limit) {
        var colourPallet = [];
        for (var i = 0; i < limit; i++) {
            colourPallet.push(rgbGenerator());
        }

        return colourPallet;
    }

    //Generates an index number for pallet
    function randomPickedColourIndex() {
        return Math.floor(Math.random() * arr.length);
    }

    //Generates an RGB colour
    function rgbGenerator() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}