function toggleNav() {
  const mySidenav = document.getElementById("mySidenav")

  mySidenav.classList.toggle("release")
}
function scrollOff() {
  const body = document.getElementById("body")
  body.style.overflow = "hidden"
}
function scrollOn() {
  const body = document.getElementById("body")
  body.style.overflow = "visible"
}
function visibleCross() {
  const dash = document.querySelector(".dash")
  dash.style.backgroundColor = "white"

  const dash3 = document.querySelector(".dash-3")
  dash3.style.backgroundColor = "white"
}
function blackCross() {
  const dash = document.querySelector(".dash")
  dash.style.backgroundColor = "black"

  const dash3 = document.querySelector(".dash-3")
  dash3.style.backgroundColor = "black"
}
function addColorLogo() {
  const logo = document.querySelector(".logo-text")
  logo.style.color = "white"
}

function removeColorLogo() {
  const logo = document.querySelector(".logo-text")
  logo.style.color = "#c8d6df"
}

function toggleOnClick() {
  const mySidenav = document.getElementById("mySidenav")

  mySidenav.classList.toggle("release")
  const body = document.getElementById("body")
  body.style.overflow = "visible"
}
