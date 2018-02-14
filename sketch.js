var song;
var button;
var volumeSider, rateSlider, panSlider;

function preload(){
    song = loadSound("sound/TH90RemiX.mp3");
}

function setup(){
    createCanvas(600,400);
    background(0);
    
    button = createButton("Make Music");
    button.mousePressed(togglePlaying);
    button.position(20,150);
    
    volumeSider = createSlider(0, 2, 1, 0.05);
    volumeSider.position(20, 180);
    
    rateSlider = createSlider(0.5, 2, 1, 0.05);
    rateSlider.position(20, 210);
    
    panSlider = createSlider(-1, 1, 0, 0.05);
    panSlider.position(20, 240);
    
}

function draw(){
    song.setVolume(volumeSider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
}


function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Make Music");
    }
    else{
        song.play();
        button.html("Stop Mixing");
    }
}