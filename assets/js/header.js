/* Set the width of the side navigation to 100% */
function toggleNav() {
  let mySidenav = document.getElementById("mySidenav")

  mySidenav.classList.toggle("release")
}

/* Set the width of the side navigation to 0 */

/* Set the color of the burger menu to white*/
function visibleCross() {
  let dash = document.querySelector(".dash")
  dash.style.backgroundColor = "white"

  let dash3 = document.querySelector(".dash-3")
  dash3.style.backgroundColor = "white"
}
function blackCross() {
  let dash = document.querySelector(".dash")
  dash.style.backgroundColor = "black"

  let dash3 = document.querySelector(".dash-3")
  dash3.style.backgroundColor = "black"
}
function addColorLogo() {
  let logo = document.querySelector(".logo-text")
  logo.style.color = "white"
}

function removeColorLogo() {
  let logo = document.querySelector(".logo-text")
  logo.style.color = "#c8d6df"
}
function menuHandler() {
  let burger = document.getElementById("nav-icon4")

  burger.addEventListener("click", () => {
    if (!burger.classList.contains("open")) {
      console.log("Aberto")
      burger.classList.add("open")
      addColorLogo()
      toggleNav()

      visibleCross()
    } else if (burger.classList.contains("open")) {
      console.log("Fechado")
      burger.classList.remove("open")
      removeColorLogo()
      toggleNav()
      blackCross()
    }
  })
}

menuHandler()
