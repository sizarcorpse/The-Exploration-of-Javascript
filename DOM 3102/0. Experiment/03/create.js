// Body

let body = document.querySelector("body");
body.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background: ${colors.lightGray};
`;

// Main Container
let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");
mainContainer.style.cssText = `
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: center;
width: 100%;
height: 100%;
`;
body.appendChild(mainContainer);

// Main Container => Card Container
let cardContainer = document.createElement("div");
cardContainer.setAttribute("class", "cardContainer");
cardContainer.style.cssText = `
width: 100%;
max-width: 700px;
display: flex;
align-items: center;
justify-content: center;
`;
mainContainer.appendChild(cardContainer);

// Main Container => Create :: Card
let createCard = document.createElement("div");
createCard.setAttribute("class", "createCard");
createCard.style.cssText = `
width: 100%;
max-width: 480px;
min-width: 360px;
display: flex;
gap: ${spacing.md};
flex-direction: column;
align-items: center;
justify-content: center;
padding: ${spacing.xxl} ${spacing.lg};
background: #fff;
border-radius: ${spacing.md};
box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
cardContainer.appendChild(createCard);

// Create :: Card Content => Name
let createCardCreatorName = document.createElement("input");
createCardCreatorName.setAttribute("class", "createCardCreatorName");
createCardCreatorName.setAttribute("placeholder", "Who you are ?");
createCardCreatorName.setAttribute("type", "text");
createCardCreatorName.setAttribute("value", "");
createCardCreatorName.style.cssText = fonts.primary;
createCardCreatorName.style.cssText += `
width: 100%;
padding: 0px ${spacing.md} 0 12px ;
outline: 1px solid transparent;
border: none !important;
border-radius: ${spacing.md};
max-width: 100%;
display: none;
margin-bottom: -8px;
animation: fadeIn 0.5s ease-in-out;
`;
createCard.appendChild(createCardCreatorName);

createCardCreatorName.onfocus = () => {
  createCardCreatorName.value = "@";
};

createCardCreatorName.addEventListener("keyup", (e) => {
  e.preventDefault();
  state.name = e.target.value;
});

// Create :: Card Content => Text Area
let cardTextarea = document.createElement("textarea");
cardTextarea.setAttribute("class", "cardTextarea");
cardTextarea.setAttribute("placeholder", "What on your mind ?");
cardTextarea.setAttribute("rows", "2");
cardTextarea.setAttribute("value", "");
cardTextarea.style.cssText = fonts.placeholder;
cardTextarea.style.cssText += `
width: 100%;
padding: ${spacing.sm};
outline: 1px solid transparent;
border: none !important;
border-radius: ${spacing.md};
max-width: 100%;
transition: all 0.3s ease-in-out;
`;
createCard.appendChild(cardTextarea);
cardTextarea.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (e.target.value.length >= 5) {
    createCardCreatorName.style.cssText += `
    display: block;
    `;
  }
  state.descriptions = e.target.value;
});
cardTextarea.onfocus = () => {
  cardTextarea.style.cssText += `
    outline: 1px solid rgba(33, 82, 222, 0.5);
    
    `;
};
cardTextarea.onblur = () => {
  cardTextarea.style.cssText += `
  outline: 1px solid transparent;
        `;
  if (state.descriptions.length === 0) {
    createCardCreatorName.style.cssText += `
        display: none;
        `;
  }
};

// Create :: Card Content => Options Area
let cardOptionsArea = document.createElement("div");
cardOptionsArea.setAttribute("class", "cardOptionsArea");
cardOptionsArea.style.cssText = `
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

`;
createCard.appendChild(cardOptionsArea);

// Create :: Card Content => Options Area => Left
let cardOptionsAreaLeft = document.createElement("div");
cardOptionsAreaLeft.setAttribute("class", "cardOptionsAreaLeft");
cardOptionsAreaLeft.style.cssText = `
flex: 1 1 30%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: ${spacing.xs};
`;
cardOptionsArea.appendChild(cardOptionsAreaLeft);

// => Options Area => Left => Button image
let cardOptionsButtonImage = document.createElement("button");
cardOptionsButtonImage.setAttribute("class", "cardOptionsButtonImage");
cardOptionsButtonImage.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
max-width: 30px;
max-height: 30px;
background: ${colors.light};
border-radius: 50%;
padding: ${spacing.md};
border: none;
outline: none;
cursor: pointer;
`;
cardOptionsAreaLeft.appendChild(cardOptionsButtonImage);

// => Options Area => Left => Button image :: image icon
let cardOptionsButtonImageIcon = document.createElement("i");
cardOptionsButtonImageIcon.setAttribute("class", "far fa-image");
cardOptionsButtonImageIcon.style.cssText = `
font-size: 18px;
color: ${colors.dark};
`;
cardOptionsButtonImage.appendChild(cardOptionsButtonImageIcon);

// => Options Area => Left => Button emoji
let cardOptionsButtonEmoji = cardOptionsButtonImage.cloneNode();
cardOptionsButtonEmoji.setAttribute("class", "cardOptionsButtonEmoji");
cardOptionsButtonEmoji.style.cssText += ``;
cardOptionsAreaLeft.appendChild(cardOptionsButtonEmoji);

// => Options Area => Left => Button emoji :: emoji icon
let cardOptionsButtonEmojiIcon = cardOptionsButtonImageIcon.cloneNode();
cardOptionsButtonEmojiIcon.setAttribute("class", "far fa-smile");
cardOptionsButtonEmojiIcon.style.cssText += ``;
cardOptionsButtonEmoji.appendChild(cardOptionsButtonEmojiIcon);

// => Options Area => Left => Button microphone
let cardOptionsButtonMicrophone = cardOptionsButtonImage.cloneNode();
cardOptionsButtonMicrophone.setAttribute(
  "class",
  "cardOptionsButtonMicrophone"
);
cardOptionsButtonMicrophone.style.cssText += ``;
cardOptionsAreaLeft.appendChild(cardOptionsButtonMicrophone);

// => Options Area => Left => Button microphone :: microphone icon
let cardOptionsButtonMicrophoneIcon = cardOptionsButtonImageIcon.cloneNode();
cardOptionsButtonMicrophoneIcon.setAttribute("class", "fas fa-microphone");
cardOptionsButtonMicrophoneIcon.style.cssText += ``;
cardOptionsButtonMicrophone.appendChild(cardOptionsButtonMicrophoneIcon);

// Create :: Card Content => Options Area => Right
let cardOptionsAreaRight = document.createElement("div");
cardOptionsAreaRight.setAttribute("class", "cardOptionsAreaRight");
cardOptionsAreaRight.style.cssText = `
flex: 1 1 60%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
gap: ${spacing.xs};
`;
cardOptionsArea.appendChild(cardOptionsAreaRight);

// => Options Area => Right => Button ellipsis
let cardOptionsButtonEllipsis = cardOptionsButtonImage.cloneNode();
cardOptionsButtonEllipsis.setAttribute("class", "cardOptionsButtonEllipsis");
cardOptionsButtonEllipsis.style.cssText += ``;
cardOptionsAreaRight.appendChild(cardOptionsButtonEllipsis);

// => Options Area => Right => Button ellipsis :: ellipsis icon
let cardOptionsButtonEllipsisIcon = cardOptionsButtonImageIcon.cloneNode();
cardOptionsButtonEllipsisIcon.setAttribute("class", "fas fa-ellipsis-h");
cardOptionsButtonEllipsisIcon.style.cssText += ``;
cardOptionsButtonEllipsis.appendChild(cardOptionsButtonEllipsisIcon);

// Create :: Card Content => Options Area => Right => Button post
let cardOptionsButtonPost = document.createElement("button");
cardOptionsButtonPost.setAttribute("class", "cardOptionsButtonPost");
cardOptionsButtonPost.appendChild(
  document.createTextNode("Everyone can view and reply")
);

cardOptionsButtonPost.style.cssText += fonts.primary;
cardOptionsButtonPost.style.cssText += `
padding: ${spacing.xs} ${spacing.xs};
border-radius: ${spacing.md} ;
border: none;
cursor: pointer;
color: ${colors.lightBlue};
outline: 1px solid rgba(33, 82, 222, 0.0);
background: rgba(33, 82, 222, 0.1);
`;

cardOptionsAreaRight.appendChild(cardOptionsButtonPost);

// Create :: Card Content=> horizontal line
let cardHorizontalLine = document.createElement("hr");
cardHorizontalLine.style.cssText += `
background: ${colors.darkGrey1};
width: 100%;
height: 1px;
border: none;
opacity: .3;
margin: ${spacing.md} 0;
`;
createCard.appendChild(cardHorizontalLine);

// Create :: Card Content=> Footer
let cardFooter = document.createElement("div");
cardFooter.setAttribute("class", "cardFooter");
cardFooter.style.cssText += `
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;
createCard.appendChild(cardFooter);

// Create :: Card Content=> Footer => Button Submit

let cardFooterButtonSubmit = document.createElement("button");
cardFooterButtonSubmit.setAttribute("class", "cardFooterButtonSubmit");
cardFooterButtonSubmit.appendChild(document.createTextNode("Share Now"));
cardFooterButtonSubmit.style.cssText += fonts.primary;
cardFooterButtonSubmit.style.cssText += `
cursor: pointer;
color: ${colors.light};
background: ${colors.dark};
border: none;
outline: none;
padding: ${spacing.md} ${spacing.xl};
border-radius: ${spacing.xxs};
`;
cardFooter.appendChild(cardFooterButtonSubmit);
