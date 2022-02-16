const myBtn = document.getElementById("myBtn");
const toast = document.getElementById("toast");
const remove_toast = document.getElementById("remove_toast");

myBtn.addEventListener("click", () => {
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
});

remove_toast.addEventListener("click", () => (toast.style.display = "none"));
