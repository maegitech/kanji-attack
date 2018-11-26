$(function () {
    $("#hint").hide();
    $("#count").hide();
    $("#checkbox-group1").hide();
    $("#checkbox-group2").hide();
    $("#checkbox-group3").hide();
    $("#checkbox-group4").hide();
    $("#checkbox-group5").hide();
    $("#checkbox-group6").hide();
    $("#checkbox-group7").hide();
    $("#checkbox-group8").hide();
    $("#checkbox-group9").hide();
    $("#checkbox-group10").hide();
    $("#checkbox-group11").hide();
    $("#checkbox-group12").hide();
    $("#checkbox-group13").hide();
    $("#checkbox-group14").hide();

    $("#question").mouseover(function(){
        $("#hint").show();
    });
    $("#question").mouseout(function(){
        $("#hint").hide();
    });

    $("#label-group1").mouseover(function(){
        $("#checkbox-group1").show();
    });
    $("#label-group1").mouseout(function(){
        $("#checkbox-group1").hide();
    });

    $("#checkbox-group1").mouseover(function(){
        $("#checkbox-group1").show();
    });
    $("#checkbox-group1").mouseout(function(){
        $("#checkbox-group1").hide();
    });

    $("#checkbox-group1").onclick(function(){
        check(16);
    });
});