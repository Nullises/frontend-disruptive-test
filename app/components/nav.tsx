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
} from "@material-tailwind/react";

const Nav = ({}) => {
  const [openNav, setOpenNav] = React.useState(false);

  const toggleOpen = () => setOpenNav((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
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
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Disruptor
          </Typography>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
