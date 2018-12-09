$(function () {
    $("#hint").css('color', '#222222');
    $("#count").hide();
    //$("#options-container").hide();

    $("#question").mouseover(function(){
        $("#hint").css('color', '#F0F0F0');
    });
    $("#question").mouseout(function(){
        $("#hint").css('color', '#222222');
    });
    
    $(".showradical").click(function(){
        if(toggle == false) {
            $("#options-container").show();
            toggle = true;
        } else {
            $("#options-container").hide();
            toggle = false;
        }
    });
});