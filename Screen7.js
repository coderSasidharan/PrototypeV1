

class Screen7{
    constructor(){
        this.title = createElement('h1');
        this.sent = createElement('h2');
        this.message = createElement('h3');
        this.camera = createElement('h3');
        this.emergencyRelieved = createButton("Home");
        this.sendVideo = createButton('Send Video')

    }
    hide(){
        this.title.hide();
        this.sent.hide();
        this.message.hide();
        this.camera.hide();
        this.emergencyRelieved.hide();
        this.sendVideo.hide();
    }

    show(){
        this.title.show();
        this.sent.show();
        this.message.show();
        this.camera.show();
        this.emergencyRelieved.show();
        this.sendVideo.show();
    }

    view(){
        background(8, 217, 214)

        var b = screen1.phoneNo.value();
        fetchName.getContactInfo(b);

        this.title.position(550,5);
        this.title.html("HelpMe");
        this.title.style('color',rgb(234, 234, 234));
        this.sent.position(480,70);
        this.sent.html("Message Sent:");
        this.sent.style('color',rgb(234, 234, 234));
        this.message.position(480,100);
        this.message.html(contactInfo.message.PresetMessage);
        this.message.style('color',rgb(234, 234, 234));
        this.camera.position(480,180);
        this.camera.html("Camera feed turned on:");
        this.camera.style('color',rgb(234, 234, 234));
        this.emergencyRelieved.position(580,480);
        this.emergencyRelieved.style('background',rgb(255, 0, 64));
        this.emergencyRelieved.style('color',rgb(37, 42, 52));
        this.emergencyRelieved.mousePressed(()=>{
            appState = 3;
            
        })
        this.sendVideo.position(565,400);
        this.sendVideo.style('background',rgb(255, 0, 64));
        this.sendVideo.style('color',rgb(37, 42, 52));
         image(capture, 60, 240, 200, 150);

    }

}