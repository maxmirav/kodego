let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm-password");
let signup = document.querySelector("#sign-up");

signup.addEventListener("input", (event2) => {
    let targetVar = event2.target.id;  //to target individual input id's pwede ilagay dito yung individual validation functions din i just didn't do it bec tinatamad
    console.log("this is " + targetVar);
})


signup.addEventListener("submit", (event) => {
    //prevent the form from submitting
    event.preventDefault();
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regE = email.value.trim();
    console.log(regE);
    if(username.value === ""){
        alert("Please input a username");
    }
    else if(username.value.length <= 8 || username.value.length >= 12){
        document.getElementById("username-display").innerText = "Make sure username is from 8 - 16 chars only.";
    }

    if(email.value === ""){
        alert("Email must be filled out");
    }
    else{
        if(emailRegex.test(email.value)){
            console.log("correct format! yey");
        }
        else{
            console.log("put a correct email ya dolt");
        }
    }

    if(password.value === ""){
        alert("Password must be filled out");
    }

    if(confirm.value === ""){
        alert("Please confirm your password");
    }
});