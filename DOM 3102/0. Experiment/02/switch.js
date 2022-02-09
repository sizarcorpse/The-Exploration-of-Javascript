// color buttons area
let colorButtonArea = document.createElement("div");
colorButtonArea.setAttribute("class", "colorButtonArea");
colorButtonArea.style.cssText = `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    outline: 1px solid black;
    margin: 25px 0 0 0;
    `;

body.appendChild(colorButtonArea);

// color button dark
let colorButtonDark = document.createElement("button");
colorButtonDark.setAttribute("class", "colorButtonDark");
colorButtonDark.style.cssText = `
    width: 35px;
    height: 35px;
    background-color: #31354D;
    border: 5px solid #6751EF;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    `;
colorButtonArea.appendChild(colorButtonDark);

colorButtonDark.addEventListener("click", function () {
  body.style.backgroundColor = `${colors.light.background}`;
  cardContainer.style.backgroundColor = `${colors.light.card}`;
  cardTitle.style.color = `${colors.light.cardTitle}`;
  cardSubTitle.style.color = `${colors.light.cardSubTitle}`;
  cardDescription.style.color = `black !important`;
});
