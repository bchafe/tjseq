

kickTone = new Tone.Oscillator(30.87, "sine").toDestination()



//kick.connect(Tone.Master);

const drumkit = document.querySelector('.drumkit');

function playDrum(event){
    if(event.target.classList.contains('pad')) {
        event.preventDefault();
        let laneIndex = event.target.dataset.sound; // variable will have name of pad clicked (data-sound)
        kick(); //hardcoded for now
    }
}

function kick(){
    kickTone.start();
    setTimeout(function(){
        kickTone.stop()
    }, 500);
}


drumkit.addEventListener('click', playDrum);

