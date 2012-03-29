$(document).ready(function(){
	var headclix =0, eyeclix = 0, noseclix=0, mouthclix =0;
        lightning_one(4000);
	lightning_two(5000);
	lightning_three(7000);
	$("#head").click(function(){
		if(headclix<9){
			headclix+=1;
			$(this).animate({left:"-=367px"},500);
		}
		else{
			headclix = 0;
			$(this).animate({left:"0px"},500);
		}
	});
	$("#eyes").click(function(){
		if(eyeclix<9){
			eyeclix++;
			$(this).animate({left:"-=367px"},500);
			}
		else
		{
			eyeclix = 0;
			$(this).animate({left:"0px"},500);
		}	
	
	});
	$("#nose").click(function(){
		if(noseclix<9){
			noseclix++;
			$(this).animate({left:"-=367px"},500);
			}
		else{
			noseclix=0;
			$(this).animate({left:"0px"},500);
			}
	});
	$("#mouth").click(function(){
		if(mouthclix<9){
			mouthclix++;
			$(this).animate({left:"-=367px"},500);
			}
		else{
			mouthclix = 0;
			$(this).animate({left:"0px"},500);
			}
	});
});//end doc.onready function
	function lightning_one(t){
		$("#lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()", t);
		};
	function lightning_two(t){
		$("#lightning2").fadeIn(250).fadeOut(250);
		setTimeout("lightning_two()", t);
		};
	function lightning_three(t){
		$("#lightning3").fadeIn(250).fadeOut(250);
		setTimeout("lightning_three()", t);
		};


