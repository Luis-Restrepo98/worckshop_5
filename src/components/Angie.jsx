import React from 'react';
import "../styles/style.css";

import img_angie from '../assets/img/image-angie.jpg';


const CUERPO = () => {
    return (
      <>
      <div className='content_principal'>
            <div id='header_cuerpo'>
            <img className='cuerpo'
                src={img_angie}
                alt=''
            />
            </div>

            <div id='cuerpo_title'>
                <h1 className='title'>THE LEADER IN INTERACTIVE VR</h1>
                <p className='parrafo'>Founded in 2011, Loopstudios has been producing world-class 
                virtual realitu projects for some of the best companies around
                the globe. Our award-winning creations have transformed 
                businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
      </>
    );
  };
  export default CUERPO;
