const bpm = 120;
const beat = 60 / bpm
const step = beat / 2 
const envlength = 1 // percentage of note length, 1 = full step in length.

Seq = {
    bpm: bpm,
    row: document.querySelector('.row1'),
    playSound: function(){
        kickEnv.triggerAttackRelease(step * envlength)
    }
}



const kickEnv = new Tone.AmplitudeEnvelope({
    attack: 0.1,
    decay: 0,
    sustain: 0,
    release: 0.1
}).toDestination()
kickTone = new Tone.Oscillator(30.87*2, "sine2").connect(kickEnv).start()


const drumkit = document.querySelector('.drumkit');

function playDrum(event){
    if(event.target.classList.contains('stepbutton')) {
        event.preventDefault();
        let seqIndex = event.target.id; // variable will have name of stepbutton clicked (data-num)
        Seq.playSound()
    }
}

/* function kick(){ // move this into seq later maybe
  /*  kickTone.start();
    setTimeout(function(){
        kickTone.stop()
    }, 500);  
    kickEnv.triggerAttackRelease(0.1);
} */


Seq.row.addEventListener('click', playDrum);

