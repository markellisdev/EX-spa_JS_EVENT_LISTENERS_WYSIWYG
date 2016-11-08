"use strict";
/*jshint loopfunc: true */

/* -------------- VARs ---------------*/

// Create an array of objects that represents famous people.
var person = [
	{
		title: "Entrepreneur",
		name: "Tim Ferriss",
		bio: "Tim is an American author, entrepreneur and public speaker. He has written a number of self-help books which have appeared on the New York Times, Wall Street Journal, and USA Today",
		image: "https://blog.bulletproof.com/wp-content/uploads/2015/04/tim_ferriss.jpg",
		lifespan: {
			birth: "July 20, 1977",
			death: undefined,
		}

	},

	{
		title: "Security Researcher",
		name: "Samy Kamkar",
		bio: "Samy is an American privacy and security researcher, computer hacker, whistleblower and entrepreneur. He is possibly best known for creating and releasing the fastest spreading virus of all time, the MySpace worm Samy, and being subsequently raided for it by the United States Secret Service, under the Patriot Act.",
		image: "http://i2.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2016/05/samy-kamkar-2.png?resize=300%2C300",
		lifespan: {
			birth: "December 10, 1985",
			death: undefined,
		}

	},

	{
		title: "Hothead",
		name: "Raphael",
		bio: "Raphael or Raph is one of the four Teenage Mutant Ninja Turtles and a member of the TMNT. He is the younger adoptive brother of Karai, younger brother of Leonardo, older brother of Donatello and Michelangelo, and the second son of Master Splinter.",
		image: "http://i.ebayimg.com/images/g/JYIAAOSwU9xURfgt/s-l300.jpg",
		lifespan: {
			birth: "1984",
			death: undefined,
		}

	},

	{
		title: "Stoic Philosopher",
		name: "Seneca",
		bio: "He was born in Cordoba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy. He was a tutor and later advisor to emperor Nero.",
		image: "http://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_large_1x/public/images/contributor/seneca_360x450_0.jpg?itok=Cu7aSqMx",
		lifespan: {
			birth: "4 BC",
			death: "65 AD",
		}

	},
];

var textIn = document.getElementById("textInput");

var counter = 1;


/* -------------- FUNCTIONs ---------------*/

var createCards = (function(onPageLoad) {

	var numPersons = person.length;

	for (var i = 0; i < numPersons; i++) {
		console.log("i", i , person[i].name );

	var colorClass;

	if (i % 2 === 0) {
		colorClass="blueBack";
	}
	else {
		colorClass="yellowBack";
	}

	var newCard =
		`<header class="cardHeader">
			<div class="cardTitle"><strong>${person[i].title}</strong>: ${person[i].name}
			</div>
		</header>
		<div class="cardBio">
			<img class="cardImg" src="${person[i].image}" alt= person[i].name + "'s photo" />
			<p class="bio">${person[i].bio}</p>
		</div>
		<footer class="cardFooter">${person[i].lifespan.birth}: ${person[i].lifespan.death}</footer>
		`;

	var cardDiv = document.createElement("div");
		cardDiv.setAttribute("class", `card ${colorClass}`);
		cardDiv.setAttribute("target", "card");


		cardDiv.innerHTML = newCard;
		cardDiv.id = i+1;

		cardDiv.addEventListener("click", function(event) {
			console.log("event current target", event.currentTarget.querySelector(".bio"));
			console.log("event current target", event.currentTarget);

			var dotted = event.currentTarget;
			dotted.classList.toggle("dotBorder");

			var clicked = event.currentTarget.querySelector(".bio");

			document.getElementById("textInput").focus();
			document.getElementById("textInput").focus();

			var clickToType = event.currentTarget.querySelector("p");

			// clickToType.setAttribute("style", "border: 2px dotted black;");

			console.log("click to type", clickToType.innerHTML);
			textToBio(clickToType);
		});

	document.getElementById("container").appendChild(cardDiv);

	}
})();


//person elements .addEventListener("click", function(event) {
//	text input field highlights; &
//	add dotted border;
//})


//bio = text input .value when typing

function textToBio(clickToType) {
	console.log("textToBio function", clickToType.innerHTML);
	textIn.addEventListener("keydown", function(event) {
		clickToType.innerHTML = document.getElementById("textInput").value;
	});
}

//input field .addEventListener keyup, if("keyCode == 13"), remove text from field and remove focus (blur())

textIn.addEventListener("keyup", function(event) {
	if (event.keyCode == 13) {
	console.log("13", event );
		document.getElementById("textInput").value="";
		document.getElementById("textInput").blur();
		var dotted = document.getElementsByClassName("dotBorder");
		console.log("dotted", dotted);
		dotted.classList.toggle("dotBorder");
	}
});