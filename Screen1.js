class Screen1{
    constructor(){
        
        this.name = createInput();
        this.phoneNo = createInput();
        this.done = createButton("Next");
        this.title = createElement('h1');
        this.header1 = createElement('h4');
        this.header2 = createElement('h4');

    }

    hide(){
        this.name.hide();
        this.phoneNo.hide();
        this.done.hide();
        this.title.hide();
        this.header1.hide();
        this.header2.hide();

    }

    show(){
        this.name.show();
        this.phoneNo.show();
        this.done.show();
        this.title.show();
        this.header1.show();
        this.header2.show();

    }

    view(){
        
        this.header1.position(520,250);
        this.header1.html("Your Name");
        this.header1.style('color', rgb(64, 81, 78) );
        this.header2.position(520,160);
        this.header2.html("Your Phone Number")
        this.header2.style('color', rgb(64, 81, 78) );
        this.title.position(550,30);
        this.title.html("HelpMe")
        this.title.style('color', rgb(64, 81, 78) );
        this.name.position(520,290);
        this.phoneNo.position(520,200);
        this.done.position(585,420)
        this.done.style('background', rgb(17, 153, 158));
        this.done.style('color', rgb(143, 240, 227))
        this.done.mousePressed(()=>{
          
            var a = this.name.value();
            var b = this.phoneNo.value(); 
    
            if(appState===0){
                database.ref('users').on("value",function(data){
                    if(data.hasChild(b)){
                        appState = 3;
                    }else{
                        fetchName.updatePhone(a,b);
                        appState = 1;
                    }                
                })
            }else{
                fetchName.updatePhone(a,b);
                appState = 1;
            }

        })
    }

}