import React from "react";
import { motion } from "framer-motion";
import reactLogo from '../img/react.svg'

// Функция для расчета позиции на орбите
const getOrbitalPosition = (angle, radius) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return { x, y };
};

// Компонент для отображения изображения
const OrbitalImage = ({ src, radius, angle, duration }) => {
  const { x, y } = getOrbitalPosition(angle, radius);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: "50px", // Размер изображения
        height: "50px", // Размер изображения
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        borderRadius: "50%",
      }}
      animate={{
        x: [x, -x],
        y: [y, -y],
        rotate: 360,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default function OrbitAnimation() {
  const radius = 150; // Радиус орбиты
  const images = [
    reactLogo,
    "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
    "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
    "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
    reactLogo
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "50%",
      }}
    >
      {images.map((src, index) => {
        const angle = (index / images.length) * Math.PI * 2; // Угол для размещения на орбите
        return (
          <OrbitalImage
            key={index}
            src={src}
            radius={radius}
            angle={angle}
            duration={10} // Длительность полного оборота
          />
        );
      })}
    </div>
  );
}
