// ./src/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <p className="text-center mb-4">
          Already have an account? <a href="#" className="text-blue-500">Log in</a>
        </p>
        <div className="flex justify-around mb-4">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="Github" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Feide" />
          </button>
        </div>
        <div className="text-center mb-4">OR</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">
            Sign Up
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            By signing up you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
          </p>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="news" name="news" className="mr-2"/>
            <label htmlFor="news" className="text-sm">Email me with news and updates</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;