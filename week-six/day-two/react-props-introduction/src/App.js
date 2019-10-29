import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
export default function App() {
  const headerInfo = {
    companyName: "BrainStation 2.0",
    links: ["Home", "About", "Courses", "Contact Us"]
  };
  function onClick(event) {
    event.preventDefault();
    console.log(event.target.innerText);
  }
  return (
    <div>
      <Header onClick={onClick} headerInfo={headerInfo} />
      <MainContent />
      <Footer />
    </div>
  );
}
