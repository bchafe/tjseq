
const kickEnv = new Tone.AmplitudeEnvelope({
    attack: 0.1,
    decay: 0.2,
    sustain: 0.1,
    release: 0.8
}).toDestination()
kickTone = new Tone.Oscillator(30.87, "sine").connect(kickEnv).start()



//kick.connect(Tone.Master);

const drumkit = document.querySelector('.drumkit');

function playDrum(event){
    if(event.target.classList.contains('stepbutton')) {
        event.preventDefault();
        let laneIndex = event.target.dataset.sound; // variable will have name of pad clicked (data-sound)
        kick(); //hardcoded for now
    }
}

function kick(){
  /*  kickTone.start();
    setTimeout(function(){
        kickTone.stop()
    }, 500);  */
    kickEnv.triggerAttackRelease(0.5);
}


drumkit.addEventListener('click', playDrum);

