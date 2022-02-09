// Card => Card Container => Card Footer || Card Message
let cardMessage = document.createElement("div");
cardMessage.setAttribute("class", "cardMessage");
cardMessage.style.cssText = `
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: ${cardFooter.offsetHeight}px;
    padding: ${spacing.xxl};
    transform: translateY(${cardFooter.offsetHeight}px) 
               translateX(-${card.offsetWidth}px);
    background-color: ${colors.cardSecondaryColor};
    color: ${colors.cardTextColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${spacing.xl};
    transition: all 0.2s ease-in-out .1s;
    `;
cardContent.appendChild(cardMessage);

// => Card Message => Card Message Header
let cardMessageHeader = document.createElement("div");
cardMessageHeader.setAttribute("class", "cardMessageHeader");
cardMessageHeader.style.cssText = `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${spacing.md};
    `;
cardMessage.appendChild(cardMessageHeader);

// => Card Message => Card Message Header : Icon

let cardMessageAvatar = notificationAvatar.cloneNode(true);
cardMessageAvatar.setAttribute("class", "cardMessageAvatar");
cardMessageAvatar.style.cssText = `
  width: 30px;
  height: 30px;
`;
cardMessageHeader.appendChild(cardMessageAvatar);

// => Card Message => Card Message Header : Name

let cardMessageAvatarName = notificationTextPersonName.cloneNode(true);
cardMessageAvatarName.style.cssText += `
flex-grow: 1;
`;
cardMessageHeader.appendChild(cardMessageAvatarName);

// => Card Message => Card Message Header : Cancel Button

let cardMessageCancelButton = notificationCloseButton.cloneNode(true);
cardMessageCancelButton.setAttribute("class", "cardMessageCancelButton");
cardMessageCancelButton.style.cssText += `
opacity: 1;
`;
cardMessageHeader.appendChild(cardMessageCancelButton);

// => Card Message => Card Message Body
let cardMessageBody = document.createElement("textarea");
cardMessageBody.setAttribute("class", "cardMessageBody");
cardMessageBody.style.cssText = `
    width: 100%;
    height: auto;
    padding: ${spacing.md} ${spacing.md};
    border-radius: ${spacing.xs};
    background-color: ${colors.backgroundColor};
    color: ${colors.cardTextColor};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    text-align: left;
    resize: none;
    border: 0.1px solid rgba(118, 158, 200, 0.15);
    `;
cardMessageBody.placeholder = "Ask a question...";
cardMessageBody.onfocus = function () {
  cardMessageBody.style.cssText += `
  outline: 1px solid ${colors.cardAccentColor};
  `;
};

cardMessage.appendChild(cardMessageBody);

// LOGIC

cardActionMessage.addEventListener("click", function (e) {
  cardFooter.style.cssText += `
              left:100%;
          `;
  cardMessage.style.cssText += `  
  opacity: 1;
  transform: translateY(${cardFooter.offsetHeight}px) translateX(0px);
  `;
  cardActionMessage.replaceChildren(document.createTextNode("Send Us"));
});
cardMessageCancelButton.addEventListener("click", function (e) {
  cardFooter.style.cssText += `
              left:0%;
          `;
  cardMessage.style.cssText += `  
  opacity: 0;
  transform: translateY(${cardFooter.offsetHeight}px) translateX(-${card.offsetWidth}px);
  `;
  cardActionMessage.replaceChildren(document.createTextNode("Message"));
});
