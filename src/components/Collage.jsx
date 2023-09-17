import React from 'react';
import "../styles/style.css";
import imageDeep from "../assets/img/image-deep-earth.jpg";
import imageNight from "../assets/img/image-night-arcade.jpg";
import imageSoccer from "../assets/img/image-soccer-team.jpg";
import imageGrid from "../assets/img/image-grid.jpg";
import imageAbove from "../assets/img/image-from-above.jpg";
import imagePocket from "../assets/img/image-pocket-borealis.jpg";
import imageCuriosity from "../assets/img/image-curiosity.jpg";
import imageFisheye from "../assets/img/image-fisheye.jpg";

const Collage = () => {
  const images = [
    {url: imageDeep, name: "DEEP EARTH"},
    {url: imageNight, name: "NIGHT ARCADE"},
    {url: imageSoccer, name: "SOCCER TEAM VR"},
    {url: imageGrid, name: "THE GRID"},
    {url: imageAbove, name: "FROM UP ABOVE VR"},
    {url: imagePocket, name: "POCKET BOREALIS"},
    {url: imageCuriosity, name: "THE CURIOSITY"},
    {url: imageFisheye, name: "MAKE IT FISHEYE"},
    
    // Agrega más URLs según sea necesario
  ];

  return (
    <>
      <div className="collage">
        <h1 className='collage_titulo'>OUR CREATIONS</h1>

        {images.map((image, index) => (
            <div key={index} className="collage-image" style={{ backgroundImage: `url(${image.url})` }}>
              <p className="image_name">{image.name}</p>
            </div>
        ))}
        <button className='collage_seeall'>SEE ALL</button>
      </div>
    </>
  );
};

export default Collage;
