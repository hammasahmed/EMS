// import React, {useState} from 'react'
// import {motion} from 'framer-motion'
// import venue1 from '../assets/venue1.png'
// import venue2 from '../assets/venue2.png'
// import venue3 from '../assets/venue3.png'
// import venue4 from '../assets/venue4.png'
// import venue5 from '../assets/venue5.png'


// const Catalog = (props) => {

//   const [expandedIndex, setExpandedIndex] = useState(null)

//   const handleCardClick = (index) => {
//     setExpandedIndex(index === expandedIndex ? -1 : index)
//   }

//   const cardVariants = {
//     expanded: {
//       width: "400px"
//     },
//     collapsed: {
//       width: '200px'
//     }
//   }

//   const cardImages=[venue1, venue2, venue3, venue4, venue5,]

//   const cardDescriptions = [
//     'pearl continental',
//     'Blue lagon',
//     'Monal hieghts',
//     'Serena Hotel',
//     'Marriott Hotel',
//   ]
//   return (
//    <section className='py-16 pb-[300px] bg-gradient-to-r from-[#1a0330] to-[#3a0303]'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

//           <h1 className='text-3xl font-extrabold text-white'>Featured {props.heading}</h1>
//           <p className='mt-4 text-xl text-gray-300'>Check out our latest Listings</p>
//       </div>
//       <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
//         {[0, 1, 2, 3, 4].map((index) => (
//             <motion.div
//             key={index}
//             className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
//             variants={cardVariants}
//             initial="collapsed"
//             animate={index === expandedIndex ? 'expanded': 'collapsed'}
//             transition={{duration: 0.5}}
//             onClick={() => handleCardClick(index)}
//             style={{
//                             backgroundImage: `url(${cardImages[index]})`,

//             }}
//           >
//               <div className='card-content h-full flex flex-col justify-end'>
//                   <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
//                     <h2 className='text-xl font-semibold text-white text-center'>{props.title} {index + 1}</h2>
//                     {index === expandedIndex && (
//                       <p className='mt-2 text-gray-300 text-center'>{cardDescriptions[index]} </p>
//                     )

//                     }
//                   </div>
//               </div>
//           </motion.div>
//         ))}
//       </div>
//    </section>
//   )
// }

// export default Catalog



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Card from './card'
const Catalog = ({ heading, title, images, descriptions }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '200px',
    },
  };

  return (
    <section className="py-16 pb-[300px] bg-gradient-to-r from-[#1a0330] to-[#3a0303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white">Featured {heading}</h1>
        <p className="mt-4 text-xl text-gray-300">Check out our latest Listings</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''} lg:block hidden`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  {title} {index + 1}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center">
                    {descriptions[index]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

        ))}
      </div>
      {images.map((image, index) => (
        <Card key={index} images={images} />
      ))}
      {/* <div class="block lg:hidden z-10"><h1 className='text-white'>chal betA SELFIE LELE</h1></div> */}
    </section>
  );
};
Catalog.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  descriptions: PropTypes.array.isRequired,
};

Catalog.defaultProps = {
  images: [],
  descriptions: [],
};
export default Catalog;
