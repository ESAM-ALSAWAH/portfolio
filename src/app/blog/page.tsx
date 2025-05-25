import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs",
};

export default async function Blogs() {
  return (
    <div className="grid place-items-center h-[calc(100vh-200px)]">
      <h1 className="text-foreground-secondary uppercase">
        Comming Soon
      </h1>
    </div>
  );
}
