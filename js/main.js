
// ==================================== Scroll =======================================
function scrollToClass(className) {
  const element = document.querySelector(`.${className}`);
  if (element) {
    
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
// ==================================== Animation =======================================
const animeItems = document.querySelectorAll("._anime-item");
if (animeItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animeItems.length; i++) {
      const animeItem = animeItems[i];
      const animeItemHeight = animeItem.offsetHeight;
      const animeItemOffset = offset(animeItem).top;
      const animeStart = 1;
      
      let animeItemPoint =
        window.innerHeight - animeItemHeight / animeStart + animeItemOffset;

      if (animeItemHeight > window.innerHeight) {
        animeItemPoint =
          window.innerHeight - window.innerHeight / animeStart + animeItemOffset;
      }

      if (
        pageYOffset > animeItemOffset - window.innerHeight / animeStart &&
        pageYOffset < animeItemPoint
      ) {
        animeItem.classList.add("_active");
      } else {
        if (!animeItem.classList.contains("_anim-no-hide")) {
          animeItem.classList.remove("_active");
        }
        
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// ==================================== BurgerMenu =======================================
const menu__btn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menu__btn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  menu__btn.classList.toggle("_action");
  
});
menu.addEventListener("click", () => {
  if (menu.classList.contains("menu__list--active")) {
    menu.classList.remove("menu__list--active");
    menu__btn.classList.remove("_action");
    // Выполните необходимые действия для возврата в исходное состояние
  }
});