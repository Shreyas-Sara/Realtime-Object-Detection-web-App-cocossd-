img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('tv.jpg');
}
    
function setup() {
    canvas = createCanvas(360, 360);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modalloaded);
    document.getElementById("status").innerHTML = "Object Detecting";
}

function modalloaded() {
    console.log("Modal Loaded Successfull");
    status = true;
    detector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0, 0, 360, 360);

    if(status != ""){
       
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Object Detected";
           
            percentage = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function back(){
    window.location = "index.html";
}