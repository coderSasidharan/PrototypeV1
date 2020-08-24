class Screen2{
    constructor(){
        this.stage = createElement('h1');
        this.header = createElement('h2');
        this.contact1 = createElement('h3');
        this.cName1 = createInput();
        this.cPNumber1 = createInput();
        this.aContact1 = createInput();
        this.contact2 = createElement('h3');
        this.cName2 = createInput();
        this.cPNumber2 = createInput();
        this.aContact2 = createInput();
        this.next = createButton("Next");
        this.back = createButton("Back");
        this.phoneNo = createElement('h4');
        this.name = createElement('h4');
        this.about = createElement('h4');
        this.phoneNo2 = createElement('h4');
        this.name2 = createElement('h4');
        this.about2 = createElement('h4');

    }

    hide(){
        this.stage.hide();
        this.header.hide();
        this.next.hide();
        this.contact1.hide();
        this.cName1.hide();
        this.cPNumber1.hide();
        this.aContact1.hide();
        this.contact2.hide();
        this.cName2.hide();
        this.cPNumber2.hide();
        this.aContact2.hide();
        this.back.hide();
        this.phoneNo.hide();
        this.name.hide();
        this.about.hide();
        this.phoneNo2.hide();
        this.name2.hide();
        this.about2.hide();
       
    }

    show(){
        this.stage.show();
        this.header.show();
        this.next.show();
        this.contact1.show();
        this.cName1.show();
        this.cPNumber1.show();
        this.aContact1.show();
        this.contact2.show();
        this.cName2.show();
        this.cPNumber2.show();
        this.aContact2.show();
        this.back.show();
        this.phoneNo.show();
        this.name.show();
        this.about.show();
        this.phoneNo2.show();
        this.name2.show();
        this.about2.show();
        
    }

    view(){

        background(27, 38, 44);

        this.phoneNo.position(480,140);
        this.phoneNo.html("Phone No.")
        this.phoneNo.style('color', rgb(187, 225, 250));
        this.name.position(480,180);
        this.name.html("Name")
        this.name.style('color', rgb(187, 225, 250));
        this.about.position(480,220);
        this.about.html("About")
        this.about.style('color', rgb(187, 225, 250));
        this.phoneNo2.position(480,310);
        this.phoneNo2.html("Phone No.")
        this.phoneNo2.style('color', rgb(187, 225, 250));
        this.name2.position(480,350);
        this.name2.html("Name")
        this.name2.style('color', rgb(187, 225, 250));
        this.about2.position(480,390);
        this.about2.html("About")
        this.about2.style('color', rgb(187, 225, 250));

        this.stage.position(500,10);
        this.stage.html("Setup: Stage 1/2")
        this.stage.style('color', rgb(187, 225, 250));
        this.header.position(480,60);
        this.header.html("Emergency Contacts:")
        this.header.style('color', rgb(187, 225, 250));
        this.contact1.position(480,100);
        this.contact1.html("Contact 1:");
        this.contact1.style('color', rgb(187, 225, 250));
        this.cName1.position(570,200);
        this.cPNumber1.position(570,160);
        this.aContact1.position(570,240);
        this.contact2.position(480,270);
        this.contact2.html("Contact 2:");
        this.contact2.style('color', rgb(187, 225, 250));
        this.cName2.position(570,370);
        this.cPNumber2.position(570,330);
        this.aContact2.position(570,410);
        this.next.position(655,480);
        this.next.style('background',rgb(50, 130, 184));
        this.next.style('color',rgb(15, 76, 117))
        this.next.mousePressed(()=>{

            var b = screen1.phoneNo.value(); 
            var c = this.cName1.value();
            var d = this.cPNumber1.value();
            var e = this.aContact1.value();
            var f = this.cName2.value();
            var g = this.cPNumber2.value();
            var h = this.aContact2.value();

            fetchName.updateContact(b,c,d,e,f,g,h);

            appState = 2

        })
        this.back.position(520, 480);
        this.back.style('background',rgb(50, 130, 184));
        this.back.style('color',rgb(15, 76, 117))
        this.back.mousePressed(()=>{
            appState = 7;
        })
    }


}