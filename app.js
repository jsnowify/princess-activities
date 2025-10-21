// 1. Dark Mode Toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 2. Add to Cart
let count = 0;
const cartCount = document.getElementById("cartCount");
document.getElementById("addCart").addEventListener("click", () => {
  count++;
  cartCount.textContent = `Cart: ${count} item${count > 1 ? "s" : ""}`;
});

// 4. Simple Image Slider
const slides = document.querySelectorAll(".slider img");
let current = 0;
document.getElementById("nextSlide").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});

// 5. Simple Form Validation
const form = document.getElementById("signupForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    formMsg.textContent = "❌ Please fill in all fields.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "✅ Form submitted successfully!";
    formMsg.style.color = "green";
  }
});
