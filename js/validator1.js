const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

first_name.onkeydown = function(){
    
    let first_regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let first_str = first_name.value;

    if(first_regex.test(first_str)){
        document.getElementById("first_inner").innerText = "Your first name is valid";
        document.getElementById("first_inner").style.color = "green";
        document.getElementById("first_name").style.borderBottom = "1px solid #28b84f";
    }
    else{
        document.getElementById("first_inner").innerText = "Your first name is invalid";
        document.getElementById("first_inner").style.color = "red";
        document.getElementById("first_name").style.borderBottom = "1px solid #eb101f";
    }
}

last_name.onkeydown = function(){

    let last_regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let last_str = last_name.value;

    if(last_regex.test(last_str)){
        document.getElementById("last_inner").innerText = "Your last name is valid";
        document.getElementById("last_inner").style.color = "green";
        document.getElementById("last_name").style.borderBottom = "1px solid #28b84f";
    }
    else{
        document.getElementById("last_inner").innerText = "Your last name is invalid";
        document.getElementById("last_inner").style.color = "red";
        document.getElementById("last_name").style.borderBottom = "1px solid #eb101f";
    }
}

email.onkeydown = function(){

    let email_regex = /^([_\-\.a-zA-z0-9]+)@([_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let email_str = email.value;

    if(email_regex.test(email_str)){
        document.getElementById("email_inner").innerText = "Your email is valid";
        document.getElementById("email_inner").style.color = "green";
        document.getElementById("email").style.borderBottom = "1px solid #28b84f";
    }
    else{
        document.getElementById("email_inner").innerText = "Your email is invalid";
        document.getElementById("email_inner").style.color = "red";
        document.getElementById("email").style.borderBottom = "1px solid #eb101f";
    }
}

phone.onkeydown = function(){

    let phone_regex = /^[0-9]{9,12}/;
    let phone_str = phone.value;

    if(phone_regex.test(phone_str)){
        document.getElementById("phone_inner").innerText = "Your phone-number is valid";
        document.getElementById("phone_inner").style.color = "green";
        document.getElementById("phone").style.borderBottom = "1px solid #28b84f";
    }
    else{
        document.getElementById("phone_inner").innerText = "Your phone-number is invalid";
        document.getElementById("phone_inner").style.color = "red";
        document.getElementById("phone").style.borderBottom = "1px solid #eb101f";
    }
}

// message.onkeydown = function(){
 
//     let message_regex = /^[a-zA-Z]([0-9a-zA-Z]){15}$/;
//     let message_str = message.value;

//     if(message_regex.test(message_str)){
//         document.getElementById("message_inner").innerText = "Your message is valid";
//         document.getElementById("message_inner").style.color = "green";
//         document.getElementById("message").style.border = "1px solid #28b84f";

//     }
//     else{
//         document.getElementById("message_inner").innerText = "Your message should be more than 25 charecter long";
//         document.getElementById("message_inner").style.color = "red";
//         document.getElementById("message").style.border = "1px solid #eb101f";
//     }
// }