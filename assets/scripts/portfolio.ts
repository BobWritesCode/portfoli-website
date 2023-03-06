export type Portfolio = {
  name: string;
  badges: string[];
  description: string;
  imageURL: string;
  imageAlt: string;
  repoURL: string;
  liveURL: string;
};

// Blank, ready to be used
// {
//   name: '',
//   badges: [],
//   description: '',
//   imageURL: '',
//   imageAlt: '',
//   repoURL:'',
//   liveURL:'',
// },

export const portfolio = [
  {
    name: "Gamer's-verse",
    badges: [
      "Full Stack",
      "Django",
      "Python",
      "SQL",
      "BootStrap",
      "JavaScript",
      "JQuery",
      "CSS",
      "HTML",
      "GitHub",
      "Git",
    ],
    description:
      "Full Stack website, implementing user login and email verification. This site also uses an API to upload images to a image hosting service.",
    imageURL: "./assets/imgs/germersverse.webp",
    imageAlt: "Gamer's-verse website snapshot.",
    repoURL: "https://github.com/BobWritesCode/server-directory-website",
    liveURL: "https://server-directory-website.herokuapp.com/",
  },
  {
    name: "WARWICK HART.developer();",
    badges: [
      "TypeScript",
      "JavaScript",
      "JQuery",
      "BootStrap",
      "CSS",
      "HTML",
      "Github",
      "Git",
    ],
    description:
      "The website you are currently on was built by me. The purpose of this website is to showcase my portfolio and be a one stop shop to finding all relevant information about me as a developer.",
    imageURL: "./assets/imgs/warwick-hart-developer.webp",
    imageAlt: "WARWICK HART.developer website snapshot.",
    repoURL: "https://github.com/BobWritesCode/portfoli-website",
    liveURL: "https://bobwritescode.github.io/portfoli-website/",
  },
  {
    name: "Hotdog Empire Tycoon",
    badges: ["Python", "API", "HeroKu", "GitHub", "Git"],
    description:
      "A fun game about trying to create a hotdog empire within 10 days (20 game cycles in total). It is created using Python and currently deployed on Heroku. It also uses an API with Google to store game data and a fully functioning leaderboard.",
    imageURL: "./assets/imgs/hotdog-empire-tycoon.webp",
    imageAlt: "Hotdog Empire Tycoon game snapshot.",
    repoURL: "https://github.com/BobWritesCode/ci-Project3",
    liveURL: "https://hotdog-empire-tycoon.herokuapp.com/",
  },
  {
    name: "Why Choose Popcorn?",
    badges: ["HTML", "CSS", "GitHub", "Git"],
    description:
      "Fictional website built as my first project. The website is to showcase using HTML and CSS to create a fully responsive website regardless the screen size (down to 320px width that is!).",
    imageURL: "./assets/imgs/why-choose-popcorn.webp",
    imageAlt: "Why Choose Popcorn website snapshot.",
    repoURL: "https://github.com/BobWritesCode/ci-Project1",
    liveURL: "https://bobwritescode.github.io/ci-Project1",
  },
  {
    name: "Random Result Generator",
    badges: ["JavaScript", "HTML", "CSS", "GitHub", "Git"],
    description:
      "If you are looking for a Random Result Generator? Then look no further! Originally created as a project for my diploma, once the final assessment is done I plan to come back and make this project shine even more.",
    imageURL: "./assets/imgs/random-result-generator.webp",
    imageAlt: "Random Result Generator website snapshot.",
    repoURL: "https://github.com/BobWritesCode/ci-Project2",
    liveURL: "https://bobwritescode.github.io/ci-Project2",
  },
];
