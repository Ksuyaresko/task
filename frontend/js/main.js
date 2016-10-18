//Slider//

    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528
      });
    });

//video//
$(document).ready(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).text("Pause");    
        } else {
            video.pause();
            $(this).text("Play");
        }
                
        $(this).toggleClass("paused"); 
    });

});


