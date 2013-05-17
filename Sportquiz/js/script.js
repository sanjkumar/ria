var quiztitle = "Multiple Quiz";

    /*
    listed question answers
    */

var quiz = [
    { "question"      :   "Q1: Who won most Golf Majors?",
       //"image"      :   "",
        "choices"     :   [ "Tiger Woods",  "Gary Player", "Jack Nicklaus", "Arnold Palmer"  ],
        "correct"     :  "Jack Nicklaus",
        "explanation" :   "Jack Nicklaus won 17 major golf tournaments.", },
    { "question"      :   "Q2: Where 2011 cricket world cup held?",
        //"image"     :   "img/maria.jpg",
        "choices"     :   [ "New Zealand",  "Endland",  "India",  "South Africa" ],
        "correct"     :   "India",

        "explanation" :   "2011 world cup was held in India and also 1996", },
    { "question"      :   "Q3: Who won the most French Tennis Open?",
        //"image"         :   "",
        "choices"     :   [ "Roger Federer", "Rafal Nadal", "Borris Backer", "Andre Agasi" ],
        "correct"     :   "Rafal Nadal",
        "explanation" :   "Rafal Nadal won 7 French Open.", },
    { "question"      :   "Q4: Which team won the most Olympic Gold Medals at London 2012?",
        //"image"     :   "",
        "choices"     :   [ "USA", "England", "China", "Russia"],
        "correct"     :   "USA",
        "explanation" :   "USA won 46 Gold medals.", },
    { "question"      :   "Q5: Which team won the most football world cup?",
        //"image"     :   "",
        "choices"     :   ["Brazil", "Germany", "Italy", "Spain"],
        "correct"     :   "Brazil",
        "explanation" :  "Brazil won 5 Football world cups", },
    { "question"      :   "Q6: Who is in this picture?",
        "image"       :   "img/maria.jpg",
        "choices"     :   ["Maria Sharapova", "Anna Kournikova", "Ana Ivanovic", "Victoria Azarenka"],
        "correct"     :   "Maria Sharapova",
        "explanation" :  " In 2004, at the age of 17, she won her first grand slam title Wimbledon. ", },
    { "question"      :   "Q7: Where is the Wembley stadium?",
         //"image"    :   "",
        "choices"     :   ["London", "Madrid", "Milan", "New York City"],
        "correct"     :   "London",
        "explanation" :   "The stadium has 90,000 seats with NO obstructed views", },
    { "question"      :   "Q8: Which club won most Champions League?",
        //"image"     :   "",
        "choices"     :   [  "Real Madrid", "Liverpool", "AC Milan", "Barcalona" ],
        "correct"     :   "Real Madrid",
        "explanation" :   "Real Madrid won 9 Champions leagues", },
    { "question"      :   "Q9: Who won the 1998 football world cup?",
        //"image"     :   "",
        "choices"     :   [ "Brazil", "Italy", "France", "England" ],
        "correct"     :   "France",
        "explanation" :   "France has won 2 football world cup, also 1998.", },
    { "question"      :   "Q10: Which club Robin van Persie play for?",
        //"image"     :   "",
        "choices"     :   [ "Manchester Utd", "Aresnal", "Ajax", "Manchester city" ],
        "correct"     :   "Manchester Utd",
        "explanation" :   "Robin also play for his national side Netherland.", },
    { "question"      :   "Q11: How many players are there in a volleyball team?",
        //"image"     :   "",
        "choices"     :   [ "Five", "Nine", "Six", "Ten" ],
        "correct"     :   "Six",
        "explanation" :   "The game of volleyball was invented in 1895 by William G. Morgan.", },
    { "question"      :   "Q12: Which basketball palyer in this picture",
        "image"       :   "img/michael.jpg",
        "choices"     :   [ "Michael Jordan", "Kobe Bryant", "Chris Bosh", "Kenyon Martin" ],
        "correct"     :   "Michael Jordan",
        "explanation" :   "Michael Jordan was on the high school track team and football.", },
    { "question"      :   "Q13: Which Driver won most F1 driver's championship?",
         //"image"    :   "",
        "choices"     :   [ "Vettel", "Alonso", "Schumacher", "Senna" ],
        "correct"     :   "Schumacher",
        "explanation" :   "Schumacher won 7 F1 driver's championship.", },
    { "question"      :   "Q14: Who won the most Tennis Grand Slam?",
        //"image"     :   "",
        "choices"     :   [ "Roger Federer", "Rafal Nadal", "Borris Backer", "Andre Agasi" ],
        "correct"     :   "Roger Federer",
        "explanation" :   "Roger Federer won 17 Grand Slam .", },
    { "question"      :   "Q15: Which Manager won Champions League in 1999 and 2008?",
        //"image"     :   "",
        "choices"     :   [ "Alex Ferguson", "Roberto Manchini", "Avram Grant", "Pep Guadiola" ],
        "correct"     :   "Alex Ferguson",
        "explanation" :   "Alex Ferguson led Manchester 2 Champions League Trophy.", },
    { "question"      :   "Q16: Where is Eden Garden Stadium?",
        //"image"     :   "",
        "choices"     :   [ "Calcutta", "London", "Durban", "Perth" ],
        "correct"     :   "Calcutta",
        "explanation" :   "Established in 1864, Eden Gardens currently holds 90,000 seating capacity.", },
    { "question"      :   "Q17: Who score most goal in foolball?",
        //"image"     :   "",
        "choices"     :   [ "Josef Bican", "Gerd Muller", "Pele", "Romario" ],
        "correct"     :   "Josef Bican",
        "explanation" :   "Josef Bican scored more than 805+.", },
    { "question"      :   "Q18:  Who was the first British footballer to receive the Golden Boot?",
        //"image"     :   "",
        "choices"     :   [ "Michael Owen", "Ian Rush", "Frank Lampard", "David Beckham" ],
        "correct"     :   "Ian Rush",
        "explanation" :   "Ian Rush won Footballer of the Year (1): 1984.", },
    { "question"      :   "Q19: What the name of  footballer in this picture?",
        "image"     :   "img/kaka.jpg",
        "choices"     :   [ "Messi", "Ricardo", "Kaka", "Ronaldo" ],
        "correct"     :   "Kaka",
        "explanation" :   "Kaka was FIFA World Player of the year in 2007.", },    
    { "question"      :   "Q20:  How many The Master's Tiger Woods won?",
        //"image"     :   "",
        "choices"     :   [ "3", "6", "5", "4" ],
        "correct"     :   "5",
        "explanation" :   "Tiger Woods also won 14 Golf majors tournaments.", },
   
];




    /******* script for function working for game quiz *********/
var quizquestion=0,

    score=0,
    
    submit=true,
    
    picked;$(document).ready(function(game){
    
    function one(i){return game(document.createElement("div")).text(i).html()}
        function two(qn){
            if(typeof qn!=="undefined"&&game.type(qn)=="array")
            {game("#choice-block").empty();
                for(var j=0;
                    j<qn.length;j++)
                    {game(document.createElement("li")).addClass("choice choice-box").attr("data-index",j).text(qn[j]).appendTo("#choice-block")
                }
            }
        }       
            function three(){submit=true;game("#explanation").empty();game("#question").text(quiz[quizquestion]["question"]);
                game("#pager").text("Question "+Number(quizquestion+1)+" of "+quiz.length);
                    if(quiz[quizquestion].hasOwnProperty("image")&&quiz[quizquestion]["image"]!="")
                    {
                        if(game("#question-image").length==0)
                        {
                            game(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[quizquestion]["image"]).attr("alt",one(quiz[quizquestion]["question"])).insertAfter("#question")
                        }
                else{
                    game("#question-image").attr("src",quiz[quizquestion]["image"]).attr("alt",h(quiz[quizquestion]["question"]))
                    }
                }
                    else{game("#question-image").remove()}two(quiz[quizquestion]["choices"]);five() 
                    }
                    function four(i){
                    if(quiz[quizquestion]["choices"][i]==quiz[quizquestion]["correct"])
                        {
                            game(".choice").eq(i).css({"background-color":"#50D943"});game("#explanation").html("<strong>Correct!</strong> "+one(quiz[quizquestion]["explanation"]));
                            score++
                            }
                            else{
                                game(".choice").eq(i).css({"background-color":"#D92623"});game("#explanation").html("<strong>Incorrect.</strong> "+one(quiz[quizquestion]["explanation"]))
                            }
                            
                            quizquestion++;game("#submitbutton").html("NEXT QUESTION &raquo;").on("click",
                            
                            function(){
                            if(quizquestion==quiz.length){six()
                            }
                            else{
                                game(this).text("Check Answer").css({color:"#222"}).off("click");three()
                            }
                        }
                    )
                }
                function five(){
                game(".choice").on("mouseover",function(){game(this).css({"background-color":"#e1e1e1"})});game(".choice").on("mouseout",
                function(){
                game(this).css({"background-color":"#fff"})});game(".choice").on("click",
                function(){
                        picked=game(this).attr("data-index");game(".choice").removeAttr("style").off("mouseout mouseover");game(this).css({"border-color":"#222","font-weight":700,"background-color":"#c1c1c1"});
                            if(submit)
                                    {submit=false;game("#submitbutton").css({color:"#000"}).on("click",
                                        function(){
                                                        game(".choice").off("click");game(this).off("click");four(picked)
                                                    }
                                        )
                                    }
                                }
                            )

                        }
       

    function six(){game("#explanation").empty();game("#question").empty();game("#choice-block").empty();game("#submitbutton").remove();

        game("#question").text("You got "+score+" out of "+quiz.length+" correct.");    
        game(document.createElement("h2")).css({"text-align":"center","font-size":"4em"}).text(Math.round(score/quiz.length*100)+"%").insertAfter("#question")}

    function seven(){   
        if(typeof quiztitle!=="undefined"&&game.type(quiztitle)==="string")
            {
            game(document.createElement("h1")).text(quiztitle).appendTo("#quiz")}
    else{
        game(document.createElement("h1")).text("Quiz").appendTo("#quiz")}if(typeof quiz!=="undefined"&&game.type(quiz)==="array")
            {
            game(document.createElement("p")).addClass("pager").attr("id","pager").text("Question 1 of "+quiz.length).appendTo("#quiz");

                game(document.createElement("h2")).addClass("question").attr("id","question").text(quiz[0]["question"]).appendTo("#quiz");if(quiz[0].hasOwnProperty("image")&&quiz[0]["image"]!="")
                {
                game(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[0]["image"]).attr("alt",one(quiz[0]["question"])).appendTo("#quiz")}
                    game(document.createElement("p")).addClass("explanation").attr("id","explanation").html("&nbsp;").appendTo("#quiz");
                        game(document.createElement("ul")).attr("id","choice-block").appendTo("#quiz");two(quiz[0]["choices"]);     
                            game(document.createElement("div")).addClass("choice-box").attr("id","submitbutton").text("Check Answer").css({"font-weight":700,color:"#222",padding:"30px 0"}).appendTo("#quiz");
                        five()
                }
            }
        seven()
    }
);




  // time start code // 

function game_timer(){
 if($('#timer').hasClass('start')){
  $('#counterMil').fadeOut(500).html(0).fadeIn(500);
  $('#counterSec').fadeOut(500).html(0).fadeIn(500);
  $('#counterMin').fadeOut(500).html(0).fadeIn(500);
  $('#timer').val("Stop Timer");
  timer = setInterval ( "increaseCounter()", 100 );
  $('#timer').removeClass('start')
 }
 else{
  if(typeof timer != "undefined"){
   clearInterval(timer);  
  }
  $('#timer').val("Start Timer");
  $('#timer').addClass('start')
 }
}
 
function increaseCounter(){
 
 var milVal ;
 var secVal ;
 milVal = parseInt($('#counterMil').html(),10) 
 secVal = parseInt($('#counterSec').html(),10)
 if(milVal != 59)
 $('#counterMil').html((milVal+1));
 else{
  if(secVal != 59){
   $('#counterSec').html((secVal+1)); 
  }
  else{
   $('#counterMil').html((parseInt($('#counterMil').html(),10)+1));
   $('#counterSec').html(0);
  }
  $('#counterMil').html(0);
 }
} 
