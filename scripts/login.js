function login(){
//get values from the form
    let inputEmail = $("#txtEmail").val();
    let inputPass = $("#txtPassword").val();
//use a flag
    let flag=false;
//get users from local storage
    let userList = readUsers();
//travel user list
    for(let i=0;i<userList.length;i++){
        let user = userList[i];
//compare email and password with saved information
        if(user.email== inputEmail && user.password==inputPass){
            flag=true;
            window.location = "user.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
    }
}

function init(){
    $("#btnLogin").click(login);        
}

window.onload=init;