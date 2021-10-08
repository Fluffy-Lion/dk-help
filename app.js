
const clap = new audio('sounds/clap.wav');
const hihat = new audio('sounds/hihat.wav');
const kick = new audio('sounds/kick.wav');
const openHat = new audio('sounds/openhat.wav');
const boom = new audio('sounds/boom.wav');
const ride = new audio('sounds/ride.wav');
const snare = new audio('sounds/snare.wav');
const tom = new audio('sounds/tom.wav');
const tink = new audio('sounds/tink.wav');

// Play drum by keyboard press



clapAKey.addEventListener('keypress', () => {
    if (event.code =="KeyA") {
        clap.load(), clap.play
    } else if (event.code =="KeyS") {
        hihat.load(), hihat.play
    } else if (event.code =="KeyD") {
        kick.load(), kick.play
    } else if (event.code =="KeyF") {
        openHat.load(), openHat.play
    } else if (event.code =="KeyG") {
        boom.load(), boom.play
    } else if (event.code =="KeyH") {
        ride.load(), ride.play
    } else if (event.code =="KeyJ") {
        snare.load(), snare.play
    } else if (event.code =="KeyK") {
        tom.load(),tom.play
    } else if (event.code =="KeyL"){
        tink.load(), tink.play
    } else {
        return false
})
// Play music by mouse click
const clapA = document.getElementById("clapA");
    clapA.addEventListener('mouseover', ()=>{
        clap.play();
    })


const hihatS = document.getElementById('hiHatS');
    hihatS.addEventListener('mouseover', ()=>{
        hihat.play();
    })


const kickD = document.getElementById("kickD");
    kickD.addEventListener('mouseover', ()=>{
        kick.play();
    })


const openHat = document.getElementById("openHatF");
    openHatF.addEventListener('mouseover', ()=>{
        openHat.play();
    })


const boomG = document.getElementById("boomG");
    boomG.addEventListener('mouseover', ()=>{
        boom.play();
    })


const rideH = document.getElementById("rideH");
    rideH.addEventListener('mouseover', ()=>{
        ride.play();
    })


const snareJ = document.getElementById("snareJ");
    snareJ.addEventListener('mouseover', ()=>{
        snare.play();
    })


const tomK = document.getElementById("tomK");
    tomK.addEventListener('mouseover' ()=>{
        tom.play();
    })


const tinkL = document.getElementById("tinkL");
    tinkL.addEventListener('mouseover', ()=>{
        tink.play();
    })