const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const topButton = document.querySelector(".top");

const TRANSITION_MS = 160;

function openMenu() {
  if (!menu || !menuButton) return;

  menu.hidden = false;

  requestAnimationFrame(() => {
    menu.classList.add("is-open");
  });

  menuButton.setAttribute("aria-expanded", "true");
  menuButton.classList.add("is-open");
}

function closeMenu() {
  if (!menu || !menuButton) return;

  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.classList.remove("is-open");

  window.setTimeout(() => {
    menu.hidden = true;
  }, TRANSITION_MS);
}

menuButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = menuButton.classList.contains("is-open");
  if (isOpen) closeMenu();
  else openMenu();
});

document.addEventListener("click", (event) => {
  if (!menu || !menuButton) return;

  const clickedMenu = menu.contains(event.target);
  const clickedButton = menuButton.contains(event.target);

  if (!clickedMenu && !clickedButton) {
    closeMenu();
  }
});

/* Close on ESC */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

/* Scroll to top button */
topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll with offset
document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeMenu();

    const header = document.querySelector(".topbar");
    const offset = (header?.getBoundingClientRect().height || 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* Close on ESC */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

/* Scroll to top button */
topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll with offset
document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeMenu();

    const header = document.querySelector(".topbar");
    const offset = (header?.getBoundingClientRect().height || 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  });
});

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// PLAYFUL ART: subtle cursor parallax for blobs (desktop only)
const blobs = document.querySelectorAll(".bg-blob");
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function isDesktop() {
  return window.matchMedia("(min-width: 900px)").matches;
}

function onMove(event) {
  if (!isDesktop()) return;
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  targetX = x * 32;
  targetY = y * 28;
}

function tick() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  blobs.forEach((blob, index) => {
    const factor = (index + 1) * 0.6;
    blob.style.setProperty("--px", `${currentX * factor}px`);
    blob.style.setProperty("--py", `${currentY * factor}px`);
  });

  requestAnimationFrame(tick);
}

const toggle = document.querySelector(".experience-toggle");
const content = document.querySelector(".experience-content");

toggle?.addEventListener("click", () => {
  const expanded = content.classList.toggle("is-expanded");
  toggle.textContent = expanded ? "Read less" : "Read more";
  toggle.setAttribute("aria-expanded", expanded);
});

const aboutToggle = document.querySelector(".about-toggle");
const aboutContent = document.querySelector(".about-content");

aboutToggle?.addEventListener("click", () => {
  const expanded = aboutContent.classList.toggle("is-expanded");
  aboutToggle.textContent = expanded ? "Read less" : "Read more";
  aboutToggle.setAttribute("aria-expanded", expanded);
});

const dialog = document.getElementById("cover-letter-dialog");
const openBtn = document.querySelector(
  '[data-open-dialog="cover-letter-dialog"]'
);

openBtn?.addEventListener("click", () => dialog?.showModal());

dialog?.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
  btn.addEventListener("click", () => dialog?.close());
});
