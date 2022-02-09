// Notification
let notification = document.createElement("div");
notification.setAttribute("class", "notification");
notification.style.cssText = `
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         max-width: ${card.offsetWidth}px;
         opacity: 0;
         transform: translateX(0) translateY(50px);
         transition: all 0.2s ease-in-out 1s;
         `;
body.appendChild(notification);

// Notification => Notification Container

let notificationContainer = document.createElement("div");
notificationContainer.setAttribute("class", "notificationContainer");
notificationContainer.style.cssText = `
         width: 100%;
         height: auto;
         padding: ${spacing.md} ${spacing.xxl};
         border-radius: ${spacing.xs};
         background-color:${colors.cardSecondaryColor};
         display: flex;
         flex-direction: row;
         justify-content: flex-start;
         align-items: center;
         gap: ${spacing.md};
         `;
notification.appendChild(notificationContainer);

// Notification => Notification Container => Notification Icon
let notificationAvatar = document.createElement("div");
notificationAvatar.setAttribute("class", "notificationAvatar");
notificationAvatar.style.cssText = `
   width: 100%;
   height: auto;
   max-height: 50px;
   max-width: 50px;
   padding: ${spacing.sm};
   border-radius: 360px;
   border: 1px solid ${colors.cardAccentColor};
         `;
let avatar = img.cloneNode(true);
notificationAvatar.appendChild(avatar);
notificationContainer.appendChild(notificationAvatar);

// Notification => Notification Container => Notification Text
let notificationText = document.createElement("P");
notificationText.setAttribute("class", "notificationText");
notificationText.style.cssText = `
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   font-weight: 500;
   line-height: 1.5;
   text-align: left;
   color: ${colors.cardTextColor};
   `;
let notificationTextPersonName = document.createElement("span");
notificationTextPersonName.style.cssText = `
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   font-weight: 600;
   line-height: 1.5;
   text-align: left;
   color: ${colors.cardTextColor};
   `;
notificationTextPersonName.appendChild(document.createTextNode(person.name));
notificationText.appendChild(
  document.createTextNode("You have successfully followed ")
);
notificationText.append(notificationTextPersonName);
notificationContainer.appendChild(notificationText);

// Notification => Notification Container => Notification Close Button
let notificationCloseButton = document.createElement("button");
notificationCloseButton.setAttribute("class", "notificationCloseButton");
notificationCloseButton.style.cssText = `
   width: 100%;
   height: 100%;
   max-height: 20px;
   max-width: 20px;
   padding: 2px;
   border-radius: 360px;
   background-color: ${colors.cardAccentColor};
   cursor: pointer;
   display: flex;
   border: none;
   opacity: 0;
   transition: all 0.2s ease-in-out;
   `;
notificationCloseButton.onmouseenter = () => {
  notificationCloseButton.style.cssText += `
       background-color: ${colors.colorDanger};
       color: ${colors.colorBlack};
     `;
};
notificationCloseButton.onmouseleave = () => {
  notificationCloseButton.style.cssText += `
       background-color: ${colors.cardAccentColor};
       color: ${colors.cardTextColor};
     `;
};

let notificationCloseButtonIcon = document.createElement("img");
notificationCloseButtonIcon.setAttribute("src", "./assets/close.svg");
notificationCloseButtonIcon.style.cssText = `
   width: 100%;
   height: 100%;
   `;
notificationCloseButton.appendChild(notificationCloseButtonIcon);
notificationContainer.appendChild(notificationCloseButton);

notification.onmouseenter = () => {
  notificationCloseButton.style.cssText += `
       opacity: 1;
       
     `;
};
notification.onmouseleave = () => {
  notificationCloseButton.style.cssText += `
       opacity: 0;
     `;
};

// LOGIC
cardActionFollow.onclick = () => {
  if (state.isFollowed === false) {
    state.isFollowed = true;
    cardActionFollow.replaceChildren(document.createTextNode("Followed"));
    cardActionFollow.setAttribute("class", "cardActionFollowed");
    notification.style.cssText += `
           opacity: 1;
           transform: translateX( ${card.offsetLeft}px) translateY(50px)
           `;

    setTimeout(() => {
      notification.style.cssText += `
           opacity: 0;
           transform: translateX(0) translateY(50px); 
           `;
    }, 5000);
  } else {
    state.isFollowed = false;
    cardActionFollow.replaceChildren(document.createTextNode("Follow"));
    cardActionFollow.removeAttribute("class", "cardActionFollowed");
    cardActionFollow.setAttribute("class", "cardActionFollow");
  }
};

notificationCloseButton.onclick = () => {
  notification.style.cssText += `
           opacity: 0;
           transform: translateX(0) translateY(50px);
           `;
};
