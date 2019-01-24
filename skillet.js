$(document).ready(function(){

//----------------------GALLERY----------------------//
	var index = 0;
	$("#main-gallery img").css("position", "relative");
	//---forward---//
	
	$("#next").click(function () {
			$("#main-gallery img").animate({right:'-1200px'}, '40', function(){
				if (index < 4) {
					index++;
				} else {
					index = 0;
				}
				$("#main-gallery img").attr("src", "images/gallery/skillet_gallery" + index + ".jpg");

				$("#main-gallery img").animate({right:'0px'},'40');//Gets the next picture back with an animatiom	
				highlight();
		});
	});


	//--- back ---//
	$("#prev").click(function () {
		$("#main-gallery img").animate({right:'1200px'}, '40', function(){
			if (index > 0) {
				index--;
			} else {
				index = 4;
			}
			$("#main-gallery img").attr("src", "images/gallery/skillet_gallery" + index + ".jpg");
			
			$("#main-gallery img").animate({right:'0px'},'40');//Gets the next picture back with an animatiom	
			highlight();
		});
	});


	//--- thumbs ---//
		
	//click thumbs
		$("#thumbs img").click(function(){
		$("#main-gallery img").attr("src", $(this).attr("src"));
		index=$(this).index();
		highlight();
	});

//makes first thumb yellow without clicking
$("#thumbs img:first").css("opacity", "1");
	
	//makes the border red (hightligt)
	function highlight(){
		$("#thumbs img").css("opacity", "0.5");
		$("#thumbs img:eq("+(index)+")").css("opacity", "1");
	}
	//end of gallery
	
//----------------------READ MORE----------------------//
	$("#read-more").click(function(){
		$(".read-text").toggle(function(){//Toggles betweem being visible and not (".read-text" is the class of the body text)
			if($(".read-text").is(":visible")){

				$("#read-more").html("Read less");
			}else{
				$("#read-more").html("Read more");
			}
			
		});
	});//end of read more
	
	
//----------------------ALBUMS---------------------//
	$("#albums img").click(function(){
		$(this).toggleClass("rotate-albums");
		
	});//End of albums
	
});//End of jQuery





