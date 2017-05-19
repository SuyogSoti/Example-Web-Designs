$(document).ready(function(){
    $("body, div#first").css("height", window.innerHeight);
    $("div.single").click(function(){
        $("div#first").fadeOut(function(){
            $("div#second").fadeIn("slow");
        });
    })
})