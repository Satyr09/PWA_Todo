let shareImageButton = document.querySelector("#share-image-button");
let cardArea = document.querySelector("#card-area");
let form = document.querySelector("form");
let titleInput = document.querySelector("#title");
let locationInput = document.querySelector("#location");
let descriptionInput = document.querySelector("#description");
let createPostArea = document.querySelector("#create-post");
let closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

function createCard(data) {
  console.log(data);
  let cardWrapper = document.createElement("div");
  cardWrapper.className = "card-area-card mdl-card mdl-shadow--2dp";
  let cardTitle = document.createElement("div");
  cardTitle.className = "mdl-card__title";
  cardTitle.style.backgroundImage = "url(" + data.image + ")";
  cardTitle.style.backgroundSize = "cover";
  cardTitle.style.height = "100px";
  cardWrapper.appendChild(cardTitle);
  let cardTitleTextElement = document.createElement("h2");
  cardTitleTextElement.style.color = "white";
  cardTitleTextElement.className = "mdl-card__title-text";
  cardTitleTextElement.textContent = data.title;
  cardTitle.appendChild(cardTitleTextElement);
  let cardSupportingText = document.createElement("div");
  cardSupportingText.className = "mdl-card__supporting-text";
  cardSupportingText.textContent = data.description;
  cardSupportingText.style.textAlign = "center";

  let cardSupportingText2 = document.createElement("div");
  cardSupportingText2.className = "mdl-card__supporting-text";
  cardSupportingText2.textContent = data.location;
  cardSupportingText2.style.textAlign = "center";

  /*let cardSavebutton = document.createElement("button");
  cardSavebutton.textContent = "Save";
  cardSavebutton.addEventListener("click", onSaveBtnClicked);
  cardSupportingText.appendChild(cardSavebutton);*/
  cardWrapper.appendChild(cardSupportingText);
  cardWrapper.appendChild(cardSupportingText2);

  componentHandler.upgradeElement(cardWrapper);
  cardArea.appendChild(cardWrapper);
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);

let post = {
  title: "A card",
  description: "A description",
  location: "A location"
};

fetch("https://httpbin.org/get")
  .then(res => {
    createCard(post);
  })
  .catch(err => console.log("Network Error", err));
