const btns = document.querySelectorAll(".btn1");
const slideRow = document.getElementById("slide");
const main = document.querySelector("main");

let currentIndex = 0;

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = translateX(${translateValue}px);

  btns.forEach((btn1, index) => {
    btn1.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn1, index) => {
  btn1.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});
