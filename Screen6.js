class Screen6{
    constructor(){
        this.title = createElement('h1');
        this.header = createElement('h2');
        this.message = createInput("");
        this.finish = createButton("Finish")
        this.back = createButton("Back")

    }
    hide(){
        this.title.hide();
        this.header.hide();
        this.message.hide();
        this.finish.hide();
        this.back.hide();
        this.message.mousePressed(()=>{
            var b = screen1.phoneNo.value();
            fetchName.getContactInfo(b);
            this.message.value(contactInfo.message.PresetMessage)
        })
    }
    show(){
        this.title.show();
        this.header.show();
        this.message.show();
        this.finish.show();
        this.back.show();

    }
    view(){
        background(250, 250, 250)
        this.title.position(500,20);
        this.title.html("Change Details")
        this.title.style('color',rgb(0, 74, 124));
        this.header.position(480,90);
        this.header.html("Preset Message:")
        this.header.style('color',rgb(0, 74, 124));
        this.message.position(520,180);
        this.finish.position(650,390);
        this.finish.style('background', rgb(0, 86, 145));
        this.finish.style('color',rgb(232, 241, 245));
        this.finish.mousePressed(()=>{
            var b = screen1.phoneNo.value();
            var i = this.message.value();
            fetchName.updateMessage(b,i);
            appState = 3
        })
        this.back.position(520, 390);
        this.back.style('background', rgb(0, 86, 145));
        this.back.style('color',rgb(232, 241, 245));
        this.back.mousePressed(()=>{
            appState = 4;
        })
    }
}