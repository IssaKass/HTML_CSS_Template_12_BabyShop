let addToBag = document.getElementById("addToBag");
let stock = document.getElementById("stock");
let bag = document.querySelector("#header .shopping-bag span");
let stockItemNumber = 0;

addToBag.onclick = function () {
  stockItemNumber += 1;
  stock.textContent = stockItemNumber + " item(s) in the bag";
  bag.textContent = stockItemNumber;

  if (stockItemNumber == 1) {
    let addMore = document.createElement("a");
    addMore.classList.add("add-to-bag");
    addMore.classList.add("main-btn");
    addMore.textContent = "Go to checkout";
    addMore.style.background = "#fff";
    addMore.style.border = "2px solid #777";
    addMore.style.color = "var(--dark-color)";
    addMore.href = "checkout.html";
    addToBag.after(addMore);
  }
};
