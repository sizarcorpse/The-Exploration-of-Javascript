// Document Setting

let metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "utf-8");
document.head.appendChild(metaCharset);

let metaHttpEquiv = document.createElement("meta");
metaHttpEquiv.setAttribute("http-equiv", "X-UA-Compatible");
metaHttpEquiv.setAttribute("content", "IE=edge");
document.head.appendChild(metaHttpEquiv);

let metaViewPost = document.createElement("meta");
metaViewPost.setAttribute("name", "viewport");
metaViewPost.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(metaViewPost);

let preconnect = document.createElement("link");
preconnect.setAttribute("rel", "preconnect");
preconnect.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(preconnect);

let preconnect2 = document.createElement("link");
preconnect2.setAttribute("rel", "preconnect");
preconnect2.setAttribute("href", "https://fonts.gstatic.com");
preconnect2.setAttribute("crossorigin", "");
document.head.appendChild(preconnect2);

let fontAwesome = document.createElement("link");
fontAwesome.setAttribute("rel", "stylesheet");
fontAwesome.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
);
fontAwesome.setAttribute(
  "integrity",
  "sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
);
fontAwesome.setAttribute("crossorigin", "anonymous");
fontAwesome.setAttribute("referrerpolicy", "no-referrer");
document.head.appendChild(fontAwesome);

let gFonts = document.createElement("link");
gFonts.setAttribute("rel", "stylesheet");
gFonts.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
);
document.head.appendChild(gFonts);

document.title = "Experiment 3";
// Colors
let colors = {
  light: "#F3F3F4",
  dark: "#1A2346",
  lightBlue: "#2152DE",
  lightGray: "#BCB4C4",
  deepGray: "#A7AABF",
  darkGrey1: "#858C9C",
  darkGrey2: "#848494",
  colorDanger: "#F44336",
};

// Fonts
let fonts = {
  placeholder: `
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5em;
    letter-spacing: normal;
    color: ${colors.lightGray};
    `,
  primary: `
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5em;
    letter-spacing: normal;
    color: ${colors.lightGray};
 `,
};

// Spacing

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "28px",
  xxl: "36px",
  ["3xl"]: "48px",
};

//state

let state = {
  name: "",
  descriptions: "",
};
