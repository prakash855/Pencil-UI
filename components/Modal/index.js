var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal
btn.onclick = () => (modal.style.display = "block");

// When the user clicks on <span> (x), close the modal
span.onclick = () => (modal.style.display = "none");

// When the user clicks anywhere outside of the modal, close it

window.addEventListener(
  "click",
  (event) => event.target == modal && (modal.style.display = "none")
);
