function upDate(previewPic) {
  x = document.getElementById("image");
  y = previewPic.getAttribute("src");
  x.style.backgroundImage = "url('" + y + "')";
}

function unDo() {
  x = document.getElementById("image");
  x.style.backgroundImage = "url('')";
}
