let parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
  const btn = document.createElement("button");

  btn.innerText = "Save";
  btn.style.width = "170px";
  btn.style.height = "40px";
  btn.style.marginBottom = "20px";
  element.appendChild(btn);
}

