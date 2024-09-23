console.log("file loaded");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");

    console.log("theme read", theme);
    if (theme === "dark" || theme === "light") {
      document.documentElement.dataset.theme = theme;
    }
  }, 10);
});
