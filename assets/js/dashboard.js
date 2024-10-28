
$("#toggle").click(function(){
    var w = $('#sidebar').width();
    var pos = $('#sidebar').offset().left;

    if(pos == 0) {
        $("#sidebar").animate({"left": -w+100}, "fast");
        $(".main").animate({"width": "100vw"}, "fast");
        $(".main").animate({"margin-left": 100}, "fast");
    }
    else {
        $("#sidebar").animate({"left": "0", }, "fast");
        // $(".main").animate({"width": "100%", "margin-left": 350}, "fast")
    }

});