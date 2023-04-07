import countrySearch from "../../public/projects/country-search-challenge.png";
import cyphercresent from "../../public/projects/cyphercrescent.png";
import delta7 from "../../public/projects/delta7.png";
import mcholly from "../../public/projects/mc-holly.png";
import pexelsclone from "../../public/projects/pexels-clone-tesst.png";
import unsplash from "../../public/projects/unsplash-gallery-vue.png";
import untitled from "../../public/projects/untitled-ui-nuxt.png";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/#about",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    url: "/#contact",
  },
];

export const projects = [
  {
    id: 1,
    name: "CypherCrescent",
    description: "A Business Website",
    link: "https://cyphercrescentlearning.com/",
    stack: ["ReactJS", "Bootstrap"],
    background: cyphercresent,
  },
  {
    id: 2,
    name: "MC Holly",
    description: "A Site for comedy Reservation",
    link: "https://www.mcholly.com/",
    stack: ["NextJS", "Tailwind CSS"],
    background: mcholly,
  },
  {
    id: 3,
    name: "Pexel Clone",
    description:
      "A clone of the pexel application. Users can search for images",
    link: "https://pexels-clone-test.netlify.app",
    stack: ["NuxtJS", "Tailwind CSS"],
    background: pexelsclone,
  },
  {
    id: 4,
    name: "delta7",
    description: "A website for NFT for a project",
    link: "https://delta7.netlify.app",
    stack: ["ReactJS", "Bootstrap"],
    background: delta7,
  },
  {
    id: 5,
    name: "Unsplash Gallery",
    description: "A test project to build a dashboard",
    link: "https://unsplash-gallery-test.netlify.app",
    stack: ["VueJS", "Bootstrap"],
    background: unsplash,
  },
  {
    id: 6,
    name: "Untitled UI Dashboard",
    description: "A test project to build a dashboard",
    link: "https://untitled-ui-nuxt.netlify.app",
    stack: ["NuxtJS", "Bootstrap"],
    background: untitled,
  },
  {
    id: 7,
    name: "Country Search Challenge",
    description:
      "An application to display countries and also search for countries",
    link: "https://country-search-challenge.netlify.app",
    stack: ["HTML", "Bootstrap", "Javascript"],
    background: countrySearch,
  },
  {
    id: 8,
    name: "Developer portfolio",
    description:
      "A developers portfolio. This is basically a way for the developer to be able to sell himself. It's a lovely combination of everything",
    link: "https://silver-lining.netlify.app",
    stack: ["VueJS", "Bootstrap"],
    background: cyphercresent,
  },
];
