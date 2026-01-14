"use client";
import { motion } from "framer-motion";
import React from "react";
import "./sliderToBaner.css"

export default function SlideSimple() {
  const items = [
    { img: "/imgBegScren/5d8cf516bfe51c6c3983bcc1f95780265dd24de8.jpg", title: "BBQ / Grill" },
    { img: "/imgBegScren/66dbdd1a90f272b963c181e52ee8388f6717cc15.jpg", title: "Pizza" },
    { img: "/imgBegScren/3a8c535f9c5df9027a70aa66cbfe84097ab568a0.png", title: "Burgers" },
    { img: "/imgBegScren/f8ead954baca9f2a38ce8bdf361f40696c5a83b1.jpg", title: "Seafood" },
    { img: "/imgBegScren/Ellipse 214.png", title: "Desserts" },
    { img: "/imgBegScren/Ellipse 215.png", title: "Healthy" },
    { img: "/imgBegScren/9bb70014847171efae7ac8a160e0a3a3d92e976f.png", title: "Drinks / Café" },
  ];

  const sliderVariants = {
    animate: {
      x: ["0%", "-50%"], // يتحرك من اليمين لليسار
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div data-aos="fade-up" className="sliderSimple-section">
      <motion.div className="sliderSimple-track" variants={sliderVariants} animate="animate">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="sliderSimple-item">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
