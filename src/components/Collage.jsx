import React from 'react';
import "../styles/style.css";
import { useMediaQuery } from 'react-responsive';
import imageDeep from "../assets/img/image-deep-earth.jpg";
import imageNight from "../assets/img/image-night-arcade.jpg";
import imageSoccer from "../assets/img/image-soccer-team.jpg";
import imageGrid from "../assets/img/image-grid.jpg";
import imageAbove from "../assets/img/image-from-above.jpg";
import imagePocket from "../assets/img/image-pocket-borealis.jpg";
import imageCuriosity from "../assets/img/image-curiosity.jpg";
import imageFisheye from "../assets/img/image-fisheye.jpg";
import imageDeepDesktop from "../assets/img/image-deep-earth-Desktop.jpg";
import imageNightDesktop from "../assets/img/image-night-arcade-Desktop.jpg";
import imageSoccerDesktop from "../assets/img/image-soccer-team-Desktop.jpg";
import imageGridDesktop from "../assets/img/image-grid-Desktop.jpg";
import imageAboveDesktop from "../assets/img/image-from-above-Desktop.jpg";
import imagePocketDesktop from "../assets/img/image-pocket-borealis-Desktop.jpg";
import imageCuriosityDesktop from "../assets/img/image-curiosity-Desktop.jpg";
import imageFisheyeDesktop from "../assets/img/image-fisheye-Desktop.jpg";

const Collage = () => {
  // Utiliza el hook useMediaQuery para detectar el tamaño de la pantalla
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const images = isDesktop
    ? [
        { url: imageDeepDesktop, name: "DEEP EARTH" },
        { url: imageNightDesktop, name: "NIGHT ARCADE" },
        { url: imageSoccerDesktop, name: "SOCCER TEAM VR" },
        { url: imageGridDesktop, name: "THE GRID" },
        { url: imageAboveDesktop, name: "FROM UP ABOVE VR" },
        { url: imagePocketDesktop, name: "POCKET BOREALIS" },
        { url: imageCuriosityDesktop, name: "THE CURIOSITY" },
        { url: imageFisheyeDesktop, name: "MAKE IT FISHEYE" },
      ]
    : [
        { url: imageDeep, name: "DEEP EARTH" },
        { url: imageNight, name: "NIGHT ARCADE" },
        { url: imageSoccer, name: "SOCCER TEAM VR" },
        { url: imageGrid, name: "THE GRID" },
        { url: imageAbove, name: "FROM UP ABOVE VR" },
        { url: imagePocket, name: "POCKET BOREALIS" },
        { url: imageCuriosity, name: "THE CURIOSITY" },
        { url: imageFisheye, name: "MAKE IT FISHEYE" },
      ];

  return (
    <>

      <div className='collage_contain'>
        <div className="collage">
          <h1 className="collage_titulo">OUR CREATIONS</h1>
          {images.map((image, index) => (
            <div key={index} className="collage-image" style={{ backgroundImage: `url(${image.url})` }}>
              <p className="image_name">{image.name}</p>
            </div>
          ))}
          <button className="collage_seeall">SEE ALL</button>
        </div>
      </div>
    </>
  );
};

export default Collage;