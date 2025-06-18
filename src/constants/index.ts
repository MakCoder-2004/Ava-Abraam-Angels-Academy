export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/handmade-crafts", label: "Handmade Crafts" },
  { href: "/our-servants", label: "Our Servants" },
  { href: "/contact", label: "Contact Us" },
];

import { servant } from "../interfaces/index";
export const servants: servant[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/placeholder.svg?height=300&width=300",
  },
  { id: 4, name: "David Kim", image: "/placeholder.svg?height=300&width=300" },
  {
    id: 5,
    name: "Jessica Thompson",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Alex Martinez",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Rachel Green",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "James Wilson",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "Lisa Anderson",
    image: "/placeholder.svg?height=300&width=300",
  },
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
