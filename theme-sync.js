window.addEventListener("message", function (e) {
  if (e.data && e.data.type === "set-mintlify-theme") {
    var theme = e.data.theme;
    var html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light";
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }
});
