

export const getThemeFormLocaleStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme || "dark";
}
