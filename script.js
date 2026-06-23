window.addEventListener("scroll", () => {
const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {
navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
} else {
navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
}
});

