


$(document).ready(function(){
	

// $(".character-picture").hide();
		var currentQuestion = 0;
		var questionArr = [];
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});	//question 1
		questionArr.push({ image: "https://images5.alphacoders.com/371/371929.jpg", answers: ["Talia Al Ghoul","Zatanna","Black Canary","Huntress"], correctAnswer:1});
		questionArr.push({ image: "http://static3.comicvine.com/uploads/scale_small/10/105264/4376573-9575308b2ac1f68c7f7f376ac9a61c33.jpg", answers: ["Dawnstar","Mera","Phantom Lady","Cir-El"], correctAnswer:1});
		questionArr.push({ image: "http://static5.comicvine.com/uploads/original/2/24477/1218703-batwoman.jpg", answers: ["Batgirl","Lady Blackhawk","Vixen","Batwoman"], correctAnswer:3});
		questionArr.push({ image: "images/takes-command.png", answers: ["Dawnstar","Starfire","Saturn Girl","Raven"], correctAnswer:1});
		questionArr.push({ image: "images/goodbye_batman.jpg", answers: ["Jonah Hex","John Constantine","Sinestro","Rhas Al Ghoul"], correctAnswer:3});
		questionArr.push({ image: "images/gotham-knight.jpg", answers: ["Deathstroke","Darkseid","Red Hood","Vandal Savage"], correctAnswer:2});
		questionArr.push({ image: "images/assassin.jpg", answers: ["Deadshot","Deathstroke","Black Mask","Captain Boomerang"], correctAnswer:1});
		questionArr.push({ image: "images/the-leader.png", answers: ["Cir-El","General Eiling","Ozymandias","Zod"], correctAnswer:3});
		questionArr.push({ image: "images/in-the-deep.jpg", answers: ["Bane","Killer Croc","Doomsday","Mongul"], correctAnswer:1});
		
	function updateView() {	
	
		for (var i= 0; i < questionArr[currentQuestion].answers.length; i++){
		
		var container = $('#q'+i).next(); //siblings()[0];
		console.log(container);	
		$(container).html(questionArr[currentQuestion].answers[i]);

		}
	
	$(".character-picture .pic-container").append('<img src='+questionArr[currentQuestion].image+'>');
	
	
	} //end updateView
	
	
	
$(".startButton").click(function(){
	
	
	updateView();
	$(".game").show();
	
	
});

$(".nextButton").click(function(){
	
	currentQuestion++;
	updateView();
	$(".character-picture .pic-container > img").remove();
	$(".character-picture .pic-container").append('<img src='+questionArr[currentQuestion].image+'>');
	
	
});



//another jquery statment for "next question button"

// currentQuestion++;
		
		
//Create function to check answers




		
		
		
		
		
		
		
		
		
		
		
		// for (var i = 0; i < 10; i++){
			
		// }
		


	
	// $(".intro-screen").hide();
	// $(".character-picture h3").show();
	// $(".character-picture#character_1").show();//first question
	// $(".game h3").show();
	// $(".game .q1").show();
	
	// // $(".character_1").show();
	// // $(".game").show();
	// // $(".game").children().hide();
	// // $(".q1").show();
	// // $(".game > h3").show();
	
	


return false;
});
