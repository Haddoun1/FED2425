// JavaScript Document
console.log("Bomboclat");

const menuBtn = document.querySelector("header nav > button") // roept de 2 buttons aan in nav
let navMenu = document.querySelector("main > nav") // het vak wat nu buiten beeld is - zwarte menu

const likeBtns = document.querySelectorAll('main section:nth-of-type(5) ul li button')

const profileIcon = document.querySelector('header nav ul li button') // profiel icoontje

const popUp = document.querySelector('body > section') // kruisje in formulier
const closePopUp = document.querySelector('body > section div button') // kruisje in formulier sluiten



menuBtn.addEventListener("click", openMenu ) // hamburger menu openen (zwarte nav)
function openMenu(){
    navMenu.classList.toggle("active") // zwarte menu balk zichtbaar en dan verdwijnt
    menuBtn.classList.toggle("active") // zorgt dat span daadwerkelijk de animatie uitvoert
}
