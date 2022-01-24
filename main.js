function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 40, 40, 560 ,400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 50, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 430, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 430, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(75, 25, 500, 50);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(570, 70, 50, 350);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(75, 405, 500, 50);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(30, 70, 50, 350);
}

function take_snapshot(){
    save('student_name.png');
}
