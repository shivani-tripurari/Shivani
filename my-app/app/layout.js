"use client";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "black",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        {children}

        {/* Custom cursor */}
        <motion.div
          className="cursor hidden md:block lg:block"
          variants={variants}
          animate={cursorVariant}
          transition={{ ease: "easeOut", duration: 0.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 24,
            width: 24,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.5)",
            pointerEvents: "none", // Prevents cursor from interacting with elements
            zIndex: 9999, // Ensures the cursor stays on top
          }}
        />
      </body>
    </html>
  );
}
