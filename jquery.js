$(function () {
    $("#hint").hide();
    $("#count").hide();

    $("#question").mouseover(function(){
        $("#hint").show();
    });
    $("#question").mouseout(function(){
        $("#hint").hide();
    });
});