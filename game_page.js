player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send()
{
getword=document.getElementById("word").value;
c1=getword.charAt(1);
lengthdivide=Math.floor(getword.length/2);
c2=getword.charAt(lengthdivide);
lengthminus=getword.length-1;
c3=getword.charAt(lengthminus);
removec1=getword.replace(c1,"_");
removec2=removec1.replace(c2,"_");
removec3=removec2.replace(c3,"_");

question="<h4 id='word_display'>Q "+removec3+"</h4>";
inputbox="<br>answer: <input type='text'id='input_check_box'>";
checkbutton="<br><br><button class='btn btn-info'onclick='check()'>CHECK</button>";
row=question+inputbox+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";

function check()
{
    getanswer=document.getElementById("input_check_box").value;
    if(getanswer==getword)
    {
if(answerturn=="player1")
{
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;
}
    }
if(questionturn=="player1")
{
questionturn="player2";
document.getElementById("player_question").innerHTML="question turn:"+player2_name;
}
else{
questionturn="player1";
document.getElementById("player_question").innerHTML="question turn:"+player1_name;
}

if(answerturn=="player1")
{
answerturn="player2";
document.getElementById("player_answer").innerHTML="answer turn:"+player2_name;
}
else{
answerturn="player1";
document.getElementById("player_answer").innerHTML="answer turn:"+player1_name;
}document.getElementById("output").innerHTML="";
}