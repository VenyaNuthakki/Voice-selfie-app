var speech_recognition=window.webkitSpeechRecognition
var recognition=new speech_recognition();
function start(){
    document.getElementById("textbox").value="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").value=content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speechData=document.getElementById("textbox").value;
    var utterance=new SpeechSynthesisUtterance(speechData);
    synth.speak(utterance);
    Webcam.attach(camera);
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
camera=document.getElementById("camera");