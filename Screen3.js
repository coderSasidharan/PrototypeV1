class Screen3{
    constructor(){
        this.stage2 = createElement('h1');
        this.header = createElement('h2');
        this.message = createInput("Help");
        this.finish = createButton("Finish")
        this.back = createButton("Back");

    }
    hide(){
        this.stage2.hide();
        this.header.hide();
        this.message.hide();
        this.finish.hide();
        this.back.hide();

    }
    show(){
        this.stage2.show();
        this.header.show();
        this.message.show();
        this.finish.show();
        this.back.show();

    }
    view(){

        background(7, 26, 82);

        this.stage2.position(500,20);
        this.stage2.html("Setup: Stage 2/2")
        this.stage2.style('color', rgb(167, 255, 131));
        this.header.position(480,90);
        this.header.html("Preset Message:")
        this.header.style('color', rgb(167, 255, 131));
        this.message.position(520,180);
        this.message.style('height','150px')
        this.finish.position(650,390);
        this.finish.style('background',rgb(23, 185, 120));
        this.finish.style('color', rgb(8, 105, 114));
        this.finish.mousePressed(()=>{
            var b = screen1.phoneNo.value();
            var i = this.message.value();
            fetchName.updateMessage(b,i);
            appState = 3
        })
        this.back.position(520, 390);
        this.back.style('background',rgb(23, 185, 120));
        this.back.style('color', rgb(8, 105, 114));
        this.back.mousePressed(()=>{
            appState = 1;
        })
    }
}