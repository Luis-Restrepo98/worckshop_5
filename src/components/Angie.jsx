import React from 'react';
/* import ''; */

import img_angie from '../assets/img/image-angie.jpg';


const CUERPO = () => {
    return (
      <>
        <div id='header_container'>
          <img
            src={img_angie}
            id='Img_image'
            alt=''
          />
          <div id='cuerpo_title'>
            THE LEADER IN INTERACTIVE VR
            <br /> 
            Founded in 2011, Loopstudios has been producing world-class 
            virtual realitu projects for some of the best companies around
            the globe. Our award-winning creations have transformed 
            businesses through digital experiences that bind to their brand.

          </div>
        </div>
      </>
    );
  };
  export default CUERPO;
