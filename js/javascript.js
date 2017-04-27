correctAnswers=[0,1,2,0,1,2,0,1,2,0];
var AnsweredCorrectly=0;
function start(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("mobile").value;

	localStorage.setItem("name",name);
	localStorage.setItem("mobile",JSON.stringify(mobile));
	localStorage.setItem("email",email);
	
document.getElementById('quizstart').style.display="none";
document.getElementById('question0').style.display="block";

}

function toggle(a,b){
var yourAnswer;
if(document.getElementsByName('ans'+a)[0].checked == true){
	yourAnswer = document.getElementsByName('ans'+a)[0].value;
}
else if(document.getElementsByName('ans'+a)[1].checked == true){
	yourAnswer = document.getElementsByName('ans'+a)[1].value;
}
else if(document.getElementsByName('ans'+a)[2].checked == true){
	yourAnswer = document.getElementsByName('ans'+a)[2].value;
}
else{
	yourAnswer = "unanswered";
}

localStorage.setItem("playerAnswer"+a, yourAnswer)
AnsweredCorrectly+=(document.getElementsByName('ans'+a)[correctAnswers[a]].checked?1:0);
document.getElementById('question'+a).style.display="none";
document.getElementById('question'+b).style.display="block";
}

function next(a,b){
var answer = document.getElementById("q"+a).value;
if(answer == ""){
	answer = "unanswered";
}
localStorage.setItem("playerAnswer"+a, answer)
var correct = localStorage.getItem("answer"+a);
if(answer.toUpperCase() === correct.toUpperCase()){
	AnsweredCorrectly+= 1;
};
document.getElementById('question'+a).style.display="none";
document.getElementById('question'+b).style.display="block";
}

function end(a){
var answer = document.getElementById("q"+a).value;
if(answer == ""){
	answer = "unanswered";
}
localStorage.setItem("playerAnswer"+a, answer)
var correct = localStorage.getItem("answer"+a);
if(answer.toUpperCase() === correct.toUpperCase()){
	AnsweredCorrectly+= 1;
};

var text = "";
	var text1 = "";
	var i;
	for (i = 0; i < 20; i++) { 
		text += "<b>Question "+(i+1)+ ":</b> ";
		if(localStorage.getItem("playerAnswer"+i).toUpperCase() == localStorage.getItem("answer"+i).toUpperCase()){
			text += "<span class=ya>";
			text += localStorage.getItem("playerAnswer"+i).toUpperCase();
			text += "</span>" + "<br>" + "<hr>"
		}
		else{
			text += "<span class=no>";
			text += localStorage.getItem("playerAnswer"+i).toUpperCase();
			text += "</span>" + "<br>" + "<hr>"
		}
	}
	for (i = 0; i < 20; i++) { 
		text1 += localStorage.getItem("answer"+i).toUpperCase() + "<br>" + "<hr>";
	}


document.getElementById("yourAns").innerHTML = text;
document.getElementById("rightAns").innerHTML = text1;
document.getElementById('question'+a).style.display="none";
document.getElementById('summary').style.display="block";
document.getElementById('result').innerHTML=AnsweredCorrectly;
document.getElementById('percent').innerHTML=((AnsweredCorrectly/20)*100);
}

function review(){
document.getElementById('question0').style.display="block";
document.getElementById('summary').style.display="none";
document.getElementById('question19').style.display="none";
AnsweredCorrectly=0;
};


window.onload = function() {
 localStorage.setItem("answer0", "Emirates Stadium");
 localStorage.setItem("answer1", "Stamford Bridge");
 localStorage.setItem("answer2", "Old Trafford");
 localStorage.setItem("answer3", "The Stadium of Light");
 localStorage.setItem("answer4", "Turf Moor");
 localStorage.setItem("answer5", "Dean Court");
 localStorage.setItem("answer6", "KCOM Stadium");
 localStorage.setItem("answer7", "Selhurst Park");
 localStorage.setItem("answer8", "St Mary's Stadium");
 localStorage.setItem("answer9", "Liberty Stadium");
 localStorage.setItem("answer10", "Antonio Conte");
 localStorage.setItem("answer11", "Ronald Koeman");
 localStorage.setItem("answer12", "Jose Mourinho");
 localStorage.setItem("answer13", "Slaven Bilic");
 localStorage.setItem("answer14", "Pep Guardiola");
 localStorage.setItem("answer15", "Jurgen Klopp");
 localStorage.setItem("answer16", "Tony Pulis");
 localStorage.setItem("answer17", "Walter Mazzarri");
 localStorage.setItem("answer18", "David Moyes");
 localStorage.setItem("answer19", "Marco Silva");
}

function printCert1(){
document.getElementById('summary').style.display="none";
document.getElementById('printDiv').style.display="block";
document.getElementById('printName').innerHTML=localStorage.getItem("name");
document.getElementById('printPercent').innerHTML=((AnsweredCorrectly/20)*100);
window.print();
};
