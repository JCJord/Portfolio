$("#showMore").click(function () {
  $(".projects:hidden").slice(0, 3).slideDown()
  if ($(".projects:hidden").length == 0) {
    $("#showMore").fadeOut("slow")
  }
})
$(function () {
  $("img.lazy").lazyload()
})
function menuHandler() {
  const burger = document.getElementById("nav-icon4")

  burger.addEventListener("click", () => {
    if (!burger.classList.contains("open")) {
      burger.classList.add("open")

      addColorLogo()
      toggleNav()
      visibleCross()
      scrollOff()
    } else if (burger.classList.contains("open")) {
      burger.classList.remove("open")

      removeColorLogo()
      toggleNav()
      blackCross()
      scrollOn()
    }
  })
}

menuHandler()

AOS.init()
