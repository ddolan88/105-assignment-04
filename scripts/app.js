//object constructor
function User(uName,email,age,password,payment,color){
   this.uName=uName;
    this.email=email;
    this.age=age;
    this.password=password;
    this.payment=payment;
    this.color=color;
}

function isvalid(user){
    //return false if the user is not valid
    //return true if the user is valid
    //add password for email, password
    let valid=true;
    if(user.uName.length==0){
        valid=false;
        $("#txtUserName").addClass("input-error");
    }
    if(user.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
    }
    if(user.age.length==0){
        valid=false;
        $("#txtAge").addClass("input-error");
    }
    if(user.password.length<6){
        valid=false;
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}

function validatePass(){
    // validate the value of password input
    let txtPass = $("#txtPassword")

    let password = txtPass.val();
    //is the password less than 6 characters
    if(password.length<6){
        txtPass.css("background","#ff9898");//jquery changes the css
        displayError("the password is to short");
    }
    else{
        txtPass.css("background","#64cc66");
        hideError();
    }
}

function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}

function hideError(msg){
    $("#alertError").addClass("hide")
}

//register function
function Register(){
    let uName= $("#txtUserName").val();
    let userEmail=$("#txtEmail").val();
    let userAge=$("#txtAge").val();
    let userPass=$("#txtPassword").val();
    let userPay=$("#txtPayment").val();
    let userColor=$("#txtColor").val();//fix this (fixed, was missing $)

    console.log(uName,userEmail,userAge,userPass,userPay,userColor)

    //creating the object
    let newUser = new User(uName,userEmail,userAge,userPass,userPay,userColor);
    
    if(isvalid(newUser)==true){
        // console.log(newUser)
        saveUser(newUser);
        hideError();
        //clear input fields
        $('input').val("");
    }
    else{
        displayError("Please complete all fields")
    }
}
function init(){
    console.log("Register")
    //hook events
    $("#btn-register").click(Register);
    $("#txtPassword").keypress(function(e){
        if(e.key=="Enter"){
            Register();
        }
    });
}
$("#txtPassword").keyup(validatePass);
window.onload=init;