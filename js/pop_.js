const openpopBtn_1 = document.getElementById("pop-up-button-2");
const closepopBtn_1 = document.getElementById("pop-up-close-btn")

openpopBtn_1.addEventListener("click", function(){
    document.body.classList.add("pop-up-active")
})

closepopBtn_1.addEventListener("click", function(){
    document.body.classList.remove("pop-up-active")
})