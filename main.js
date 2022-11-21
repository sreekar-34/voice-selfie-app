var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}


recognition.onresult=function(event){
   console.log(event);
   var Content=event.results[0][0].transcript;
   document.getElementById("textbox").innerHTML= Content;  
   speak();
   Webcam.attach(camera);
}


function speak(){
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
}


Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});


camera = document.getElementById("camera");

