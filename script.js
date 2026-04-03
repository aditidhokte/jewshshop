function showProduct(title, img, desc, price) {
  document.getElementById("shop-page").style.display = "none";
  document.getElementById("product-page").style.display = "block";

  document.getElementById("product-title").innerText = title;
  document.getElementById("product-img").src = img;
  document.getElementById("product-desc").innerText = desc;
  document.getElementById("product-price").innerText = price;
}

function goBack() {
  document.getElementById("product-page").style.display = "none";
  document.getElementById("shop-page").style.display = "block";
}