function upDate(previewPic) {
  x = document.getElementById("image");
  y = previewPic.getAttribute("src");
  x.style.backgroundImage = "url('" + y + "')";
  x.innerHTML = previewPic.getAttribute("alt");

}

function unDo() {
  x = document.getElementById("image");
  x.style.backgroundImage = "none";
  x.innerHTML = "Hover over an image below to display here.";
}
