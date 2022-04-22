const openpopBtn = document.getElementById("pop-up-button");
const closepopBtn = document.getElementById("pop-up-close-btn")

openpopBtn.addEventListener("click", function(){
    document.body.classList.add("pop-up-active")
})

closepopBtn.addEventListener("click", function(){
    document.body.classList.remove("pop-up-active")
})

// -------------------------advance-button-----------------------------------------//

const openpopBtnFirst = document.getElementById("pop-up-button-1")
const closeopBtnFirst = document.getElementById("pop-up-close-btn-1")


openpopBtnFirst.addEventListener("click", function(){
    document.body.classList.add("pop-up-active")
})

closeopBtnFirst.addEventListener("click", function(){
    document.body.classList.remove("pop-up-active")
})

// -------------------------advance-button-----------------------------------------//

const openpopBtnSecond = document.getElementById("pop-up-button-2")
const closeopBtnSecond = document.getElementById("pop-up-close-btn-2")


openpopBtnSecond.addEventListener("click", function(){
    document.body.classList.add("pop-up-active")
})

closeopBtnSecond.addEventListener("click", function(){
    document.body.classList.remove("pop-up-active")
})
