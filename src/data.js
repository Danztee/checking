import {
  Airpods,
  Iphone,
  Laptop,
  Suit,
  Sneakers,
  Sneakers2,
  Sneakers3,
  Profile,
  Profile2,
  Profile3,
} from "./assets";
import { BsPhone } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { HiArrowsExpand } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { MdOutlineSportsHandball } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";

export const slideData = [
  {
    id: 1,
    category: "Accessories",
    img: Iphone,
  },
  {
    id: 2,
    category: "Accessories",
    img: Airpods,
  },
  {
    id: 3,
    category: "Accessories",
    img: Laptop,
  },
  {
    id: 4,
    category: "Gents",
    img: Suit,
  },
  {
    id: 5,
    category: "Gents",
    img: Suit,
  },
  {
    id: 6,
    category: "Accessories",
    img: Iphone,
  },
  {
    id: 7,
    category: "Accessories",
    img: Airpods,
  },
  {
    id: 8,
    category: "Accessories",
    img: Laptop,
  },
  {
    id: 9,
    category: "Gents",
    img: Suit,
  },
  {
    id: 10,
    category: "Gents",
    img: Suit,
  },
];

export const productData = [
  {
    id: 1,
    name: "lorem ipsum",
    price: 6000,
    rating: 4.5,
    img: Sneakers,
    favorite: false,
  },
  {
    id: 2,
    name: "lorem ipsum",
    price: 6000,
    rating: 4.5,
    img: Sneakers2,
    favorite: false,
  },
  {
    id: 3,
    name: "lorem ipsum",
    price: 6000,
    rating: 4.5,
    img: Sneakers3,
    favorite: false,
  },
];

export const data = {
  resources: [
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/any",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/architecture",
    },

    {
      title: "Super item number the last",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/any",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/architecture",
    },

    {
      title: "Super item number the last",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
  ],
};

export const topSellersData = [
  {
    name: "Wittig  lyon",
    image: Profile,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit",
    post: 300,
  },
  {
    name: "Muhamma Idris",
    image: Profile2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit",
    post: 300,
  },
  {
    name: "lora john",
    image: Profile3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit",
    post: 300,
  },
];

export const navLinkData = [
  {
    name: "Phone and Gadgets",
    link: "/products/phones",
    icon: BsPhone,
  },
  {
    name: "Electronics",
    link: "/products/electronics",
    icon: MdElectricalServices,
  },
  {
    name: "Computing",
    link: "/products/computing",
    icon: RiComputerLine,
  },
  {
    name: "Accessories",
    link: "/products/accessories",
    icon: HiArrowsExpand,
  },
  {
    name: "Gents",
    link: "/products/gents",
    icon: IoShirtOutline,
  },
  {
    name: "Ladies",
    link: "/products/ladies",
    icon: IoWomanOutline,
  },
  {
    name: "Sports",
    link: "/products/sports",
    icon: MdOutlineSportsHandball,
  },
  {
    name: "Kids",
    link: "/products/kids",
    icon: TbMoodKid,
  },
  {
    name: "Others",
    link: "/products/others",
    icon: AiOutlineArrowRight,
  },
];
