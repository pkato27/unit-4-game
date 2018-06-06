$(document ).ready(function(){


let totalScore = 0;
let wins = 0;
let losses = 0;
// print random number #randomNumber//
let random = Math.floor((Math.random() * (120-19)) + 19);
console.log(random);




//$(#id).on("click", function(){})

$("#randomNumber").append(" " + random);
// var ranCrystal1 = Math.floor((Math.random() * (12-1)) + 1) creating a variable for each button. 
let crystal1 = Math.floor((Math.random() * (12-1)) + 1)
let crystal2 = Math.floor((Math.random() * (12-1)) + 1)
let crystal3 = Math.floor((Math.random() * (12-1)) + 1)
let crystal4 = Math.floor((Math.random() * (12-1)) + 1)

$("#button1").attr("data-value", crystal1)
$("#button2").attr("data-value", crystal2)
$("#button3").attr("data-value", crystal3)
$("#button4").attr("data-value", crystal4)

// alerts winner and loser and add 1 to what ever one you achieve.
function winner(){
    alert("You won! " + random + ' ' + totalScore);
      wins++; 
      $('#wins').text("Wins:" + wins);
 
    }
    function loser(){
        alert("you are a loser" + ' ' + random + ' ' + totalScore);
        losses++
        $('#losses').text("Losses:" + losses)
    }

    //button 1

$('#button1').on ('click', function(){
    totalScore = totalScore + crystal1;
   $('randomNumber').text(totalScore); 
          //sets win/lose conditions
        if (totalScore === random){
          winner();
        }
        else if ( totalScore > random){
          loser();
        }   
  })  


$("#button1").on('click',function(){
    var value1 = $("#button1").attr("data-value");
    totalScore = (+value1) + totalScore;
    $("#totalScore").html("<p> Your Total Score: </p> "+ totalScore);
    console.log(totalScore);
  
 
});

//button 2

$('#button2').on ('click', function(){
  var value2 = $("#button2").attr("data-value");
  totalScore = (+value2) + totalScore;
  $("#totalScore").html("<p> Your Total Score: </p> " + totalScore);
  console.log(totalScore);

   $('randomNumber').text(totalScore); 
          //sets win/lose conditions
        if (totalScore === random){
          winner();
        }
        else if ( totalScore > random){
          loser();
        }   

  })  


/*$("#button2").on('click',function(){
 
    var value2 = $("#button2").attr("data-value");
    totalScore = (+value2) + totalScore;
    $("#totalScore").html("<p> Your Total Score: </p> " + totalScore);
    console.log(totalScore);
});*/

//button 3
$('#button3').on ('click', function(){
    totalScore = totalScore + crystal1;
   $('randomNumber').text(totalScore); 
          //sets win/lose conditions
        if (totalScore === random){
          winner();
        }
        else if ( totalScore > random){
          loser();
        }   
  })  

$("#button3").on('click',function(){

    var value3 = $("#button3").attr("data-value");
    totalScore = (+value3) + totalScore;
    $("#totalScore").html("<p> Your Total Score: </p>" + totalScore  );
    console.log(totalScore);
 
});

// button 4 
$('#button4').on ('click', function(){
    totalScore = totalScore + crystal1;
   $('randomNumber').text(totalScore); 
          //sets win/lose conditions
        if (totalScore === random){
          winner();
        }
        else if ( totalScore > random){
          loser();
        }   
  })  

$("#button4").on('click',function(){

    var value4 = $("#button4").attr("data-value");
    totalScore = (+value4) + totalScore;
    $("#totalScore").html("<p> Your Total Score: </p> " + totalScore);
    console.log(totalScore);
 
});

 

















})


