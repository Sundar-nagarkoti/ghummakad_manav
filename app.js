const popularVideos = [
  {
    id: "_7B4tL1EAQQ",
    title: "Shimla Ep - 3 | Beauty of Shimla | Mall Road | Christ Church | Jakhu Temple | Travel Shimla 2022",
    views: "4.2k views"
  },
  {
    id: "7W9AHp6exdY",
    title: "Shimla Ep - 1| Ghaziabad to Kalka Journey by Train | Budget Travel 2022",
    views: "2.9k views"
  },
  {
    id: "nDFZZSXuLDk",
    title: "Seat Mil gayi, Vibe Mil gayi, Mata ne bula liya😄🙏Ghaziabad to katra #bytrain #matavaishnodevi",
    views: "2.9k views"
  },
  {
    id: "LAw7S_9f4f4",
    title: "My First Vlog #1: Kedarnath Yatra 2025 | Kedarnath trip Uttarakhand | Trip to Kedarnath |",
    views: "2.8k views"
  },
  {
    id: "xsuzMXTRFT8",
    title: "The Most amazing and wonderful view of the Rajasthan that you have never seen | #shorts",
    views: "1.3k views"
  },
  {
    id: "GnGWYgrmkdc",
    title: "Kullu Manali Tosh |Himachal Pradesh | Kullu se manali aur Manali se Tosh ka safaar| Kullu to Manali.",
    views: "990 views"
  },
  {
    id: "AuuEdQSuihQ",
    title: "Zindagi Ka Ek Aur Khoobsurat Din | Devprayag Sangam Mein Snan ❤️🙏#devprayag #uttrakhand",
    views: "784 views"
  },
  {
    id: "ghLgIUU7ALk",
    title: "Shimla Ep- 2 | Kalka to Shimla | India's Most beautiful Tourist Hill station | #shimla #snowfall",
    views: "749 views"
  },
  {
    id: "8TfN9HENUGI",
    title: "Madhyamaheshwar Trek🏔️ | 2nd Kedar of Panch Kedar | #Madhyamaheshwar #PanchKedar #trekkingindia",
    views: "669 views"
  },
  {
    id: "t80CS2q6ik4",
    title: "Kashi Vishwanath Jyotirlinga | Kashi Corridor | Assi Ghat Aarti | DAY 2 | #viral #vlog #banaras #new",
    views: "409 views"
  }
];

function renderVideos() {
  const track = document.querySelector("#videoTrack");
  if (!track) return;

  track.innerHTML = popularVideos
    .map((video) => {
      const url = `https://www.youtube.com/watch?v=${video.id}`;
      const thumbnail = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

      return `
        <article class="video-card">
          <a href="${url}" target="_blank" rel="noreferrer" aria-label="Watch ${escapeHtml(video.title)} on YouTube">
            <div class="video-thumb">
              <img src="${thumbnail}" alt="${escapeHtml(video.title)} thumbnail" loading="lazy">
              <span class="play-badge" aria-hidden="true"><i data-lucide="play"></i></span>
            </div>
            <div class="video-meta">
              <h3>${escapeHtml(video.title)}</h3>
              <p>${escapeHtml(video.views)}</p>
            </div>
          </a>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupCarousel() {
  const track = document.querySelector("#videoTrack");
  const previous = document.querySelector("#prevVideo");
  const next = document.querySelector("#nextVideo");
  if (!track || !previous || !next) return;

  const scrollByPage = (direction) => {
    const distance = Math.max(280, Math.floor(track.clientWidth * 0.85));
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  previous.addEventListener("click", () => scrollByPage(-1));
  next.addEventListener("click", () => scrollByPage(1));
}

function setupMenu() {
  const button = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    button.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
      button.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderVideos();
  setupCarousel();
  setupMenu();
  if (window.lucide) window.lucide.createIcons();
});
