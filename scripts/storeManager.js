const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers(); //getting data from local storage
    oldData.push(user);
    let val = JSON.stringify(oldData);// creating a string
    // console.log(user);
    // console.log(val);
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    //Get values from local storage
    let data = localStorage.getItem(STORE_KEY);
    console.log(data); //  <--JSON
    if(!data){ // "!" no data
        return []; // creating an array
    }
    else{ // there is data
        let list = JSON.parse(data); //parsing JSON to object
        console.log(list);
        return list;
    }    
}