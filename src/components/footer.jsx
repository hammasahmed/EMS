import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="f-container">
          <h2 className="text-2xl text-white mb-4">WedMeGood - Your Personal Wedding Planner</h2>
          <p className="text-gray-400 mb-4">Plan your wedding with Us. WedMeGood is an Indian Wedding Planning Website.</p>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Register as a Vendor</button>
          </div>
          <div className="social flex space-x-4 mt-4">
            <i className="fab fa-facebook text-blue-600 text-2xl"></i>
            <i className="fab fa-instagram text-pink-500 text-2xl"></i>
            <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
            <i className="fab fa-twitter text-blue-400 text-2xl"></i>
            <i className="fab fa-pinterest text-red-600 text-2xl"></i>
          </div>
        </div>
        <div className="f-container">
          <h2 className="text-2xl text-white mb-4">Our Location</h2>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Anand</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Vadodara</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Mumbai</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Ahmedabad</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Surat</a>
        </div>
        <div className="f-container">
          <h2 className="text-2xl text-white mb-4">Our Newsletter</h2>
          <p className="text-gray-400 mb-4">Subscribe for the latest updates</p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-4"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Subscribe</button>
        </div>
      </div>
      <div className="text-center bg-gray-900 text-gray-500 py-4">
        <p>Copyright ©2022 All Rights Reserved | Knowledge Place KP</p>
      </div>
    </footer>
  );
};

export default Footer;
