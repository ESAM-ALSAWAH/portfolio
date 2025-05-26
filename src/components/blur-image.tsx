"use client";
import NextImage, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

function toBase64(imgUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enables reading pixels from external sources
    img.src = imgUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Canvas context not available");

      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg"); // or 'image/png'
      resolve(dataURL);
    };

    img.onerror = () => reject("Failed to load image");
  });
}

export const BlurImage = (props: ImageProps) => {
  const [base64, setBase64] = useState<string | null>(null);

  useEffect(() => {
    if (typeof props.src !== "string") return;

    toBase64(props.src)
      .then((b64) => setBase64(b64))
      .catch((err) => {
        console.warn("Unable to convert image to base64:", err);
      });
  }, [props.src]);

  return (
    <NextImage
      {...props}
      {...(base64 && {
        placeholder: "blur",
        blurDataURL: base64,
      })}
    />
  );
};
