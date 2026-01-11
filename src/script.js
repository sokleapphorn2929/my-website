const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function clearActive() {
  navLinks.forEach((link) => {
    link.classList.remove("bg-purple-500");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        clearActive();

        const id = entry.target.getAttribute("id");
        document
          .querySelector(`a[href="#${id}"]`)
          ?.classList.add("bg-purple-500");
      }
    });
  },
  {
    root: null,
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

const bg = document.querySelector("body");
const color = document.querySelectorAll(
  "h1,h2,h3,p,a,#contact label,footer span"
);
const proj = document.querySelectorAll(
  "#project div.dark,#skills div.dark,#contact div.dark"
);
const inputs = document.querySelectorAll(
  "#contact input, #contact textarea,#contact svg"
);
const modebtn = document.querySelector(".modebtn");
const modebtnI = document.querySelector(".modebtn i");
// const navbg = document.querySelector("nav div.navbg");
const navoutline = document.querySelector("nav");
const abtimg = document.querySelector(".abt-img");
// console.log(navbg);

document.addEventListener("DOMContentLoaded", () => {
  bg.classList.add("bg-gray-950");
  dark();
});

function darkMode() {
  if (bg.classList.contains("bg-gray-950")) {
    modebtnI.className = "fi fi-sr-dark-mode-alt text-2xl";
    light();
  } else {
    modebtnI.className = "fi fi-sr-light-mode-alt text-2xl";
    dark();
  }
}

function dark() {
  bg.classList.remove("bg-gray-100");
  bg.classList.add("bg-gray-950");
  abtimg.classList.remove("shadow-black/50");
  abtimg.classList.add("shadow-purple-600");
  color.forEach((h) => h.classList.add("text-white"));
  proj.forEach((pr) => {
    pr.classList.remove("bg-white", "bg-gray-200");
    pr.classList.add(
      "bg-gray-900",
      "outline",
      "outline-2",
      "outline-purple-500"
    );
  });
  inputs.forEach((inp) => {
    inp.classList.remove("border-black/40");
    inp.classList.add("text-white", "placeholder-white", "border-purple-500");
  });
  modebtn.classList.remove("bg-black", "text-white");
  modebtn.classList.add("bg-gray-50", "text-black");
  // navbg.classList.remove("bg-white/50");
  // navbg.classList.add("bg-white/15");
  navoutline.classList.remove("outline-white", "bg-white/50");
  navoutline.classList.add("outline-white/20", "bg-white/20");
}

function light() {
  bg.classList.remove("bg-gray-950");
  bg.classList.add("bg-gray-100");

  abtimg.classList.remove("shadow-purple-600");
  abtimg.classList.add("shadow-black/50");
  color.forEach((h) => {
    h.classList.remove("text-white");
    h.classList.add("text-black");
  });

  proj.forEach((pr) => {
    pr.classList.remove(
      "bg-gray-900",
      "outline",
      "outline-2",
      "outline-purple-500"
    );
    pr.classList.add("bg-white", "bg-gray-200");
  });

  inputs.forEach((inp) => {
    inp.classList.remove(
      "text-white",
      "placeholder-white",
      "border-purple-500"
    );
    inp.classList.add("border-black/40");
  });

  modebtn.classList.remove("bg-gray-50", "text-black");
  modebtn.classList.add("bg-black", "text-white");

  // navbg.classList.remove("bg-white/15");
  // navbg.classList.add("bg-black/5");

  navoutline.classList.remove("outline-white/20", "bg-white/20");
  navoutline.classList.add("outline-white", "bg-white/50");
}
