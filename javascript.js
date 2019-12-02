

//Creamos el objeto que necestiamos para poder hacer la petición

var xhttp= new XMLHttpRequest();


$(document).ready(function(){

    $("#request").click(function(){

      $("#request").text("Another one");

        $.get("http://api.icndb.com/jokes/random", function(joke)
        {
          $("#number").text("Joke number  "+joke.value.id);  
          $("#answer").text(joke.value.joke);

        });
      
    });});


/*
function realizarPeticion(){

    xhttp.onreadystatechange=function("http://api.icndb.com/jokes/random","GET",mostrarChiste){

        if(this.readyState==4 && this.status==200){
            document.getElementById("answer").innerHTML=this.responseText;

        }};

}


function mostrarChiste(){

}


    
xhttp.open("Get","demo_get.asp",true);
xhttp.send(null);




/*
var $btn = $('#request');
var $answer = $('#answer');
 
$btn.on('click', function() {
  $(this).hide();
  $answer.load('Bio.txt', completeFunction);
});
 
function completeFunction(responseText, textStatus, request) {
  $answer.css('border', '1px solid #e8e8e8');
  if(textStatus == 'error') {
      $answer.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
  } 
} 


*/