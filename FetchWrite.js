class FetchWrite{

    constructor(){
        this.index = 0;
        //this.result = false;
    }

      

    getContactInfo(b){
        database.ref('users/'+b).on("value",(data)=>{
            contactInfo = data.val()
        })
    }

    getNumber(){
        database.ref('users').on("value",function(data){
            phoneN = data.val()
        })
        console.log(phoneN);
    }

    updatePhone(a,b){
        var details = 'users/'+b
        database.ref(details).set({
            name: a,
            phoneNumber: b,
        })
    }

    updateContact(b,c,d,e,f,g,h){
        var details = 'users/'+b +'/contacts'
        database.ref(details).set({
            ContactName: c,
            ContactPhoneNumber:d,
            AboutContact: e,
            ContactName2: f,
            ContactPhoneNumber2:g,
            AboutContact2: h
        })
    }
    updateMessage(b,i){
        var details = 'users/'+b + '/message'
        database.ref(details).set({
            PresetMessage: i
        })
    }
    
}