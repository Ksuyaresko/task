//Slider//

    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528
      });
    });

//video//
$(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).addClass("plays"); 
            $(this).removeClass("paused");
        } else {
            video.pause();
            $(this).addClass("paused");
            $(this).removeClass("plays");
        }       
    });
    
});
    
$(function () {
   $("#playpause").click(function () {
   $(".howWorks").toggleClass("invisible");
   });
});

//PopUpForm
$(document).ready(function() {
	$('#formBtn').click( function(event){
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#popupForm') 
					.css('display', 'block') // 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	$('#overlay, #close, #cancel').click( function(){ 
		$('#popupForm')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
});


