var appState = 0;
var profile, phNumber
var name, database, phoneN, contactInfo
let capture

function setup() {
  
  createCanvas(325,550);
  database = firebase.database();
  screen1 = new Screen1();
  screen2 = new Screen2();
  screen3 = new Screen3();
  screen4 = new Screen4();
  screen5 = new Screen5();
  screen6 = new Screen6();
  screen7 = new Screen7();
  fetchName = new FetchWrite();

  if (!navigator.geolocation) {
    alert("this device does not support geolocation");
  } else {
    setInterval(function() {
      navigator.geolocation.getCurrentPosition(updatePosition);
    }, 0); // ask every 1000 milliseconds, or every 1 second
  }
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  
  
}

function draw() {
  background(213, 246, 240); 

  

  if(appState === 0){
    screen1.view();
    screen2.hide();
    screen3.hide();
    screen4.hide();
    screen5.hide();
    screen6.hide();
    screen7.hide();

  }else if(appState===1){
    screen2.show();
    screen2.view();
    screen1.hide();
    screen3.hide();
    screen4.hide();
    screen5.hide();
    screen6.hide();
    screen7.hide();

  }else if(appState===2){
    screen3.show();
    screen3.view();
    screen1.hide();
    screen2.hide();
    screen4.hide();
    screen5.hide();
    screen6.hide();
    screen7.hide();

  }else if(appState===3){
    screen4.show();
    screen4.view();
    screen1.hide();
    screen2.hide();
    screen3.hide();
    screen5.hide();
    screen6.hide();
    screen7.hide();

  }else if(appState===4){
    screen5.show();
    screen5.view();
    screen1.hide();
    screen2.hide();
    screen3.hide();
    screen4.hide();
    screen6.hide();
    screen7.hide();

  }else if(appState===5){
    screen6.show();
    screen6.view();
    screen1.hide();
    screen2.hide();
    screen3.hide();
    screen4.hide();
    screen5.hide();
    screen7.hide();

  }else if(appState===6){
    screen7.show();
    screen7.view();
    screen1.hide();
    screen2.hide();
    screen3.hide();
    screen4.hide();
    screen5.hide();
    screen6.hide();
    
  }else if(appState === 7){
    screen1.show();
    screen1.view();
    screen2.hide();
    screen3.hide();
    screen4.hide();
    screen5.hide();
    screen6.hide();
    screen7.hide();

  }



drawSprites();
}

function updatePosition(position) {
 // background(255);
 if(appState === 3){
  fill("black");
  textSize(15)
  text("latitude = "+nf(position.coords.latitude, 2, 7), 30, 430);
  text("longitude = "+nf(position.coords.longitude, 3, 7), 30, 450);
 }else if(appState===6){
  fill("black");
  textSize(15)
  text("latitude = "+nf(position.coords.latitude, 2, 7), 30, 175);
  text("longitude = "+nf(position.coords.longitude, 3, 7), 30, 190);
 }
}