const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function onClick() {
    btn.style.backgroundColor = "salmon";
    btn.style.color = "white";
  });
});
