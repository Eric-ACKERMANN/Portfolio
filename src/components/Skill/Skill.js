import React from "react";
import "./index.css";

export default function Skill({ logo, text, className }) {
  console.log(className);
  return (
    <div className={className}>
      <span>{logo}</span>
      <span>{text}</span>
    </div>
  );
}
