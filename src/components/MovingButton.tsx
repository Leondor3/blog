import React, { useState, useEffect } from "react";

const MovingButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const centerX = Math.floor(innerWidth / 2);
      const centerY = Math.floor(innerHeight / 2);
      setPosition({ x: centerX, y: centerY });
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleMouseMove = () => {
    const { innerWidth, innerHeight } = window;
    const buttonWidth = 100; // Largura estimada do botão
    const buttonHeight = 30; // Altura estimada do botão
    const maxX = innerWidth - buttonWidth;
    const maxY = innerHeight - buttonHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    setPosition({ x: newX, y: newY });
  };


  return (
    <button
      className="absolute transition-transform hover:translate-x-[20px] hover:translate-y-[-20px] text-white bg-red-600 rounded-md p-2"
      style={{ top: position.y, left: position.x }}
      onMouseMove={handleMouseMove}
    >
      NÃO
    </button>
  );
};

export default MovingButton;
