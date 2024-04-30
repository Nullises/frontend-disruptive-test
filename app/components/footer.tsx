"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
const Footer = ({}) => {
  return (
    <footer className="flex flex-col justify-center border-t border-blue-gray-50 py-6">
      <Link
        className="flex items-center gap-1 text-current"
        href="https://github.com/Nullises"
        title="Nullises Github"
      >
        <span className="text-default-600">Made with ❤️ by</span>
        <p className="text-purple-600">Nullises</p>
      </Link>
    </footer>
  );
};

export default Footer;
