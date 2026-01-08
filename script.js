// year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// close menu on link click (mobile)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// scroll progress
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
  progress.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
});

// contact form: open email draft (no backend)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = encodeURIComponent(fd.get("name"));
  const email = encodeURIComponent(fd.get("email"));
  const message = encodeURIComponent(fd.get("message"));

  const to = "joshi8k@uwindsor.ca";
  const subject = encodeURIComponent(`Portfolio message from ${decodeURIComponent(name)}`);
  const body = encodeURIComponent(
`Name: ${decodeURIComponent(name)}
Email: ${decodeURIComponent(email)}

Message:
${decodeURIComponent(message)}`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
