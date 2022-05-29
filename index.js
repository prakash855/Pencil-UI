// Animation in the Landing Page

window.addEventListener("load", (inItEvent) => {
  document.getElementsByClassName("head-logo")[0].style.transform =
    "scale(1,1)";
});

window.addEventListener("load", (inItEvent) => {
  document.getElementsByClassName("head")[0].style.transform = "translateX(0%)";
});

const toggleMenu = () => {
  const sidebar = document.querySelector(".sidebar-responsive");
  sidebar.style.display === "none" || sidebar.style.display === ""
    ? (sidebar.style.display = "block")
    : (sidebar.style.display = "none");
};

// Input Validation in Input Component

const inputText = document.getElementById("inputText");
const errorOrSuccessInput = document.getElementById("errorOrSuccessInput");

inputText.addEventListener("input", (e) => {
  if (e.target.value.length + 1 > 4) {
    errorOrSuccessInput.innerHTML = "Here you go!";
    errorOrSuccessInput.style.color = "green";
  } else {
    errorOrSuccessInput.innerHTML = "input atleast 4 numbers";
    errorOrSuccessInput.style.color = "red";
  }
});
