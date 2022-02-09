// document setting
document.title = "Card";

// initial setting

let person = {
  name: "Aurora Xayan",
  designation: "Senior Product Designer",
  description: "Create useable interface and designs @Aurora",
  photo: "./assets/profile-photo.jpg",
  social: [
    {
      name: "dribble",
      icon: "fab fa-dribbble",
      follower: "15.5k",
      url: "https://dribbble.com/AuroraXayan",
    },
    {
      name: "behance",
      icon: "fab fa-behance",
      follower: "10.5k",
      url: "https://www.behance.net/AuroraXayan",
    },
    {
      name: "github",
      icon: "fab fa-github",
      follower: "9.5k",
      url: "https://github.com/AuroraXayan",
    },
  ],
};

let colors = {
  dark: {
    background: "#28223F",
    card: "#31354d",
    cardTitle: "#ffffff",
    cardSubTitle: "#9fa2bb",
    cardBody: "#ffffff",
    button: "#ffffff",
  },
  light: {
    background: "#ffffff",
    card: "#fdfeff",
    cardTitle: "#2b2c34",
    cardSubTitle: "#9fa2bb",
    cardBody: "#2b2c34",
    button: "#ffffff",
  },
};

let fonts = {
  cardTitle: `
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    color: ${colors.dark.cardTitle}
    `,

  cardSubTitle: `
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    margin-top: -6px;
    letter-spacing: 0.3px;
    color: ${colors.dark.cardSubTitle}
    `,

  cardBody: `
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    max-width: 230px;
    letter-spacing: 0.3px;
    color: ${colors.dark.cardBody}
    `,
};
const spacing = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  xxl: "24px",
  ["3xl"]: "28px",
};

// Component settings
let body = document.querySelector("body");
body.style.cssText = `
   background-color: ${colors.dark.background};
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
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
 width: 380px;
 max-width: 380px;
 background-color: ${colors.dark.card};
 overflow: hidden;
 padding: ${spacing["3xl"]} ${spacing["3xl"]} 60px ${spacing["3xl"]};
 border-radius: ${spacing.md};
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
 `;
card.appendChild(cardContainer);

// Card => Card Container => Card Header
let cardHeader = document.createElement("div");
cardHeader.setAttribute("class", "cardHeader");
cardHeader.style.cssText = `
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${spacing.lg};
    `;
cardContainer.appendChild(cardHeader);

// Card => Card Container => Card Header => Card Button :: Back
let cardButtonBack = document.createElement("i");
cardButtonBack.setAttribute("class", "fas fa-arrow-left");
cardButtonBack.style.cssText = `
color:${colors.dark.button};
font-size: 16px;
flex-grow: 1;
`;
cardHeader.appendChild(cardButtonBack);
// => Card Header => Card Button :: Love
let cardButtonLove = document.createElement("i");
cardButtonLove.setAttribute("class", "fas fa-heart");
cardButtonLove.style.cssText = `
color:${colors.dark.button};
font-size: 16px;
`;
cardHeader.appendChild(cardButtonLove);

// Card => Card Container => Card Header => Card Button :: ellipsis
let cardButtonEclipse = document.createElement("i");
cardButtonEclipse.setAttribute("class", "fas fa-ellipsis-v");
cardButtonEclipse.style.cssText = `
color:${colors.dark.button};
font-size: 16px;
`;
cardHeader.appendChild(cardButtonEclipse);

//Card => Card Container => Card Content
let cardContent = document.createElement("div");
cardContent.setAttribute("class", "cardContent");
cardContent.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: ${spacing.md};
    `;
cardContainer.appendChild(cardContent);

// => Card Content => Card Image Area
let cardImageArea = document.createElement("div");
cardImageArea.setAttribute("class", "cardImageArea");
cardImageArea.style.cssText = `
   position: relative;
   width: 100%;
   height: auto;
   max-height: 150px;
   max-width: 150px;
   padding: ${spacing.sm};
   margin-bottom: ${spacing.sm};
   border-radius: 360px;
   border: 1px solid ${colors.cardAccentColor};
   
 `;
cardContent.appendChild(cardImageArea);

// => Card Content => Card Image Area :: Image

let img = document.createElement("img");
img.setAttribute("src", person.photo);
img.style.cssText = `
       width: 100%;
       height: auto;
       border-radius: 360px;
       box-shadow: 0px 20px 50px -10px #000000;
       `;
cardImageArea.appendChild(img);

// => Card Content => Card Image Area :: Verified
let verified = document.createElement("div");
verified.setAttribute("class", "verified");
verified.style.cssText = `
    position: absolute;
    bottom: 20px;
    right: 5px;
    width: 30px;
    height: 30px;
    padding: ${spacing.xs};
    background: linear-gradient(90deg, rgba(124,99,213,1) 0%, rgba(169,93,197,1) 50%, rgba(231,85,174,1) 100%);
    border-radius: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
cardImageArea.appendChild(verified);

// => Card Content => Card Image Area :: Verified => Icon
let verifiedIcon = document.createElement("img");
verifiedIcon.setAttribute("src", "./assets/check.svg");
verifiedIcon.style.cssText += `
    width: 100%;
    height: 100%;
    max-width: 15px;
`;
verified.appendChild(verifiedIcon);

// => Card Content => Card Title
let cardTitle = document.createElement("h2");
cardTitle.setAttribute("class", "cardTitle");
cardTitle.appendChild(document.createTextNode(person.name));
cardTitle.style.cssText = fonts.cardTitle;
cardContent.appendChild(cardTitle);

// => Card Content => Card Designation
let cardDesignation = document.createElement("h3");
cardDesignation.setAttribute("class", "cardDesignation");
cardDesignation.appendChild(document.createTextNode(person.designation));
cardDesignation.style.cssText = fonts.cardSubTitle;
cardContent.appendChild(cardDesignation);

// => Card Content => Card Description
let cardDescription = document.createElement("p");
cardDescription.setAttribute("class", "cardDescription");
cardDescription.appendChild(document.createTextNode(person.description));
cardDescription.style.cssText = fonts.cardBody;
cardContent.appendChild(cardDescription);

// => Card Content => Card Button
let cardActionHireMe = document.createElement("A");
cardActionHireMe.setAttribute("href", "#");
cardActionHireMe.setAttribute("class", "cardActionHireMe");
cardActionHireMe.style.cssText = `
       display: inline-block;
       padding: 15px 50px;
       font-family: 'Poppins', sans-serif;
       font-size: 16px;
       font-weight: 400;
       line-height: 1.5;
       text-align: center;
       text-decoration: none;
       border-radius: 180px;
       background-image: linear-gradient(90deg, #7c63d5 0%, #a95dc5 50%, #e755ae 100%);
       margin-top: ${spacing.md};
       margin-bottom: ${spacing.md};
       color: ${colors.dark.button};
       transition: all .2s ease ;
       `;
cardActionHireMe.appendChild(document.createTextNode("Hire Me"));
cardContent.appendChild(cardActionHireMe);
cardActionHireMe.onmouseenter = () => {
  cardActionHireMe.style.cssText += `
  box-shadow: 0 0 .25rem #7c63d5, -.125rem -.125rem .5rem #a95dc5, .125rem .125rem .5rem #e755ae;
    `;
};
cardActionHireMe.onmouseleave = () => {
  cardActionHireMe.style.cssText += `
  box-shadow:none;
    `;
};
// => Card Content => Horizontal Line
let horizontalLine = document.createElement("hr");
horizontalLine.style.cssText = `
    width: 100%;
    height: 1px;
    background: #6272A4;
    border: none;
    opacity: .3;
    margin:15px 0px 30px ;
    `;
cardContent.appendChild(horizontalLine);

//Card => Card Container => Card Footer
let cardFooter = document.createElement("div");
cardFooter.setAttribute("class", "cardFooter");
cardFooter.style.cssText = `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${spacing.md};
    `;
cardContainer.appendChild(cardFooter);

// => Card Footer : Social Media items
let socialMediaItems = document.createElement("ul");
socialMediaItems.setAttribute("class", "socialMediaItems");
socialMediaItems.style.cssText = `
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
cardFooter.appendChild(socialMediaItems);

// => Card Footer : Social Media items :: Items Fragment
let socialMediaItemsFragment = document.createDocumentFragment();

person.social.forEach((socialMedia) => {
  let li = document.createElement("li");
  li.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing.lg};
    `;
  // :: Items Fragment => icon
  let icon = document.createElement("i");
  icon.setAttribute("class", `${socialMedia.icon}`);
  icon.style.cssText = `
    font-size: 36px;
    color: ${colors.dark.button};
    `;

  // :: Items Fragment => link
  let link = document.createElement("a");
  link.setAttribute("href", socialMedia.url);
  link.setAttribute("target", "_blank");
  link.style.cssText = `
  display: inline-block;
  padding: ${spacing.xxl};
  border-radius: 360px;
  background: ${
    socialMedia.name === "dribble"
      ? "linear-gradient(90deg, rgba(199,57,149,1) 0%, rgba(218,72,147,1) 50%, rgba(237,123,170,1) 100%)"
      : socialMedia.name === "behance"
      ? "linear-gradient(90deg, rgba(29,106,255,1) 0%, rgba(53,146,252,1) 50%, rgba(60,182,247,1) 100%)"
      : "linear-gradient(90deg, rgba(103,78,238,1) 0%, rgba(104,124,249,1) 50%, rgba(96,158,252,1) 100%)"
  };
  box-shadow: 0px 20px 50px -10px #000000;
  margin: ${spacing.sm} 0px;
  `;
  link.appendChild(icon);
  li.appendChild(link);

  // :: Items Fragment => Follower
  let follower = document.createElement("h3");
  follower.setAttribute("class", "follower");
  follower.appendChild(document.createTextNode(socialMedia.follower));
  follower.style.cssText = fonts.cardTitle;
  follower.style.cssText += `
  font-size: 30px;
  `;
  li.appendChild(follower);

  // :: Items Fragment => Follower title
  let followerTitle = document.createElement("p");
  followerTitle.setAttribute("class", "followerTitle");
  followerTitle.appendChild(document.createTextNode("Followers"));
  followerTitle.style.cssText = fonts.cardSubTitle;
  followerTitle.style.cssText += `
  margin-top: -10px;
  `;
  li.appendChild(followerTitle);

  socialMediaItemsFragment.appendChild(li);
});

socialMediaItems.appendChild(socialMediaItemsFragment);
