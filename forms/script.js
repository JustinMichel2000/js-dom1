
let inputFirstname = document.getElementById("firstname");
let displayFirstname = document.getElementById("display-firstname");

inputFirstname.addEventListener("keyup", displayFirst);

function displayFirst() {
    
    let typeHTML = inputFirstname.value;
    // console.log(typeHTML);

    displayFirstname.innerHTML = inputFirstname.value;

}



let inputAge = document.getElementById("age");
let displayHardTruth = document.getElementById("a-hard-truth");

inputAge.addEventListener("keyup", displayTruth);

function displayTruth() {
    
let typeAge = inputAge.value;
// console.log(typeAge);


if (typeAge >= 18){


    displayHardTruth.style.visibility = "visible"


} else {

    displayHardTruth.style.visibility = "hidden"
}

}



let inputPassword = document.getElementById("pwd");
let inputPasswordConfirm = document.getElementById("pwd-confirm");


inputPassword.addEventListener("keyup", displayPassword );
inputPasswordConfirm.addEventListener("keyup", displayPasswordConfirm);

function displayPassword () {

    let typePassword = inputPassword.value;
    console.log(typePassword);
    let confirmPassword = inputPasswordConfirm.value;

   
   if (typePassword.length > 6 ) {

 
   inputPassword.innerHTML = inputPassword.value;
   inputPassword.style.backgroundColor = "white";

    
} else{

   inputPassword.style.backgroundColor = "red";

}
   
  if (confirmPassword.length > 0 && confirmPassword != typePassword) {

    inputPasswordConfirm.style.backgroundColor = "red";

    
  } else {

    inputPasswordConfirm.style.backgroundColor = "white";
    
  }
}

function displayPasswordConfirm() {

    let typePassword = inputPassword.value;
    let confirmPassword = inputPasswordConfirm.value;
    console.log(confirmPassword);


    if (confirmPassword.length > 6 && confirmPassword == typePassword ) {

 
        inputPasswordConfirm.innerHTML = inputPasswordConfirm.value;
        inputPasswordConfirm.style.backgroundColor = "white";
         
     } else{
     
        inputPasswordConfirm.style.backgroundColor = "red";
     
     }
    
}


let select = document.getElementById("toggle-darkmode");

select.addEventListener("change" , displayMode);


function displayMode () {

    let typeMode= select.value;
    


    if(typeMode == "dark"){

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}else{

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}
    
}









