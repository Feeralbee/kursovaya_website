// скрипт галереи изображений
function galery(imgs) {
    var expandImg = document.getElementById("expandedImgGG");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }