document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const topButton = document.querySelector(".top");

const TRANSITION_MS = 160;

/* =========================
   MENU
   ========================= */
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
  if (event.key === "Escape") {
    closeMenu();
  }
});

/* =========================
   SCROLL TO TOP
   ========================= */
topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   SMOOTH SCROLL WITH OFFSET
   ========================= */
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

/* =========================
   PLAYFUL ART (desktop only)
   ========================= */
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

if (blobs.length) {
  window.addEventListener("mousemove", onMove);
  requestAnimationFrame(tick);
}

/* =========================
   EXPERIENCE TOGGLE
   ========================= */
const experienceToggle = document.querySelector(".experience-toggle");
const experienceContent = document.querySelector(".experience-content");

experienceToggle?.addEventListener("click", () => {
  if (!experienceContent) return;
  const expanded = experienceContent.classList.toggle("is-expanded");
  experienceToggle.textContent = expanded ? "Read less" : "Read more";
  experienceToggle.setAttribute("aria-expanded", String(expanded));
});

/* =========================
   ABOUT TOGGLE
   ========================= */
const aboutToggle = document.querySelector(".about-toggle");
const aboutContent = document.querySelector(".about-content");

aboutToggle?.addEventListener("click", () => {
  if (!aboutContent) return;
  const expanded = aboutContent.classList.toggle("is-expanded");
  aboutToggle.textContent = expanded ? "Read less" : "Read more";
  aboutToggle.setAttribute("aria-expanded", String(expanded));
});

/* =========================
   COVER LETTER DIALOG
   ========================= */
const dialog = document.getElementById("cover-letter-dialog");
const openBtn = document.querySelector(
  '[data-open-dialog="cover-letter-dialog"]',
);

openBtn?.addEventListener("click", () => dialog?.showModal());

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
  btn.addEventListener("click", () => dialog?.close());
});

/* =========================
   SCHOOL PROJECTS (carousel + progress) – robust init
   ========================= */
function initProjects() {
  const section = document.querySelector("#projects");
  if (!section) return;

  const viewport = section.querySelector(".projects-viewport");
  const track = section.querySelector("#projects-content");
  const prevBtn = section.querySelector(
    ".projects-controls .projects-arrow-prev",
  );
  const nextBtn = section.querySelector(
    ".projects-controls .projects-arrow-next",
  );
  const progressBar = section.querySelector(".projects-progress-bar");

  // Debug (kan tas bort sen)
  if (!viewport || !track || !prevBtn || !nextBtn) {
    console.warn("Projects carousel: saknar element", {
      viewport: !!viewport,
      track: !!track,
      prevBtn: !!prevBtn,
      nextBtn: !!nextBtn,
    });
    return;
  }

  const cards = Array.from(track.querySelectorAll(".project-card"));
  if (!cards.length) return;

  const getCurrentIndex = () => {
    const left = viewport.scrollLeft;
    let bestIndex = 0;
    let bestDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const distance = Math.abs(cards[i].offsetLeft - left);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = i;
      }
    }
    return bestIndex;
  };

  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    viewport.scrollTo({
      left: cards[clamped].offsetLeft,
      behavior: "smooth",
    });
  };

  const updateButtons = () => {
    const index = getCurrentIndex();
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === cards.length - 1;
  };

  const updateProgress = () => {
    if (!progressBar) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const percent = maxScroll > 0 ? (viewport.scrollLeft / maxScroll) * 100 : 0;
    progressBar.style.width = `${percent}%`;
  };

  const updateUI = () => {
    updateButtons();
    updateProgress();
  };

  prevBtn.addEventListener("click", () => {
    scrollToIndex(getCurrentIndex() - 1);
    window.setTimeout(updateUI, 220);
  });

  nextBtn.addEventListener("click", () => {
    scrollToIndex(getCurrentIndex() + 1);
    window.setTimeout(updateUI, 220);
  });

  viewport.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateUI);
  });

  window.addEventListener("resize", () => {
    window.setTimeout(updateUI, 80);
  });

  updateUI();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjects);
} else {
  initProjects();
}
