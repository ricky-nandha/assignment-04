console.log("My gallery is awesome");

let images = [
  {
    src: "./images/surly1.jpg",
    alt: "an orange fat bike",
  },
  {
    src: "./images/surly2.jpg",
    alt: "a bike-packing bike",
  },
  {
    src: "./images/surly3.jpg",
    alt: "green bike in a forest",
  },
  {
    src: "./images/surly4.jpg",
    alt: "green bike in a forest",
  },
  {
    src: "./images/surly5.jpg",
    alt: "green bike in a forest",
  },
];

const thumbnailContainer = document.getElementById("thumbnailsContainer");
const mainBackgroundContainer = document.getElementById(
  "backgroundImageContainer"
);

images.forEach(function (individualImage) {
  const myNewImg = document.createElement("img");
  myNewImg.src = individualImage.src;

  myNewImg.addEventListener("click", function () {
    mainBackgroundContainer.innerHTML = "";

    console.log("ive been clicked");
    console.log("we have access to this:", individualImage);
    const backgroundImage = document.createElement("img");
    backgroundImage.src = individualImage.src;
    mainBackgroundContainer.appendChild(backgroundImage);
  });

  thumbnailContainer.appendChild(myNewImg);
});
