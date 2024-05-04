import { useState } from "react";
import "../App.css";
import Login from "../Component/login";

const PageLogin = () => {
  const circleStyle = {
    position: "absolute",
    width: "580px",
    height: "580px",
    borderRadius: "50%",
    top: "53%",
    left: "58.5%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F0F0F0",
    border: "2px solid rgba(137, 207, 240, 0.5)",
    boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "absolute",
    objectFit: "cover",
  };

  const randomPositions = [
    { top: "52%", left: "28%" },
    { top: "38%", left: "73%" },
    { top: "42%", left: "18%" },
    { top: "58%", left: "65%" },
    { top: "67%", left: "22%" },
    { top: "64%", left: "80%" },
  ];

  return (
    <div
      className="grid-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#89CFF0",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Lebar penuh container untuk menyesuaikan dengan viewport
          maxWidth: "440px", // Maksimum lebar untuk Login
          // border: "3px solid",
        }}
      >
        <Login />
      </div>
      {randomPositions.map((pos, index) => (
        <img
          key={index}
          src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-cute-cartoon-meditation-png-image_6223223.jpg"
          style={{ ...imageStyle, ...pos }}
          alt="Meditation Cartoon"
        />
      ))}
    </div>
  );
};

export default PageLogin;
