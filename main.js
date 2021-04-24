//const seq = require("./seq.js");

let play = false;

let bpm = 120;
let beatTime = 60/bpm;
let stepTime = beatTime / 2;
let stepCounter = -1;
let stepChange = 0;
let frames = 0;
let envLength = 0.2 // percentage of note length, 1 = full step in length.
let stepArr = [16];

for(let i = 0; i < 16; i++){
    stepArr[i] = false;
    console.log(stepArr[i]);
}


function playToggle(){
    if (play){
      play = false;
      stepCounter = 0;
    }
    else{
       
       Tone.start();
        play = true;
       

    }
}

let kickEnv = new Tone.AmplitudeEnvelope({
    attack: 0.1,
    decay: 0,
    sustain: 0,
    release: 0.1
}).toDestination()
kickTone = new Tone.Oscillator(262, "sine2").connect(kickEnv).start() // prev set to 30.87*2 for freq






var button = document.createElement("button");
button.innerHTML = 'Play / Stop';
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click", playToggle);



const seqkit = document.querySelector('.row1');
seqkit.addEventListener('click', stepToggle);


//button handling

let stepButtonHandler = document.querySelector('.row1');
function stepToggle(event) {
  if (event.target.classList.contains('stepbutton')) {
    event.preventDefault();
    let stepNum = event.target.id;
    console.log(event.target.id);
    if (stepArr[stepNum] === false){
        stepArr[stepNum] = true;
        console.log("activated step number " + stepNum);
        event.target.style.color = 'DeepPink';
    }
    else if (stepArr[stepNum] === true){
        stepArr[stepNum] = false;
        console.log("deactivated step number " + stepNum);
        event.target.style.color = 'Black';
    }
  }
}



Seq = {
    bpm: bpm,
    //row: document.querySelector('.row1'),
    playStep: function(num){
        if (stepArr[num]){
            kickEnv.triggerAttackRelease(stepTime * envLength);
            console.log("playStep for step number " + num);
        }
        
    }
}






function clock(){
    
    if(play){
        
        frames++;
       
        let seconds = frames / 60;
        let clockStepTime = seconds / stepTime;
        
        stepChange = stepCounter;
        stepCounter = Math.floor(clockStepTime);

        if(stepCounter != stepChange){
            Seq.playStep((stepCounter + 1) % 16)
            console.log(stepCounter);
        }
    }
   
    requestAnimationFrame(clock);

}






clock();