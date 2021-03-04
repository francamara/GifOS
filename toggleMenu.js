const menuBtn = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".menu-items")

let showMobileMenu = false
let menuOpen = false

/**
 * if mobile menu disabled set to enabled and viceversa
 */

menuBtn.addEventListener("click", () => {
  if (!menuOpen && !showMobileMenu) {
    menuBtn.classList.add("open")
    menuItems.classList.add("menu-open")
    menuOpen = true
    showMobileMenu = true
  } else {
    menuBtn.classList.remove("open")
    menuItems.classList.remove("menu-open")
    menuOpen = false
    showMobileMenu = false
  }
})
