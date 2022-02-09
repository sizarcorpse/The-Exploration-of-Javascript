// Main Container => Posts
let postContainer = document.createElement("div");
postContainer.setAttribute("class", "postContainer");
postContainer.style.cssText = `
width: 100%;
max-width: 700px;

`;
mainContainer.appendChild(postContainer);

// => Posts => Posts Area
let postsArea = document.createElement("div");
postsArea.setAttribute("class", "postsArea");
postsArea.style.cssText = `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: ${spacing.md};
width: 100%;
height: 100%;
padding: ${spacing["3xl"]};
overflow-y: auto;
`;
postContainer.appendChild(postsArea);

// => Posts => Posts Area => Posts No post
let postsNoPost = document.createElement("p");
postsNoPost.setAttribute("class", "postsNoPost");
postsNoPost.style.cssText = fonts.placeholder;
postsNoPost.style.cssText += `
color: ${colors.dark};
`;
postsNoPost.appendChild(document.createTextNode("No post yet"));
postsArea.appendChild(postsNoPost);

// Submit handler
cardFooterButtonSubmit.addEventListener("click", () => {
  // => Posts => Posts Area => Post
  let post = document.createElement("div");
  post.setAttribute("class", "post");
  post.style.cssText = `
        position: relative;
        top:0px;
        left:0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: ${spacing.md};
        width: 100%;
        max-width: 480px;
        padding: ${spacing.md};
        border-radius: ${spacing.md};
        background: ${colors.light};
        opacity: 0;
        transform: translateX(-700px);
        animation: onBoard 0.3s ease-in-out forwards;
`;

  // => Posts => Posts Area => Post => Post Header
  let postHeader = document.createElement("div");
  postHeader.setAttribute("class", "postHeader");
  postHeader.style.cssText = `
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: -10px;
        width: 100%;
`;
  post.appendChild(postHeader);

  // => Posts => Posts Area => Post :: post author
  let postAuthor = document.createElement("p");
  postAuthor.setAttribute("class", "postAuthor");
  postAuthor.style.cssText = fonts.primary;
  postAuthor.style.cssText += `
    font-weight: 500;
    flex-grow: 1;
`;
  postHeader.appendChild(postAuthor);

  // postHeader.appendChild(postDeleteButton);

  let postDeleteButtonIcon = document.createElement("i");
  postDeleteButtonIcon.setAttribute("class", "fas fa-times");
  postDeleteButtonIcon.style.cssText = `
  font-size: 14px;
  color: ${colors.dark};
  padding: ${spacing.md};
  background: ${colors.light};
  padding: 6px 8px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  `;
  postHeader.appendChild(postDeleteButtonIcon);

  postDeleteButtonIcon.onmouseenter = () => {
    postDeleteButtonIcon.style.cssText += `
         background-color: ${colors.colorDanger};
         color: ${colors.light};
       `;
  };
  postDeleteButtonIcon.onmouseleave = () => {
    postDeleteButtonIcon.style.cssText += `
         background-color: ${colors.light};
         color: ${colors.dark};
       `;
  };

  post.onmouseenter = () => {
    postDeleteButtonIcon.style.cssText += `
         opacity: 1;
       `;
  };
  post.onmouseleave = () => {
    postDeleteButtonIcon.style.cssText += `
          opacity: 0;
        `;
  };

  postDeleteButtonIcon.addEventListener(
    "click",
    (e) => {
      let pn = e.target.parentElement.parentElement.parentElement;
      pn.removeChild(e.target.parentElement.parentElement);

      if (postsArea.children.length === 0) {
        postsArea.appendChild(postsNoPost);
      }
    },

    false
  );

  //

  // => Posts => Posts Area => Post :: post description
  let postDescription = document.createElement("p");
  postDescription.setAttribute("class", "postDescription");
  postDescription.style.cssText = fonts.primary;
  postDescription.style.cssText += ``;
  post.appendChild(postDescription);

  // => Posts => Posts Area => Post :: horizontal line
  let postHorizontalLine = cardHorizontalLine.cloneNode();
  postHorizontalLine.setAttribute("class", "postHorizontalLine");
  postHorizontalLine.style.cssText += `
  margin: ${spacing.xxs} 0;
  `;
  post.appendChild(postHorizontalLine);

  // => Posts => Posts Area => Post :: footer

  let postFooter = cardOptionsArea.cloneNode();
  postFooter.setAttribute("class", "postFooter");
  postFooter.style.cssText += `
  justify-content: flex-end;
  gap: ${spacing.xs};
  `;
  post.appendChild(postFooter);

  // => Posts => Posts Area => Post :: footer =>  Button love
  let postFooterButtonLove = cardOptionsButtonImage.cloneNode();
  postFooterButtonLove.setAttribute("class", "postFooterButtonLove");
  postFooterButtonLove.style.cssText += ``;
  postFooter.appendChild(postFooterButtonLove);

  // => Posts => Posts Area => Post :: footer =>  Button love :: love icon
  let postFooterButtonLoveIcon = cardOptionsButtonImageIcon.cloneNode();
  postFooterButtonLoveIcon.setAttribute("class", "far fa-heart");
  postFooterButtonLoveIcon.style.cssText += ``;
  postFooterButtonLove.appendChild(postFooterButtonLoveIcon);

  // => Posts => Posts Area => Post :: footer =>  Button share
  let postFooterButtonShare = cardOptionsButtonImage.cloneNode();
  postFooterButtonShare.setAttribute("class", "postFooterButtonShare");
  postFooterButtonShare.style.cssText += ``;
  postFooter.appendChild(postFooterButtonShare);

  // => Posts => Posts Area => Post :: footer =>  Button share :: share icon
  let postFooterButtonShareIcon = cardOptionsButtonImageIcon.cloneNode();
  postFooterButtonShareIcon.setAttribute("class", "fas fa-share");
  postFooterButtonShareIcon.style.cssText += ``;
  postFooterButtonShare.appendChild(postFooterButtonShareIcon);

  // => Posts => Posts Area => Post :: footer =>  Button comment
  let postFooterButtonComment = cardOptionsButtonImage.cloneNode();
  postFooterButtonComment.setAttribute("class", "postFooterButtonComment");
  postFooterButtonComment.style.cssText += ``;
  postFooter.appendChild(postFooterButtonComment);

  // => Posts => Posts Area => Post :: footer =>  Button comment :: comment icon
  let postFooterButtonCommentIcon = cardOptionsButtonImageIcon.cloneNode();
  postFooterButtonCommentIcon.setAttribute("class", "far fa-comment");
  postFooterButtonCommentIcon.style.cssText += ``;
  postFooterButtonComment.appendChild(postFooterButtonCommentIcon);

  // States

  // if (state.descriptions.length >= 5) {
  postAuthor.innerText = state.name
    ? state.name.toLowerCase().trim().replaceAll(" ", "")
    : "@anonymous";
  postDescription.innerText = state.descriptions;
  postsArea.appendChild(post);
  // }

  postsArea.lastElementChild.scrollIntoView({
    behavior: "smooth",
  });

  // no post

  if (post.parentElement.children.length != 0) {
    postsArea.removeChild(postsNoPost);
  }
  state.descriptions = "";
  cardTextarea.value = "";
  state.name = "";
  createCardCreatorName.value = "";
});
