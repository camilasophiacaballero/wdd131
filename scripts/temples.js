const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

document.querySelector("#currentyear").textContent = "2026";

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
