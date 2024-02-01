if (window.innerWidth <= 767) {
  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: "auto",
    spaceBetween: "20px",
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
const showBtn = document.querySelector("#show");
const text = document.querySelector("#show span");
const showing = document.querySelector(".Showing");
const arrow = document.querySelector(".arrow");

showBtn.addEventListener("click", () => {
  const displayStyle = window
    .getComputedStyle(showing)
    .getPropertyValue("display");
  if (displayStyle === "none") {
    showing.style.display = "block";
    text.textContent = "Hide All";
    arrow.style.transform = "rotate(180deg)";
  } else {
    showing.style.display = "none";
    text.textContent = "Show All";
    arrow.style.transform = "rotate(0deg)";
  }
});
