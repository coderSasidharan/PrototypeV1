class Screen5{
    constructor(){

        this.title = createElement('h1');
        this.header1 = createElement('h2');
        this.changeName1 = createInput("");
        this.changePhone1 = createInput("");
        this.changeAbout1 = createInput("");
        this.header2 = createElement('h2');
        this.changeName2 = createInput("");
        this.changePhone2 = createInput("");
        this.changeAbout2 = createInput("");
        this.next = createButton("Next");
        this.back = createButton("Back");

    }

    hide(){
        this.title.hide();
        this.header1.hide();
        this.changeName1.hide();
        this.changePhone1.hide();
        this.changeAbout1.hide();
        this.header2.hide();
        this.changeName2.hide();
        this.changePhone2.hide();
        this.changeAbout2.hide();
        this.next.hide();
        this.back.hide();
        this.changePhone1.mousePressed(()=>{
        var b = screen1.phoneNo.value();
        fetchName.getContactInfo(b);

        this.changeName1.value(contactInfo.contacts.ContactName)
        this.changePhone1.value(contactInfo.contacts.ContactPhoneNumber)
        this.changeAbout1.value(contactInfo.contacts.AboutContact)
        this.changeName2.value(contactInfo.contacts.ContactName2)
        this.changePhone2.value(contactInfo.contacts.ContactPhoneNumber2)
        this.changeAbout2.value(contactInfo.contacts.AboutContact2)
        
        })
    }

    show(){
       
        this.title.show();
        this.header1.show();
        this.changeName1.show();
        this.changePhone1.show();
        this.changeAbout1.show();
        this.header2.show();
        this.changeName2.show();
        this.changePhone2.show();
        this.changeAbout2.show();
        this.next.show();
        this.back.show();

    }

    view(){
        background(33, 33, 33)
       
        this.title.position(520,5);
        this.title.html("Change Details");
        this.title.style('color',rgb(20, 255, 236));
        this.header1.position(480,80);
        this.header1.html("Contact 1:");
        this.header1.style('color',rgb(20, 255, 236));
        this.changeName1.position(520,200);
        this.changePhone1.position(520,160);
        this.changeAbout1.position(520,240);
        this.header2.position(480,280);
        this.header2.html("Contact 2:");
        this.header2.style('color',rgb(20, 255, 236));
        this.changeName2.position(520,380);
        this.changePhone2.position(520,340);
        this.changeAbout2.position(520,420);
        this.next.position(655,480);
        this.next.style('background',rgb(13, 115, 119))
        this.next.style('color', rgb(50, 50, 50))
        this.next.mousePressed(()=>{

            var b = screen1.phoneNo.value(); 
            var c = this.changeName1.value();
            var d = this.changePhone1.value();
            var e = this.changeAbout1.value();
            var f = this.changeName2.value();
            var g = this.changePhone2.value();
            var h = this.changeAbout2.value();

            fetchName.updateContact(b,c,d,e,f,g,h);

            appState = 5

        })
        this.back.position(520, 480);
        this.back.style('background',rgb(13, 115, 119))
        this.back.style('color', rgb(50, 50, 50))
        this.back.mousePressed(()=>{
            appState = 3;
        })
    }
}