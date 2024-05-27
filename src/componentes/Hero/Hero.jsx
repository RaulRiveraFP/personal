import React from 'react';
import  avatar  from '../../assets/avatar2.jpg'
import  hero  from '../../assets/hero.png'

const Hero = () => {
  return (
    <div  className="hero border border-bottom">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center py-4">
            <div className='d-flex flex-column flex-md-row w-100 align-items-center '>
                <img src={avatar} alt='avatar' className='rounded w-25 py-3 py-md-0'/>
                <div className='w-75'>
                    <h1 className="display-4 fw-bold">Full stack developer!</h1>
                    <p className="lead mt-4">Convirtiendo ideas en experiencias digitales.</p>
                </div>
            </div>
        </div>
      </div>
      <div className='w-100 d-flex'>
        <img src={hero} alt='programacion' className='w-50 pt-3 py-md-0 m-auto'/>
      </div>
    </div>
  );
}

export default Hero;
