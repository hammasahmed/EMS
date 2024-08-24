import React from 'react';
import svideo from './p.mp4';

const VDB_mylistings = () => {
  return (
    <div className='relative w-full h-full'>
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src={svideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10'>
        <h1 className='text-white text-center text-6xl pt-56 stroke-black '>Welcome to world's best Arena</h1>
      </div>
    </div>
  );
}

export default VDB_mylistings;
