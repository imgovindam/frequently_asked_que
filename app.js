const ans = document.getElementsByClassName("main");

for (i = 0; i < ans.length; i++) {
  ans[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
