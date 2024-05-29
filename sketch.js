/*
Jack Ross
Warrior's Sprint
Richards
ICD-201
*/

let spriteX = 50;
let spriteY = 50;
let spriteSpeed = 6;
let yVelocity = 0;
let grounded = false;
let movingX = false;
let sprintMeter = 100;
let meterWidth = 50;
function preload() {

}
    
function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
}
function draw() {
    print(sprintMeter);
    background(0);
    fill(255);
    strokeWeight(2);
    rect(spriteX, spriteY, 50, 50);
    fill(255,165,0);
    strokeWeight(0);
    rect(spriteX, spriteY + 60, meterWidth, 4);
    if(keyIsDown(37) === true) {
        spriteX -= spriteSpeed;
        movingX = true;
    } else if(keyIsDown(39) === true) {
        spriteX += spriteSpeed;
        movingX = true;
    } else {
        movingX = false;
    }
    yVelocity = yVelocity + 2;
    spriteY = spriteY + yVelocity;
    if(spriteY >= 500) {
        spriteY = 500;
        grounded = true;
    } else {
        grounded = false;
    }
    if(keyCode === (32) && grounded == true) {
        yVelocity = -25;
        keyCode = 0;
    }
    sprintMeter = constrain(sprintMeter, 0, 100);
    meterWidth = constrain(meterWidth, 0, 50);
    if(keyIsDown(83) === true && movingX === true && sprintMeter > 0) {
        sprint();
    } else {
        spriteSpeed = 6;
        sprintMeter = sprintMeter + 0.5;
        meterWidth = meterWidth + 0.25;
    }
    if(sprintMeter > 100) {
        sprintMeter = 100;
    }
}
function sprint() {
    meterWidth = map(sprintMeter, 0, 100, 0, 50);
    sprintMeter = sprintMeter - 1;
    meterWidth = meterWidth - 0.5;
    if(sprintMeter <= 0) {
        sprintMeter = 0;
    }
    if(sprintMeter > 0) {
    spriteSpeed = spriteSpeed + 0.5;
    }
    if(spriteSpeed >= 15) {
        spriteSpeed = 15;
    }
    

}