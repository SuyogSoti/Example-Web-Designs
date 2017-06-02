$(document).ready(function(){
    $("body, div#first").css("height", window.innerHeight);
    $("div#first div.single").click(function(){
        $("div#first").fadeOut(function(){
            $("div#second").fadeIn();
        });
    })
    $("div#back").click(function(){
        $("div#second").fadeOut(function(){
            $("div#first").fadeIn()
        })
    })
})