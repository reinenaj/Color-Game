//var colors = generateRandomColors(6);
var colors = [];
var numSquares = 6;
//var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		//add initial colors to squares
		//squares[i].style.backgroundColor = colors[i];

		//add click listeners to squars
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to color picked
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//this.textContent === "Easy" ? numSquares = 3 : numSquares =6;
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else {
				numSquares = 6;
			}

			reset();
			//figure out how many squares to show
			//pick colors
			//pick a new picked color
			//update page to reflect changes


		});
	}
}

function reset(){

	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of square
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
		
	};
	h1.style.backgroundColor = "steelBlue";	
}

resetButton.addEventListener("click", function(){
	
	reset();
	/*
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change colors of square
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelBlue";*/
});

function changeColors(color){
	//loop thru squares
	//change colors

	for (var i=0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random color, push into array
		arr.push(randomColor());
	};
	//return array
	return arr;
}

function randomColor(){
	//pick a red from  0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//return rgb string
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

/*
easyBTN.addEventListener("click", function(){
	easyBTN.classList.add("selected");
	hardBTN.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBTN.addEventListener("click", function(){
	easyBTN.classList.remove("selected");
	hardBTN.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
*/


//colorDisplay.textContent = pickedColor;
/*
for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	//squares[i].style.backgroundColor = colors[i];

	//add click listeners to squars
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare to color picked
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}*/
