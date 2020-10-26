var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

let randomBtn = document.getElementById("randomBtn")

function setGradient() {
		body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";

}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomGradient() {
	let r1 = getRandomInt(256);
	let g1 = getRandomInt(256);
	let b1 = getRandomInt(256);
	let r2 = getRandomInt(256);
	let g2 = getRandomInt(256);
	let b2 = getRandomInt(256);
	let randomGradient = "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 
 
	body.style.background = randomGradient;
	randomBtn.style.background = randomGradient;
	
	css.textContent = body.style.background + ";";
}


window.onload =setGradient();



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", getRandomGradient);







// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var deleteBtns = document.getElementsByClassName("delete");
// var items = ul.getElementsByTagName("li")

// for(var i = 0; i < deleteBtns.length; i++) {
// 		deleteBtns[i].addEventListener("click", removeParent, false);
// }

// function removeParent(evt) {
// 	evt.target.removeEventListener("click", removeParent, false);
// 	evt.target.parentNode.remove();
// }

// function lineThrough(event) {
// 	var a = event.target;
// 	if(count === 0) {
// 		a.classList.add("done");
// 	} else {
// 		a.classList.toggle("done")
// 	} count++;
// }
// ul.onClick = function(event) {
// 	var target = getEventTarget(event);
// 	target.classList.toggle("done");
// }


// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 		var btn = document.createElement("button");
// 		btn.innerHTML = "Delete";
// 		btn.onClick = removeParent;
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		li.innerHTML = li.innerHTML + " ";
// 		li.appendChild(btn);

// 		ul.appendChild(li);
// 		input.value ="";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 		} 
	
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 		} 
// 	}

// function deleteItem() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 		}	

// 	}


// button.addEventListener("click", addListAfterClick)

// input.addEventListener("keypress", addListAfterKeypress)









// var database = [
// 	{
// 		username: "Travis",
// 		password: "1234"
// 	},
// 	{
// 		username: "James",
// 		password: "123456"
// 	},
// 	{
// 		username: "Dan",
// 		password: "12345"
// 	}
// ];


// var newsFeed = [
// 	{
// 		username: "Julia",
// 		timeline: "new job!"
// 	},
// 	{
// 		username: "Jeff",
// 		timeline: " fixed the truck"
// 	}
// ];

// function isUserValid(username , password) {
// for (var i=0; i < database.length; i++) {
// 	if (database[i].username === username &&
// 	database[i].password === password) {
// 		return true;
// 		} 
// 	}
// 	return false;
// }

// function signIn(username, password) {	
// 		if (isUserValid(username, password)) {
// 			console.log(newsFeed);
// 	} else {
// 		alert("sorry bud");
// 	}
// }

// var userNamePrompt = prompt("whats your username?");
// var passwordPrompt = prompt("whats your password?");

// signIn(userNamePrompt, passwordPrompt);



// function signIn(username, password) {
// 	if (username === database[0].username && pasword ===
// 		console.log(newsFeed));
	 
// 	}else{
// 		alert("sorry wrong username or password");
// 	}


// var userNamePrompt = prompt("whats your username?");
// var passwordPrompt = prompt("whats your password?");

// signIn(userNamePrompt, passwordPrompt);
//  all this essentially creats face book login



// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"wash dog",
// 	"vaccume room",
// ];
// for (var i=0; i < todos.length; i++) {
// 	todos.pop();
// }





// var todos = [
// 	"code",
// 	"go to store",
// 	"shower",
// 	"walk dog",
// 	"eat"
// ];

// var todosLength = todos.length;
// // for(var i=0; i < todosLength; i++) {
// // 	console.log(todos[i]);
// // }
// function logTodos(todo, i) {
// 	console.log(todo, i);
// }

// todos.forEach(logTodos);


// var counterOne = 0;
// while (counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++
// }
// var counterTwo = 10
// do {
// 	console.log(counterTwo);
// 	counterTwo--;

// } while (counterTwo > 0)



















// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "reading",
// 	isMarried: false,
// 	spells: ["shazam", "abrakadabra", "boo"],
// 	shout: function() {
// 		console.log("AHHHHHHHHH!");
// 	}

// };

// var list = [
// 	{ username: "andy",
// 	  password: "secret"

// 	},
// 	{
// 		username: "jess",
// 		password: "secret123"
// 	}
// ];





















// function multiply(a, b) {
// 	if (a > 10 || b >10){
// 		return"thats too hard";
// 	}else {
// 		return a * b;
// 	}
// 	}

// multiply(5, 10);

// function checkDriversAge2(){
// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }

// checkDriversAge2()

// function checkDriversAge1(){
// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }

// checkDriversAge1()
