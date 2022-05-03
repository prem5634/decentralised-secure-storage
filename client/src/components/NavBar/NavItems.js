import React from 'react'
import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./../dashboard",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Files",
    path: "./../storeHouse",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
];