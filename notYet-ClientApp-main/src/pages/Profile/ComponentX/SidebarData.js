import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Account Overview",
    path: "/profile/Account Overview",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Submissions",
    path: "/profile/Submissions",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Enrolled Teams",
    path: "/profile/Enrolled Teams",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
