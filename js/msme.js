const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const aadhar = document.getElementById("aadhar");
const pan = document.getElementById("pan");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const gender = document.getElementById("gender");

first_name.onkeydown = function(){
    
    let first_regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let first_str = first_name.value;

    if(first_regex.test(first_str)){
        // document.getElementById("first_inner").innerText = "Your first name is valid";
        // document.getElementById("first_inner").style.color = "green";
        document.getElementById("first_name").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("first_inner").innerText = "Your first name is invalid";
        // document.getElementById("first_inner").style.color = "red";
        document.getElementById("first_name").style.border = "1px solid #eb101f";
    }
}

last_name.onkeydown = function(){

    let last_regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let last_str = last_name.value;

    if(last_regex.test(last_str)){
        // document.getElementById("last_inner").innerText = "Your last name is valid";
        // document.getElementById("last_inner").style.color = "green";
        document.getElementById("last_name").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("last_inner").innerText = "Your last name is invalid";
        // document.getElementById("last_inner").style.color = "red";
        document.getElementById("last_name").style.border = "1px solid #eb101f";
    }
}

phone.onkeydown = function(){

    let phone_regex = /^[0-9]{9,12}/;
    let phone_str = phone.value;

    if(phone_regex.test(phone_str)){
        // document.getElementById("phone_inner").innerText = "Your phone-number is valid";
        // document.getElementById("phone_inner").style.color = "green";
        document.getElementById("phone").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("phone_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("phone_inner").style.color = "red";
        document.getElementById("phone").style.border = "1px solid #eb101f";
    }
}

email.onkeydown = function(){

    let email_regex = /^([_\-\.a-zA-z0-9]+)@([_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let email_str = email.value;

    if(email_regex.test(email_str)){
        // document.getElementById("email_inner").innerText = "Your email is valid";
        // document.getElementById("email_inner").style.color = "green";
        document.getElementById("email").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("email_inner").innerText = "Your email is invalid";
        // document.getElementById("email_inner").style.color = "red";
        document.getElementById("email").style.border = "1px solid #eb101f";
    }
}



aadhar.onkeydown = function(){

    let aadhar_regex = /^[0-9]{11}/;
    let aadhar_str = aadhar.value;

    if(aadhar_regex.test(aadhar_str)){
        // document.getElementById("aadhar_inner").innerText = "Your phone-number is valid";
        // document.getElementById("aadhar_inner").style.color = "green";
        document.getElementById("aadhar").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("aadhar_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("aadhar_inner").style.color = "red";
        document.getElementById("aadhar").style.border = "1px solid #eb101f";
    }
}

pan.onkeydown = function(){

    let pan_regex = /^[a-zA-Z]([0-9a-zA-Z]){5,14}$/;
    let pan_str = pan.value;

    if(pan_regex.test(pan_str)){
        // document.getElementById("pan_inner").innerText = "Your phone-number is valid";
        // document.getElementById("pan_inner").style.color = "green";
        document.getElementById("pan").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("pan_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("pan_inner").style.color = "red";
        document.getElementById("pan").style.border = "1px solid #eb101f";
    }
}

address.onkeydown = function(){

    let address_regex = /^[a-zA-Z]/;
    let address_str = address.value;

    if(address_regex.test(address_str)){
        // document.getElementById("city_inner").innerText = "Your phone-number is valid";
        // document.getElementById("city_inner").style.color = "green";
        document.getElementById("address").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("city_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("city_inner").style.color = "red";
        document.getElementById("address").style.border = "1px solid #eb101f";
    }
}

city.onkeydown = function(){

    let city_regex = /^[a-zA-Z]/;
    let city_str = city.value;

    if(city_regex.test(city_str)){
        // document.getElementById("city_inner").innerText = "Your phone-number is valid";
        // document.getElementById("city_inner").style.color = "green";
        document.getElementById("city").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("city_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("city_inner").style.color = "red";
        document.getElementById("city").style.border = "1px solid #eb101f";
    }
}

state.onkeydown = function(){

    let state_regex = /^[a-zA-Z]/;
    let state_str = state.value;

    if(state_regex.test(state_str)){
        // document.getElementById("state_inner").innerText = "Your phone-number is valid";
        // document.getElementById("state_inner").style.color = "green";
        document.getElementById("state").style.border = "1px solid #28b84f";
    }
    else{
        // document.getElementById("state_inner").innerText = "Your phone-number is invalid";
        // document.getElementById("state_inner").style.color = "red";
        document.getElementById("state").style.border = "1px solid #eb101f";
    }
}

