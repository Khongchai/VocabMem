import React from "react";
import Starfield from "./svgComponents/Starfield";
import Background from "./svgComponents/Background";
import Cat from "./svgComponents/Cat";
import Pencil from "./svgComponents/Pencil";
import Book from "./svgComponents/Book";
export default function CatSVG() {
  return (
    <svg
      width="100%"
      viewBox="0 0 785 835"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Background />
      <Starfield />
      <Cat />
      <Pencil />
      <Book />
    </svg>
  );
}
