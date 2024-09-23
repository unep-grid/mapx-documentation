const themes = ["dark", "light"];

const local_conf = {
  theme: themes[1],
};

function setTheme(id) {
  const theme = themes.includes(id)
    ? id
    : localStorage.getItem("local_theme") || local_conf.theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("local_theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Theme hook
   */
  setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");
    setTheme(theme);
  }, 10);
});
