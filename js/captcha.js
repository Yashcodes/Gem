// function gen_cap(){
//     // console.log(Math.random())

//     data1 = Math.round(10 * Math.random())
//     // console.log(data1)

//     data2 = Math.round(10 * Math.random())
//     // console.log(data2)

//     data3 = Math.round(10 * Math.random())
//     // console.log(data3)

//     data4 = Math.round(10 * Math.random())
//     // console.log(data4)

//     data5 = Math.round(10 * Math.random())
    

//     document.getElementById("rec").innerText = `${data1}  ${data2}  ${data3}`;
// }


const allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z','a','b','c','d','e','f','g','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z','1','2','3','4','5','6','7','8','9']

const cVar1 = allValue[Math.floor(Math.random()*allValue.length)];
const cVar2 = allValue[Math.floor(Math.random()*allValue.length)];
const cVar3 = allValue[Math.floor(Math.random()*allValue.length)];
const cVar4 = allValue[Math.floor(Math.random()*allValue.length)];
const cVar5 = allValue[Math.floor(Math.random()*allValue.length)];

const cValue = cVar1+cVar2+cVar3+cVar4+cVar5;
// alert(cValue)

document.getElementById("captchaValue").innerHTML = cValue;

thisValue = "";

const inputCaptcha = document.getElementById("inputCaptcha")


inputCaptcha.addEventListener('change',function(){
    thisValue = inputCaptcha.value;
    // alert(thisValue)
})

const submitBtn = document.getElementById("submitBtn");

// submitBtn.onclick = function(){
//     if(cValue ==  thisValue){
//         alert("valid")
//         document.google-sheet.submit();

//     }
//     else{
//         alert("invalid")
//     }
// }



submitBtn.addEventListener('click',function(){

    if(cValue == thisValue){
        alert(`Valid  ${cValue} & ${thisValue}`)
       document.google-sheet.submit()
    }
    else if(inputCaptcha.value == ""){
        alert("Please enter the captcha")
        // submitBtn.disabled = true;
        // document.google-sheet.submit();
    
    }
    else{
        alert(`InValid Captcha`)
        // submitBtn.disabled = true;
    
    }

})


// function check_cap(){

//     if(cValue == thisValue){
//         alert(`valid ${cValue} & ${thisValue}`)
//     }
//     else{
//         alert(`invalid ${thisValue}`)
//     }

// }

// https://github.com/levinunnink/html-form-to-google-sheet

// https://github.com/levinunnink/html-form-to-google-sheet

// https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6