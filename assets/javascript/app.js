$( document ).ready(function() {
    
$('#start').on('click', function() {
	$('#start').remove();
	startGame();
	for (var i = 0; i < spongebobQuestions.length; i++){
		$('#subbody').append('<h2>' + spongebobQuestions[i].question + '</h2>')
			for (var x = 0; x < spongebobQuestions[i].answer.length; x++){
				$('#subbody').append('<input type="radio" name="' + spongebobQuestions[i].correctAnswer + '" value="' + spongebobQuestions[i].answer[x] + '">' + spongebobQuestions[i].answer[x]);
			
		}
	}
	$('#subbody').append('<button id="Submit">Submit</button>');
	$('#Submit').on('click', function () {
		done();

	});

});

var timer;

var spongebobQuestions = [{
	question:"Who is Mr. Krabs' arch nemesis?",
	answer: ["Squidward", "Plankton", "Pearl", "Mr. Snails"],
	correctAnswer: "Plankton"
}, {
	question:"Who are the heros of Bikini Bottom?",
	answer: ["Mermaid Man & Barnacle Boy", "Spongebob & Patrick", "Squidward & Sandy", "Mermaid Man & Barnicle Girl"],
	correctAnswer: "Mermaid Man & Barnacle Boy"
}, {
	question: "What instrument does Squidward like to play?",
	answer: ["Saxophone", "Trumpet", "Oboe", "None of the above"],
	correctAnswer: "None of the above" 
}, {
	question:"What is Gary?",
	answer: ["Cat", "Dog", "Snail", "None of the above"],
	correctAnswer: "Snail" 
}, {
	question:"What is Patrick's last name?",
	answer: ["Fish", "Star", "Tentacles", "Smith"],
	correctAnswer: "Star" 
}, {
	question:"Where does Patrick live?",
	answer: ["In a pineapple", "In a glass dome", "Under a rock", "None of the above"],
	correctAnswer: "Under a rock" 
}, {
	question:"What is Spongebob's occupation?",
	answer: ["Fry cook", "Cashier", "Waiter", "He doesn't work"],
	correctAnswer: "Fry cook" 
}, {
	question:"What is the squirrel's name?",
	answer: ["Sandra", "Sandy", "Cindy", "Sydney"],
	correctAnswer: "Sandy" 
}];

var triviaGame = {
	correct: 0,
	incorrect: 0,
	noSelection: 0,
	counter: 120,
	countdown: function() {
		triviaGame.counter--;
		$('#timer').html(triviaGame.counter);
		if(triviaGame.counter == 0) {
			console.log("time is up!")
			done();
		}
	}
}	

function startGame() {
timer = setInterval(triviaGame.countdown, 1000);
$('#subbody').prepend('<h2> Time Remaining: <span id= "timer">120</span> Seconds</h2>');	
}

function done () {
	clearInterval(timer);
	for (var i = 0; i < spongebobQuestions.length; i++) {

		var selectedAnswer = $("input[name='"+spongebobQuestions[i].correctAnswer+"']:checked").val();
		if(selectedAnswer == null) {
			triviaGame.noSelection++;
		} else if (selectedAnswer === spongebobQuestions[i].correctAnswer) {
			triviaGame.correct++;
		} else {
			triviaGame.incorrect++;
		}
	}

	//console.log(triviaGame.correct + "--" +triviaGame.incorrect + "--" + triviaGame.noSelection);
	$('#subbody').html("<h2> Results of Quiz </h2>");
	$('#subbody').append("<label> Correct: " +triviaGame.correct+ "</label> <br>");
	$('#subbody').append("<label> Incorrect: " +triviaGame.incorrect+ "</label> <br>");
	$('#subbody').append("<label> Unanswered: " +triviaGame.noSelection+ "</label> <br>");
}
	
});
