


$(document).ready(function(){

// $(".character-picture").hide();
		var currentQuestion = 0;
		var questionArr = [];
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});	//question 1
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});
		questionArr.push({ image: "http://img2.timeinc.net/people/i/2015/news/150914/super-cara-435.jpg", answers: ["Wonder Woman","Poison Ivy","Enchantress","Talia Al Ghoul"], correctAnswer:2});
		
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
