export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/handmade-crafts", label: "Handmade Crafts" },
  { href: "/our-servants", label: "Our Servants" },
  { href: "/contact", label: "Contact Us" },
];

// Imports of the Servants images
import ma2ar from "../assets/servants/abona.jpg";
import carol from "../assets/servants/carol.jpg";
import andria from "../assets/servants/andria.jpg";
import angel from "../assets/servants/angel.jpg";
import bishoy from "../assets/servants/bishoy.jpg";
import gaby from "../assets/servants/gaby.jpg";
import george from "../assets/servants/george.jpg";
import helana from "../assets/servants/helana.jpg";
import karen from "../assets/servants/karen.jpg";
import mariaMorcos from "../assets/servants/mariaMorcos.jpg";
import mariam from "../assets/servants/mariam.jpg";
import mark from "../assets/servants/mark.jpg";
import marshilino from "../assets/servants/marshilino.jpg";
import martina from "../assets/servants/martina.jpg";
import marvy from "../assets/servants/marvy.jpg";
import meray from "../assets/servants/meray.jpg";
import mina from "../assets/servants/mina.jpg";
import mriam from "../assets/servants/mriam.jpg";
import rita from "../assets/servants/rita.jpg";
import ritageorge from "../assets/servants/ritageorge.jpg";
import sandra from "../assets/servants/sandra.jpg";
import silvia from "../assets/servants/silvia.jpg";
import marly from "../assets/servants/marly.jpg";
import mary from "../assets/servants/mary.jpg";
import martinaAdel from "../assets/servants/martinaAdel.jpg";
import veronica from "../assets/servants/veronica.jpg";
import pola from "../assets/servants/pola.jpg";
import andrew from "../assets/servants/andrew.jpg";
import youstina from "../assets/servants/youstina.jpg";
import makrious from "../assets/servants/makrious.png";
// import marina from "../assets/servants/marina.jpg";
// import mirna from "../assets/servants/mirna.jpg";
// import verina from "../assets/servants/verina.jpg";
// import monica from "../assets/servants/monica.jpg";
// import christina from "../assets/servants/christina.jpg";
// import joyce from "../assets/servants/joyce.jpg";
// import markMamdouh from "../assets/servants/markMamdouh.jpg";
// import markMichael from "../assets/servants/markMichael.jpg";
// import youliana from "../assets/servants/youliana.jpg";
// import mirette from "../assets/servants/mirette.jpg";
//---------------------

import { servant } from "../interfaces/index";
export const servants: servant[] = [
  { id: 1, name: "Youstina Micheal", image: youstina },
  { id: 2, name: "Veronica Osama", image: veronica },
  { id: 3, name: "Silvia Samy", image: silvia },
  { id: 4, name: "Sandra Morcos", image: sandra },
  { id: 5, name: "Rita Sameh", image: rita },
  { id: 6, name: "Rita George", image: ritageorge },
  { id: 7, name: "Pola Magdy", image: pola },
  { id: 8, name: "Mriam Mansour", image: mriam },
  { id: 9, name: "Mina Morcos", image: mina },
  { id: 10, name: "Mariam Hosny", image: mariam },
  { id: 11, name: "Meray Rawy", image: meray },
  { id: 12, name: "Marvy Yousry", image: marvy },
  { id: 13, name: "Mary Mina", image: mary },
  { id: 14, name: "Marshilino Hyman", image: marshilino },
  { id: 15, name: "Martina Hyman", image: martina },
  { id: 16, name: "Martina Adel", image: martinaAdel },
  { id: 17, name: "Mark Aziz", image: mark },
  { id: 18, name: "Makrious Ayman", image: makrious },
  { id: 19, name: "Marly Magdy", image: marly },
  { id: 20, name: "Maria Morcos", image: mariaMorcos },
  { id: 21, name: "Karen Adel", image: karen },
  { id: 22, name: "Helana Milad", image: helana },
  { id: 23, name: "George Wael", image: george },
  { id: 24, name: "Gabriella Bishara", image: gaby },
  { id: 25, name: "Father Makar", image: ma2ar },
  { id: 26, name: "Caroline Nazeh", image: carol },
  { id: 27, name: "Bishoy Nageh", image: bishoy },
  { id: 28, name: "Angel Nader", image: angel },
  { id: 29, name: "Andrew Aziz", image: andrew },
  { id: 30, name: "Andria Nagy", image: andria },
  // {
  //   id: 9,
  //   name: "Marina Micheal",
  //   image: marina,
  // },
  // {
  //   id: 9,
  //   name: "Monica Osama",
  //   image: monica,
  // },
  // {
  //   id: 9,
  //   name: "Mirna Cherif",
  //   image: mirna,
  // },
  // {
  //   id: 9,
  //   name: "Verina Ashraf",
  //   image: verina,
  // },
  // {
  //   id: 9,
  //   name: "Christina Adel",
  //   image: christina,
  // },
  // {
  //   id: 9,
  //   name: "Joyce Fathy",
  //   image: joyce,
  // },
  // {
  //   id: 9,
  //   name: "Mark Micheal",
  //   image: markMichael,
  // },
  // {
  //   id: 9,
  //   name: "Mark Mamdouh",
  //   image: markMamdouh,
  // },
  // {
  //   id: 9,
  //   name: "Mirette Emad",
  //   image: mirette,
  // },
  // {
  //   id: 9,
  //   name: "Youliana Maged",
  //   image: youliana,
  // },
];

import { handcraft } from "../interfaces/index";
export const handcrafts: handcraft[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    title: "Macrame Wall Hanging",
    description:
      "Learn how to create beautiful macrame wall hangings with simple knots and natural cotton rope. Perfect for beginners looking to add bohemian charm to their home decor.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    title: "Hand-Painted Ceramic Bowls",
    description:
      "Discover the art of ceramic painting and create stunning decorative bowls. This tutorial covers glazing techniques and firing processes for beautiful results.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    title: "Knitted Cozy Blanket",
    description:
      "Master the basics of knitting while creating a warm, cozy blanket perfect for cold evenings. Includes tips for choosing yarn and maintaining consistent tension.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=400",
    title: "Wooden Jewelry Box",
    description:
      "Build a beautiful wooden jewelry box from scratch using basic woodworking tools. Learn about wood selection, joinery techniques, and finishing touches.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=400",
    title: "Embroidered Tote Bag",
    description:
      "Transform a plain canvas tote bag into a work of art with hand embroidery. Perfect project for learning different stitching techniques and patterns.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=400",
    title: "Polymer Clay Earrings",
    description:
      "Create unique and colorful earrings using polymer clay. This tutorial covers sculpting, texturing, baking, and finishing techniques for professional results.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
