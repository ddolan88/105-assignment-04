//this is an array
function displayUsers(usersArray){
    let row;
    //travel the aray (for)
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        // create and display the row = `<>${}<>` (inner html)
        row=`
        <tr>
            <td>${user.uName}</td> 
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.payment}</td>
            <td style="background-color:${user.color}">${user.color}</td>
        </tr>`;
        //append the row to the table 
        $("#users").append(row);  
    }
}

function init(){
    console.log("Listing users");
    //getting array from the local storage
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;




// <td>$("input[type=“radio”]:checked").val()</td>