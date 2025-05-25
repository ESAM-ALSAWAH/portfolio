import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "Works",
};

export default async function Works() {
  return (
    <div className="grid place-items-center h-[calc(100vh-200px)]">
      <h1 className="text-foreground-secondary uppercase">Comming Soon</h1>
    </div>
  );
}
