const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit_btn = document.getElementById("submit_btn");



first_name.addEventListener("blur", () => {

    let first_regex = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
    let first_str = first_name.value;

    // if (first_regex.test(first_str)) {
    //         console.log("Valid");
            
    // }
    // else{
    //         document.getElementById("first_name").value = "*You can write only text";
    //         document.getElementById("first_name").style.borderBottom = "1px solid #eb101f";

     
    // }
    

})

last_name.addEventListener("blur", () => {
    
        let last_regex = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
        let last_str = last_name.value;
    
        // if (last_regex.test(last_str)) {
        //     console.log("Valid");
        // }
        // else {
        //     document.getElementById("last_name").value = "*You can write only text";
        //     document.getElementById("last_name").style.borderBottom = "1px solid #eb101f";
        // }
    
})

email.addEventListener("blur", () => {
    
    let email_regex = /^([_\-\.a-zA-z0-9]+)@([_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let email_str = email.value;

    // if (email_regex.test(email_str)) {
    //     console.log("valid Email");
    // }
    // else {
    //     document.getElementById("email").value = "*Please write abc@gmail.com";
    //     document.getElementById("email").style.borderBottom = "1px solid #eb101f";
    // }

})

phone.addEventListener("blur", () => {
    
    let phone_regex = /^[0-9]{10}/;
    let phone_str = phone.value;

    // if (phone_regex.test(phone_str)) {
    //     console.log("valid Phone");
    // }
    // else {
    //     document.getElementById("phone").value = "*Please enter only numbers";
    //     document.getElementById("phone").style.borderBottom = "1px solid #eb101f";
    // }

})

message.addEventListener("blur", () => {

    let message_regex = /^[a-zA-Z]([0-9a-zA-Z]){25}$/;
    let message_str = message.value;
    
    // if(message_regex.test(message_str)){
    //     console.log("Valid")
    // }
    // else{
    //     document.getElementById("message").value = "*Message should be less than 25    character";
    //     document.getElementById("message").style.border = "1px solid #eb101f";
    // }

})


if(first_regex.test(first_str)){

//     if(last_regex.test(last_str)){
    
//         if(email_regex.test(email_str)){

//             if(phone_regex.test(phone_str)){
       
//                 if(message_regex.test(message_str)){   
                    
                    
// }
// }
// }
}
else{
    document.getElementById("first_name").value = "*You can write only text";
    document.getElementById("first_name").style.borderBottom = "1px solid ";

}


        // document.getElementById("first_name").value = "";
        // document.getElementById("last_name").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("phone").value = "";
        // document.getElementById("message").value = "";




























// for(i=0;i<1;i++){
// if(i=0){
   
// first_name.addEventListener("blur", () => {

//     let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
//     let str = first_name.value;

//     if (regex.test(str)) {
//             console.log("Valid");
            
//     }
//     else {
//             document.getElementById("first_name").value = "*You can write only text";
//             document.getElementById("first_name").style.borderBottom = "1px solid #eb101f";
//     }

// })

// last_name.addEventListener("blur", () => {
    
//     let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
//     let str = last_name.value;

//     if (regex.test(str)) {
//         console.log("Valid");
//     }
//     else {
//         document.getElementById("last_name").value = "*You can write only text";
//         document.getElementById("last_name").style.borderBottom = "1px solid #eb101f";
//     }

// })

// email.addEventListener("blur", () => {
    
//     let regex = /^([_\-\.a-zA-z0-9]+)@([_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/;
//     let str = email.value;

//     if (regex.test(str)) {
//         console.log("valid Email");
//     }
//     else {
//         document.getElementById("email").value = "*Please write abc@gmail.com";
//         document.getElementById("email").style.borderBottom = "1px solid #eb101f";
//     }

// })

// phone.addEventListener("blur", () => {
    
//     let regex = /^[0-9]{10}/;
//     let str = phone.value;

//     if (regex.test(str)) {
//         console.log("valid Phone");
//     }
//     else {
//         document.getElementById("phone").value = "*Please enter only numbers";
//         document.getElementById("phone").style.borderBottom = "1px solid #eb101f";
//     }

// })

// message.addEventListener("blur", () => {

//     let regex = /^[a-zA-Z]([0-9a-zA-Z]){25}$/;
//     let str = message.value;
    
//     if(regex.test(str)){
//         console.log("Valid")
//     }
//     else{
//         document.getElementById("message").value = "*Message should be less than 25 character";
//         document.getElementById("message").style.border = "1px solid #eb101f";
//     }

// })

// }
// else{
//     document.getElementById("first_name").value = "";
//     document.getElementById("last_name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     document.getElementById("message").value = "";
// }
// }
