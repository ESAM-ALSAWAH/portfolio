import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page Description",
};

export default async function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
