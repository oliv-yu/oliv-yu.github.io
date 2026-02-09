"use client";

import React from "react";
import First from "./original/index";
import Second from "./second";
import DecorativeAura from "./second/DecorativeAura";
import ScrollProgress from "./second/ScrollProgress";
import Pointer from "./second/Pointer";
// import "./globals.css";

export default function Page() {
  return (
    <>
      {/* <Pointer /> */}

      {/* <DecorativeAura /> */}

      {/* <ScrollProgress /> */}

      <Second />

      <First />
    </>
  );
}
