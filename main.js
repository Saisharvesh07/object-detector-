img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('images.jpg');

}

function draw() {
    image(video, 0, 0, 380, 380);

    image(video, 0, 0, 480, 380);
if(status != "");
{
for(i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status : Objects Detected";
document.getElementById("number_of_objects").innerHTML ="Number of objects detected are :"+objects.length;


fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[1].label + " "+percent + "%",objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
}
    }
}  

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
