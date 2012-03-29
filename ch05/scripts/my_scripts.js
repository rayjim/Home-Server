$(document).ready(function(){
	var headclix =0, eyeclix = 0, noseclix=0, mouthclix =0;
        lightning_one(4000);
	lightning_two(5000);
	lightning_three(7000);
	$("#head").click(function(){
		if(headclix<9){
			headclix+=1;
		}
		else{
			headclix = 0;
		}
	});
	$("#eyes").click(function(){
		if(eyeclix<9)
			eyeclix++;
		else
			eyeclix = 0;
			
	
	});
	$("#nose").click(function(){
		if(noseclick<9)
			noseclick++;
		else
			noseclick=0;
	});
	$("#mouth").click(function(){
		if(mouthclix<9)
			mouthclix++
		else
			mouthclix = 0;
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


