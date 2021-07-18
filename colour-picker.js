var noOfSquares = 6;

//pallet
var arr = [];

//colour picked for target
var picked

//to get all the squares div
var squares = document.getElementsByClassName("square");

//to get the RGB display
var targetColour = document.getElementById("targetColour");

//message that can be empty, try again or correct
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementById("NewColour");

init();

function init(){
    //generate random coloured palette
    arr = generateRandomColour(noOfSquares);

    //get target colour randomly from the array size
    picked = arr[randomPickedColourIndex()];

    //updating RGB display
    targetColour.textContent = picked;

    for(var i=0; i<squares.length; i++) {
        //setting each square's colour
        squares[i].style.backgroundColor = arr[i];

        //adding event listener
        squares[i].addEventListener("click", function(){
            if(picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "steelblue";
                changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again?";
            } else {
                message.textContent="Try Again";
                message.style.color="hotpink";
                this.style.backgroundColor ="rgb(243, 236, 221)";
            }

        })
    }

    reset.addEventListener("click", resetIn);

    function randomPickedColourIndex(){
        return Math.floor(Math.random()*arr.length);
    }

    function generateRandomColour(limit){
        var color=[];
        for(var i=0;i<limit;i++)color.push(rgbGenerator());
        return color;
    }

    function rgbGenerator(){
        var r= Math.floor(Math.random()*256);
        var g= Math.floor(Math.random()*256);
        var b= Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")" ;
    }

    function changeColor(color){
        for(var i=0;i<squares.length;i++) {
            squares[i].style.backgroundColor=color;
        }
            head.style.backgroundColor=color;
        }


    function resetIn(){
        arr=generateRandomColour(noOfSquares);
        picked=arr[randomPickedColourIndex()];
        targetColour.textContent = picked;
        message.textContent="";
        head.style.backgroundColor= "#73E29B";
        for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=arr[i];
        }
    }
}