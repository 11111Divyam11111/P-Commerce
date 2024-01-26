import React from "react";
import Card from "./Andar/Card.js";
import Footer from "./Footer";
import Getapp from "./Getapp";
import Mid from "./Mid.js";
import Navbar from "./Navbar.jsx";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Card /> */}
      <Mid />
      <Getapp />
      <Footer />
    </div>
  );
}
