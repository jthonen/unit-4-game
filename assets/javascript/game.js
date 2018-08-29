//* waits until document has loaded to run Jquery
$(document).ready(function(){

//* Define Variables
var gem1 = Math.floor((Math.random() * 12) + 1);
var gem2 = Math.floor((Math.random() * 12) + 1);
var gem3 = Math.floor((Math.random() * 12) + 1);
var gem4 = Math.floor((Math.random() * 12) + 1);
var wins = 0;
var losses = 0;
var count = 0;
var stm = Math.floor((Math.random() * 120) + 19);

//*Scoretomatch random number generator
$("#scoretomatch").text(stm); 

//*On.click function for gems
$("#gem1").on("click", function(){
    count = count + gem1;
    $("#currentscore").text(count);
    compare();
})
$("#gem2").on("click", function(){
    count = count + gem2; 
    $("#currentscore").text(count);
    compare();
})
$("#gem3").on("click", function(){
    count = count + gem3;
    $("#currentscore").text(count);
    compare();
})
$("#gem4").on("click", function(){
    count = count + gem4;
    $("#currentscore").text(count);
    compare();
})

//conditional for win and loss counter and reset 
function compare(){
if ( stm === count ){
    wins++;
    $("#wins").text(wins);
    stm = Math.floor((Math.random() * 120) + 19);
    $("#scoretomatch").text(stm);
    count = 0;
    $("#currentscore").text(count); 
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
}
else if ( count > stm ){ 
    losses++;
    $("#losses").text(losses);
    stm = Math.floor((Math.random() * 120) + 19);
    $("#scoretomatch").text(stm);
    count = 0;
    $("#currentscore").text(count);
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
}
}
})




