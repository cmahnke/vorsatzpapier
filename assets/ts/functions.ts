/**
 * Modernized Theme Logic
 * Replaces: jQuery, fitVids, and Placeholder Polyfills
 */

const state = {
  hasTouch: false,
  isToggled: false
};

// 1. Touch Detection & Dropdowns
const setHasTouch = (): void => {
  state.hasTouch = true;
  window.removeEventListener("touchstart", setHasTouch);

  if (window.innerWidth > 799) {
    document.querySelectorAll(".menu-item-has-children").forEach(item => {
      item.classList.add("closed");
      item.addEventListener("click", (e) => {
        if (item.classList.contains("closed")) {
          e.preventDefault();
          item.classList.remove("closed");
        }
      });
    });
  }
};
window.addEventListener("touchstart", setHasTouch, { passive: true });

// 2. Navigation Toggle Logic
const toggleNavigation = (): void => {
  const header = document.querySelector<HTMLElement>("#site-header");
  const menuPrimary = document.querySelector<HTMLElement>("#menu-primary");
  const overflow = document.querySelector<HTMLElement>("#overflow-container");
  if (header === null || menuPrimary === null || overflow === null) {
    return;
  }

  state.isToggled = !state.isToggled;
  header.classList.toggle("toggled", state.isToggled);

  if (!state.isToggled) {
    // Reset styles after transition
    setTimeout(() => {
      menuPrimary.removeAttribute("style");
      overflow.removeAttribute("style");
    }, 400);
  } else {
    overflow.style.minHeight = `${window.innerHeight + 240}px`;
  }
};

// 3. Lazy Loading (Native implementation)
const initLazyLoading = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        if (el.dataset.src) el.setAttribute("src", el.dataset.src);
        if (el.dataset.background) el.style.backgroundImage = `url(${el.dataset.background})`;
        el.classList.remove("lazy-image", "lazy-bg-image");
        observer.unobserve(el);
      }
    });
  }, { rootMargin: "100px" });

  document.querySelectorAll(".lazy").forEach(el => observer.observe(el));
};

// 4. Back to Top (Smooth Scroll)
const initScrollTop = (): void => {
  const btn = document.querySelector("#return-top");
  if (btn !== null) {
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY >= 600);
    });

    btn.addEventListener("click", () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }
};

// 5. Initialize
document.addEventListener("DOMContentLoaded", () => {
  initLazyLoading();
  initScrollTop();

  document.querySelector("#toggle-navigation")?.addEventListener("click", toggleNavigation);

  // Accessibility for menus
  document.querySelectorAll<HTMLElement>(".menu-item a").forEach(link => {
    link.addEventListener("focus", () => link.closest("li")?.classList.add("focused"));
    link.addEventListener("blur", () => link.closest("li")?.classList.remove("focused"));
  });
});
