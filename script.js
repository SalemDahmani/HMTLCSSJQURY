function addlife( ){
        $("#sec").empty()
       for (var i = 0 ; i <life ; i ++){
              $("#sec").append("<img src='9aleb.jpg' class='img' >")             

}} 


var playing = false;
var score ;
var life;
var array = ['ananas.png','apple.png','ASSAD.png','banana.png','bati5a.png','fraize.png','orange.jpg','peach.png','pear.png','penguin.png','plum.jpg','Rat.jpg']
var step 



$(function (){
      
    $("#start_stop").click(function (){
        if(playing == true){
            location.reload();
           
           }
        else {
            $("#audio_1")[0].play()
            playing = true ;
            score = 0 ;
        $("#score_1").html(score); 
        $("#time").show()
            life = 3;
            addlife()
         
        $("#start_stop").html("<p>Reset Game</p>"); 
             start_Action()
            }
            function start_Action(){
$("#fruit").show()
    pick_fruit()
  
}
$("#fruit").mouseover(function (){
    score++
    $("#score_1").html(score);
    $("#audio")[0].play()
    $("#fruit").hide()
          start_Action()
        
    
        

    
})


function pick_fruit(){
    //hatina el position 
    x = Math.floor(Math.random()*11)
    $("#fruit").attr("src", array[x])
    $("#fruit").css({'left' :Math.floor(Math.random()*700), 'top' : -50})
    
    
    //random step
    step = 1 + Math.floor(Math.random()*3)
    
    // drop event
    
    action = setInterval(function (){
        $("#fruit").css('top', $("#fruit").position().top + step)
        if ($("#fruit").position().top >= $("#container").height()){
            if (life > 1) {
            $("#fruit").show()
             pick_fruit()
             $("#fruit").css({'left' :Math.floor(Math.random()*700), 'top' : -50})
    step = 1+ Math.floor(Math.random()*3)
                
            life--;
                step = 1+ Math.floor(Math.random()*3)
            addlife();
        }
            else {
                playing = false ;
                   $("#start_stop").html("<p>Start Game</p>"); 
                clearInterval(action)
                $("#fruit").hide()
                 $("#sec").empty()
                $("#final").html(score)
                $(".gg").show()
                  
                  
                  $("#audio_2")[0].play()
                
                
                
            }
            
            }
    },170)
   

}
        
    })
})















