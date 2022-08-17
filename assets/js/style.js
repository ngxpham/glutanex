function menuShowUp() {
  const headerExpand = document.getElementById("header");
  const btnSub = document.querySelectorAll(".btn-sub");
  const subMenu = document.querySelectorAll(".sub-menu");

  function subMenuShow() {
    btnSub[0].addEventListener("mouseenter", () => {
      headerExpand.classList.add("expand");
      subMenu[0].classList.add("sub-drop");
      btnSub[0].parentElement.classList.add("expand");
      boxSearch.classList.remove("open");
    });
    btnSub[0].parentElement.addEventListener("mouseleave", () => {
      headerExpand.classList.remove("expand");
      subMenu[0].classList.remove("sub-drop");
      btnSub[0].parentElement.classList.remove("expand");
      openSearch.classList.remove("active");
      typeSearch.value = "";
    });

    btnSub[1].addEventListener("mouseenter", () => {
      headerExpand.classList.add("expand");
      subMenu[1].classList.add("sub-drop");
      btnSub[1].parentElement.classList.add("expand");
    });
    btnSub[1].parentElement.addEventListener("mouseleave", () => {
      headerExpand.classList.remove("expand");
      subMenu[1].classList.remove("sub-drop");
      openSearch.classList.remove("active");
      btnSub[1].parentElement.classList.remove("expand");
      typeSearch.value = "";
    });
  }

  const boxSearch = document.querySelector(".box-search");
  const openSearch = document.querySelector(".btn-search");
  const closeSearch = document.querySelector(".btn-close");
  const typeSearch = boxSearch.querySelector("input");

  function searchShow() {
    openSearch.addEventListener("click", () => {
      boxSearch.classList.add("open");
      headerExpand.classList.add("expand");
      openSearch.classList.add("active");
    });
    closeSearch.addEventListener("click", () => {
      boxSearch.classList.remove("open");
      headerExpand.classList.remove("expand");
      openSearch.classList.remove("active");
      typeSearch.value = "";
    });
  }

  const openMenuMobile = document.querySelector(".hamburger");
  const menuMobile = document.querySelector(".nav-menu");
  const closeMenuMobile = document.querySelector(".btn-closeMobile");

  const btnSubMb = document.querySelectorAll(".btn-sub-mb");
  const subMenuMb = document.querySelectorAll(".sub-menu-mb");

  function menuMobileShow() {
    openMenuMobile.addEventListener("click", () => {
      headerExpand.classList.add("expand");
      menuMobile.classList.add("open");
    });
    closeMenuMobile.addEventListener("click", () => {
      headerExpand.classList.remove("expand");
      menuMobile.classList.remove("open");
      typeSearch.value = "";
    });
    for (i = 0; i < btnSubMb.length; i++) {}
    $(btnSubMb[0]).on("click", () => {
      $(subMenuMb[0]).slideToggle(300);
      $(subMenuMb[1]).slideUp(300);
    });
    $(btnSubMb[1]).on("click", () => {
      $(subMenuMb[1]).slideToggle(300);
      $(subMenuMb[0]).slideUp(300);
      typeSearch.value = "";
    });
  }

  const closeModal = document.querySelector(".modal-btnClose");
  const modal = document.querySelector(".modal");

  setTimeout(() => {
    modal.classList.add("show");
  }, 300);
  closeModal.addEventListener("click", () => {
    modal.classList.add("close");
  });

  const links = document.querySelectorAll(".btn-default");
  console.log(links);
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  subMenuShow();
  menuMobileShow();
  searchShow();
}

menuShowUp();
