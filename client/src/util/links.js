import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

const links = [
  {
    id: 1,
    icon: <FaSearch />,
    name: "search",
    path: "/",
  },
  {
    id: 2,
    icon: <RiContactsLine />,
    name: "contacts",
    path: "/contacts",
  },
  {
    id: 3,
    icon: <AiOutlineStar />,
    name: "saved",
    path: "/saved",
  },
];

export default links