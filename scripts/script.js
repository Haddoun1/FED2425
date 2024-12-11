// JavaScript Document
console.log("Bomboclat");

const menuBtn = document.querySelector("header nav button")
let menu = document.querySelector("main > ul")
const bodyEl = document.body 

function openMenu(){
    menu.classList.toggle("active")
    bodyEl.classList.toggle('active')
}

menuBtn.addEventListener("click", openMenu)