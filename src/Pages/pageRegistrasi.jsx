import { useState } from "react";
import "../App.css";
import Header from "../Component/Header";
import Sidebar from "../Sidebar";
import Registrasi from "../Component/registrasi";

const pageRegistrasi = () => {

  const imageStyle = {
    width: "100px", // Mengatur ukuran gambar
    height: "100px", // Mengatur ukuran gambar
    borderRadius: "50%", // Membuat gambar berbentuk lingkaran
    position: "absolute",
    objectFit: "cover",
  };

  // Contoh posisi acak untuk gambar
  const randomPositions = [
    { top: "52%", left: "28%" }, //ok kiri
    { top: "38%", left: "73%" }, //ok kanan
    { top: "42%", left: "18%" }, //ok kiri
    { top: "58%", left: "65%" }, //ok kanan
    { top: "67%", left: "22%" }, //ok kiri
    { top: "64%", left: "80%" }, //ok kanan
  ];

  return (
    <div
      className="grid-container"
      style={{
        backgroundColor: "#89CFF0",
        justifyContent: "center",
        paddingLeft: "18%",
        paddingTop: "3%",
      }}
    >
      <Registrasi />
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

export default pageRegistrasi;
