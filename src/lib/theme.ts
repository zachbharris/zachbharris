export function getThemePreference() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") ?? "system";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function updateDocumentThemeClass(theme: string) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  // remove transitions briefly while theme changes
  document.documentElement.classList.add("transition-none");

  setTimeout(() => {
    document.documentElement.classList.remove("transition-none");
  }, 100)
}
