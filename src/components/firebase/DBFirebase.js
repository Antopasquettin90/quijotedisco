
var DBFirebase = {};

DBFirebase.GetConfig = async () => {
    let response = await fetch("../firebase.config.json");
    let hardcodeo = await response.json();

    return hardcodeo;
}
DBFirebase.SetRow = async firebaseObject => { 
    let response = await firebase.database().ref(firebaseObject.url).set(firebaseObject.object); 
    return response;
}
DBFirebase.PushRow = async firebaseObject => { 
    let response = await firebase.database().ref(firebaseObject.url).push(firebaseObject.object); 

    return response;
}

DBFirebase.UpdateRow = async firebaseObject => { firebase.database().ref(firebaseObject.url).update(firebaseObject.object); }

DBFirebase.DeleteRow = async firebaseObject => { firebase.database().ref(firebaseObject.url).remove(); }

DBFirebase.Listener = async firebaseObject   => {
    var database = firebase.database().ref(firebaseObject.url);
    database.on('value', data => {
        //Hacer algo cuando llega un cambio
    });

    firebaseObject.object = database;
    DBFirebase.Databases.push(firebaseObject);
}
DBFirebase.Disconnect = async firebaseObject =>{
    var database = DBFirebase.Databases.find(db => db.url ===  firebaseObject.url);
    if(database){
        database.object.off();
        DBFirebase.Databases = DBFirebase.Databases.filter(db => db.url !==  firebaseObject.url);
    }
}
DBFirebase.GetAll = async firebaseObject => {
    let result = await firebase.database().ref(firebaseObject.url).orderByKey().once("value");

    return result.val();
}

DBFirebase.Init = async () => {
    var config = await DBFirebase.GetConfig();
    var app;
    try {
        //app = firebase.app();
        app = firebase.initializeApp(config);
    }
    catch (e) { console.log(e); }    
    return app;
}
DBFirebase.Databases = [];
