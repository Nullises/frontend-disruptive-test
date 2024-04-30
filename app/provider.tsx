"use client";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function LayoutProvider({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
