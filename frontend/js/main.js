require.config({
    paths: {
        jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min', 'libs/jquery/dist/jquery' ], 
        slick:'slick.min',
        
    }
});

    require(['main'], function() {
        require(['myslider', 'video', 'popupform']);
    });