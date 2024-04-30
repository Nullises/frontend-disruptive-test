"use client";
import React from "react";

import Image from "next/image";
import {
  Button,
  Input,
  Select,
  Option,
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

const Nav = ({ username, avatarUrl, onSignOut }: any) => {
  const [openNav, setOpenNav] = React.useState(false);

  const toggleOpen = () => setOpenNav((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex display: inline-block items-center">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 mr-2 mt-1"
          >
            <Image
              width={50}
              height={50}
              alt="cf-logo"
              src="/disruptor.png"
            ></Image>
          </Typography>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Disruptor
          </Typography>
        </div>
        <div className="justify-self-end flex display: inline-block items-center gap-2">
          <Avatar src={avatarUrl} alt="avatar" />
          <Typography
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            {username}
          </Typography>
          <IconButton
            onClick={onSignOut}
            size="md"
            className="rounded-full bg-white-100"
          >
            <img src="/logout.svg" width={20} height={20} alt="logout" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
