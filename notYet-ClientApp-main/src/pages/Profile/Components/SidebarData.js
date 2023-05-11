import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Account Overview",
    path: "/home/profile/Account Overview",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Submissions",
    path: "/home/profile/Submissions",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Enrolled Teams",
    path: "/home/profile/Enrolled Teams",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Account Data",
    path: "/home/profile/Account Data",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
