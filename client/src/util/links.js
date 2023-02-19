import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const links = [
  {
    id: 1,
    icon: <FaSearch />,
    name: "Search",
    path: "/",
  },
  {
    id: 2,
    icon: <FaPlus />,
    name: "Create",
    path: "/create",
  },
  {
    id: 2,
    icon: <RiContactsLine />,
    name: "Contacts",
    path: "/contacts",
  },
  {
    id: 3,
    icon: <AiOutlineStar />,
    name: "Saved",
    path: "/saved",
  },
];

export default links