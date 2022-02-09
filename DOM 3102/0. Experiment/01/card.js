// Document setting
document.title = "Experiment with JsDom";

// Initial State settings
const person = {
  photoUrl: "./assets//profile-photo.jpg",
  name: "Aurora Xayan",
  city: "Paradise City",
  about: "User interface designer and front-end developer",
  specialties: [
    "UI/UX",
    "Front end Development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
  ],
};

const colors = {
  backgroundColor: "#28223F",
  cardMainColor: "#231E39",
  cardSecondaryColor: "#1F1A36",
  cardTextColor: "#769ec8",
  cardAccentColor: "#03BFCB",
  cardInfoColor: "#FEBB0B",
  colorBlack: "#222222",
  colorDanger: "#C81F28",
};

const spacing = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xxl: "24px",
  ["3xl"]: "32px",
};

// state
const state = {
  isFollowed: false,
  isNotificationOpen: false,
};

// Component settings

let body = document.querySelector("body");
body.style.cssText = `
   
   background-color: ${colors.backgroundColor};
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
 `;

// Card
let card = document.createElement("div");
card.setAttribute("class", "root");
body.appendChild(card);

//  Card => Card Container
let cardContainer = document.createElement("div");
cardContainer.setAttribute("class", "cardContainer");
cardContainer.style.cssText = `
 width: 360px;
 height: 100%;
 max-width: 360px;
 background-color: ${colors.cardMainColor};
 overflow: hidden;
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
 `;
card.appendChild(cardContainer);

// Card => Card Container => Card Header
let cardHeader = document.createElement("div");
cardHeader.setAttribute("class", "cardHeader");
cardHeader.style.cssText = `
 position: absolute;
 padding: ${spacing.xxl};
   `;
cardContainer.appendChild(cardHeader);
// => Card Header => Card Chip
let cardChip = document.createElement("div");
cardChip.setAttribute("class", "cardChip");
cardChip.style.cssText = `
   background-color: ${colors.cardInfoColor};
   padding:${spacing.xs} ${spacing.md};
   border-radius: ${spacing.xs};
   display: inline-block;
   `;

let cardChipText = document.createElement("p");
cardChipText.appendChild(document.createTextNode("pro"));
cardChipText.style.cssText = `

 font-family: 'Poppins', sans-serif;
 font-size: 16px;
 font-weight: 500;
 line-height: 1.5;
 text-transform: uppercase;
 text-align: center;
 color: ${colors.colorBlack};
 `;
cardChip.appendChild(cardChipText);
cardHeader.appendChild(cardChip);

// Card => Card Container => Card Content
let cardContent = document.createElement("div");
cardContent.setAttribute("class", "cardContent");
cardContent.style.cssText = `
 position: relative;
 width: 100%;
 height: 100%;
 padding: ${spacing["3xl"]};
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 gap: ${spacing.lg};
 `;
cardContainer.appendChild(cardContent);

// => Card Content => Card Image
let cardImageArea = document.createElement("div");
cardImageArea.setAttribute("class", "cardImageArea");
cardImageArea.style.cssText = `
   width: 100%;
   height: auto;
   max-height: 150px;
   max-width: 150px;
   padding: ${spacing.sm};
   border-radius: 360px;
   border: 1px solid ${colors.cardAccentColor};
 `;
cardContent.appendChild(cardImageArea);
let img = document.createElement("img");
img.setAttribute("src", person.photoUrl);
img.style.cssText = `
       width: 100%;
       height: auto;
       border-radius: 360px;
       `;
cardImageArea.appendChild(img);

// => Card Content => Card Info
let nameOfPerson = document.createElement("H2");
nameOfPerson.appendChild(document.createTextNode(person.name));
nameOfPerson.style.cssText = `
       font-family: 'Poppins', sans-serif;
       font-size: 24px;
       font-weight: 500;
       line-height: 1.2;
       text-align: center;
       color: ${colors.cardTextColor};
       `;
cardContent.appendChild(nameOfPerson);

let city = document.createElement("H3");
city.appendChild(document.createTextNode(person.city));
city.style.cssText = `
       font-family: 'Poppins', sans-serif;
       font-size: 16px;
       font-weight: 500;
       line-height: 1.5;
       text-align: center;
       margin-top: -6px;
       color: ${colors.cardTextColor};
       `;
cardContent.appendChild(city);

// => Card Content => Card About
let about = document.createElement("p");
about.appendChild(document.createTextNode(person.about));
about.style.cssText = `
       font-family: 'Poppins', sans-serif;
       font-size: 14px;
       font-weight: 400;
       line-height: 1.5;
       text-align: center;
       max-width: 230px;
       color: ${colors.cardTextColor};
       `;
cardContent.appendChild(about);

// => Card Content => Card Action Area
let cardActionArea = document.createElement("div");
cardActionArea.setAttribute("class", "cardActionArea");
cardActionArea.style.cssText = `
     width: 100%;
     height: auto;
     padding: ${spacing.sm};
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     gap: ${spacing.md};
     `;
cardContent.appendChild(cardActionArea);

// => Card Action Area => Card Action 1 :: Message
let cardActionMessage = document.createElement("A");
cardActionMessage.setAttribute("href", "#");
cardActionMessage.setAttribute("class", "cardActionMessage");
cardActionMessage.style.cssText = `
        width: 100%;
        max-width: 120px;
       padding: ${spacing.md} ${spacing.xxl};
       font-family: 'Poppins', sans-serif;
       font-size: 16px;
       font-weight: 400;
       line-height: 1.5;
       text-align: center;
       text-decoration: none;
       border-radius: ${spacing.xs};
       border: 1px solid ${colors.cardAccentColor};
       background-color: ${colors.cardAccentColor};
       color: ${colors.colorBlack};

       `;
cardActionMessage.appendChild(document.createTextNode("Message"));
cardActionArea.appendChild(cardActionMessage);

// => Card Action Area => Card Action 2 :: Follow
let cardActionFollow = document.createElement("A");
cardActionFollow.setAttribute("href", "#");
cardActionFollow.setAttribute("class", "cardActionFollow");
cardActionFollow.style.cssText = `
       width: 100%;
       max-width: 120px;
       padding: ${spacing.md} ${spacing.xxl};
       font-family: 'Poppins', sans-serif;
       font-size: 16px;
       font-weight: 400;
       line-height: 1.5;
       text-align: center;
       text-decoration: none;
       border-radius: ${spacing.xs};
       border: 1px solid ${colors.cardAccentColor};
       background-color: transparent;
       color: ${colors.cardAccentColor};
       transition: all 0.3s ease-in-out;
       `;

cardActionFollow.onmouseenter = () => {
  if (state.isFollowed === false) {
    cardActionFollow.style.cssText += `
       background-color: ${colors.cardAccentColor};
       color: ${colors.colorBlack};
       border: 1px solid ${colors.cardAccentColor};
     `;
  } else if (state.isFollowed === true) {
    cardActionFollow.style.cssText += `
       background-color: ${colors.colorDanger};
       color: ${colors.colorBlack};
       border: 1px solid ${colors.colorDanger};
     `;
  } else {
    return true;
  }
};
cardActionFollow.onmouseleave = () => {
  if (state.isFollowed === false) {
    cardActionFollow.style.cssText += `
       background-color: ${colors.cardSecondaryColor};
       color: ${colors.cardTextColor};
       border: 1px solid ${colors.cardAccentColor};
     `;
  } else if (state.isFollowed === true) {
    cardActionFollow.style.cssText += `
       background-color: ${colors.cardSecondaryColor};
       color: ${colors.cardTextColor};
       border: 1px solid ${colors.cardAccentColor};
     `;
  }
};
cardActionFollow.appendChild(document.createTextNode("Follow"));
cardActionArea.appendChild(cardActionFollow);

// Card => Card Container => Card Footer
let cardFooter = document.createElement("div");
cardFooter.setAttribute("class", "cardFooter");
cardFooter.style.cssText = `
   position: relative;
   top:0px;
   left:0px;
   width: 100%;
   height: auto;
   padding: ${spacing.xxl};
   background-color: ${colors.cardSecondaryColor};
   transition: all 0.3s ease-in-out;
   `;
console.log(cardFooter.offsetHeight);
cardContainer.appendChild(cardFooter);

// => Card Footer => Card Footer Text
let cardFooterText = document.createElement("p");
cardFooterText.appendChild(document.createTextNode("Specialties"));
cardFooterText.style.cssText = `
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: 1.5;
   text-transform: uppercase;
   text-align: left;
   color: ${colors.cardTextColor};
   `;
cardFooter.appendChild(cardFooterText);

// => Card Footer => Card Specialties Area
let cardSpecialtiesArea = document.createElement("div");
cardSpecialtiesArea.setAttribute("class", "cardSpecialtiesArea");
cardSpecialtiesArea.style.cssText = `
     width: 100%;
     height: auto;
     padding: ${spacing.sm} 0px;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     align-items: center;
     gap: ${spacing.md};
     `;
cardFooter.appendChild(cardSpecialtiesArea);

// => Card Specialties Area => Card Specialties List
let cardSpecialtiesList = document.createElement("ul");
cardSpecialtiesList.setAttribute("class", "cardSpecialtiesList");
cardSpecialtiesList.style.cssText = `
       margin: 0;
       padding: 0;
       list-style: none;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content: flex-start;
       align-items: center;
       gap: ${spacing.md};
       `;
cardSpecialtiesArea.appendChild(cardSpecialtiesList);

// => Card Specialties Area => Card Specialties List => Card Specialties Item
person.specialties.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(item));
  listItem.style.cssText = `
       font-family: 'Poppins', sans-serif;
       font-size: 14px;
       font-weight: 300;
       line-height: 1.5;
       text-align: left;
       cursor: pointer;
       padding: ${spacing.sm} ${spacing.md};
       border-radius: ${spacing.xs};
       border: 0.1px solid rgba(118, 158, 200, 0.15);
       background-color: ${colors.cardSecondaryColor};
       color: ${colors.cardTextColor};
       transition: all 0.3s ease-in-out;
       `;
  cardSpecialtiesList.appendChild(listItem);

  listItem.onmouseenter = () => {
    listItem.style.cssText += `
       background-color: ${colors.cardAccentColor};
       color: ${colors.colorBlack};
     `;
  };
  listItem.onmouseleave = () => {
    listItem.style.cssText += `
       background-color: ${colors.cardSecondaryColor};
       color: ${colors.cardTextColor};
     `;
  };
});
