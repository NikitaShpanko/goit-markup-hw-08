;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelectorAll("[data-menu]")

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    for (i = 0; i < mobileMenuRef.length; i++)
      mobileMenuRef[i].classList.toggle("is-open")
  })
})()