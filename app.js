console.log("My gallery is awesome");

let images = [
  {
    src: "./images/surly1.jpg",
    alt: "an orange bike",
  },
  {
    src: "./images/surly2.jpg",
    alt: "a bike with storage",
  },
  {
    src: "./images/surly3.jpg",
    alt: "green bike in a forest",
  },
  {
    src: "./images/surly4.jpg",
    alt: "green bike",
  },
  {
    src: "./images/surly5.jpg",
    alt: "brown bike in desert",
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

let currentIndex = 0;

function showImage(index) {
  mainBackgroundContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = images[index].src;
  image.alt = images[index].alt;
  mainBackgroundContainer.appendChild(image);
}

// Left arrow button
document.getElementById("leftArrow").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Right arrow button
document.getElementById("rightArrow").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
