const data = [
  {
    id: "mechanics",
    title: "Mechanics",
    content:
      "Mechanics plays a crucial role in understanding the physical behavior of drilling equipment and fluid flow in reservoirs.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Mechanics Image",
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    content:
      "Thermodynamics helps in analyzing the heat and energy transformations in petroleum extraction and processing.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Thermodynamics Image",
  },
  {
    id: "electricity-magnetism",
    title: "Electricity and Magnetism",
    content:
      "Electricity and magnetism are essential in geophysical exploration methods such as electromagnetic surveys.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Electricity and Magnetism Image",
  },
  {
    id: "optics",
    title: "Optics",
    content:
      "Optics, including laser technologies, is used for precision measurements and analysis in various applications.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Optics Image",
  },
  {
    id: "modern-physics",
    title: "Modern Physics",
    content:
      "Modern physics theories are applied to understand the quantum mechanical behavior of hydrocarbons at the molecular level.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Modern Physics Image",
  },
  {
    id: "machine-learning",
    title: "Machine Learning Algorithms",
    content:
      "Machine learning algorithms enhance the interpretation of complex data sets, improving predictions and decision-making in exploration and development.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Machine Learning Algorithms Image",
  },
  {
    id: "contents",
    title: "Contents",
    content:
      "Here you can find all the detailed information about each section and topic discussed.",
    imageSrc: "assets/images/geology.jpg",
    alt: "Contents Image",
  },
  {
    id: "references",
    title: "References",
    content:
      "A list of references and resources for further reading and exploration of the topics covered.",
    imageSrc: "assets/images/geology.jpg",
    alt: "References Image",
  },
];

const dataContainer = document.getElementById("data-container");

data.forEach((item) => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");

  const image = document.createElement("img");
  image.src = item.imageSrc;
  image.alt = item.alt;
  containerCard.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const h2 = document.createElement("h2");
  h2.textContent = item.title;
  cardBody.appendChild(h2);

  const content = document.createElement("div");
  content.textContent = item.content;
  cardBody.appendChild(content);

  containerCard.appendChild(cardBody);

  dataContainer.appendChild(containerCard);
});

// header
// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.querySelector(".body-header");
//   nav.classList.add("slide-out"); // Sembunyikan nav saat halaman dimuat

//   const toggleButton = document.getElementById("toggleButton");
//   const body = document.body;

//   toggleButton.addEventListener("click", function () {
//     body.classList.toggle("show-nav"); // Toggle show-nav class on body

//     if (nav.classList.contains("slide-out")) {
//       nav.classList.remove("slide-out");
//       nav.classList.add("slide-in");
//     } else {
//       nav.classList.remove("slide-in");
//       nav.classList.add("slide-out");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".body-header");
  nav.classList.add("slide-out"); // Sembunyikan nav saat halaman dimuat

  const defaultClick = document.querySelector(".default");
  const closeClick = document.querySelector(".closed");
  const body = document.body;

  defaultClick.addEventListener("click", function () {
    body.classList.toggle("show-nav"); // Toggle show-nav class on body

    if (nav.classList.contains("slide-out")) {
      nav.classList.remove("slide-out");
      nav.classList.add("slide-in");
      defaultClick.style.display = "none";
      closeClick.style.display = "block";
    }
  });

  closeClick.addEventListener("click", function () {
    body.classList.toggle("show-nav");
    if (nav.classList.contains("slide-in")) {
      nav.classList.remove("slide-in");
      nav.classList.add("slide-out");
      closeClick.style.display = "none";
      defaultClick.style.display = "block";
    }
  });
});
