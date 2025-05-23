import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Links - Desktop */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li className=' flex items-center space-x-3'><a href="#" className="hover:text-blue-500">Home</a><i class="fa-solid fa-house"></i></li>
          <li className='flex items-center space-x-3'><a href="#" className="hover:text-blue-500">About</a><i class="fa-solid fa-circle-info"></i></li>
          <li className='flex items-center space-x-3'><a href="#" className="hover:text-blue-500">Discover</a><i class="fa-solid fa-magnifying-glass"></i></li>
          <li className='flex items-center space-x-3'><a href="#" className="hover:text-blue-500">Profile</a><i class="fa-solid fa-user"></i></li>
          <li className='flex items-center space-x-3'><a href="#" className="hover:text-blue-500">Contact</a><i class="fa-regular fa-message"></i></li>
        </ul>
      </div>
    </nav>
      
      {isOpen && (
        <div className='fixed top-10 left-0 h-screen w-40 bg-white shadow-lg z-40 p-8 pt-30'>
        <ul className="space-y-10 text-gray-700 font-medium">
          <li className='flex gap-8'><a onClick={() => setIsOpen(false)} href="#" className="block text-gray-700 hover:text-blue-500" >Home</a><i class="fa-solid fa-house"></i></li>

          <li className='flex gap-8'><a onClick={() => setIsOpen(false)} href="#" className="block text-gray-700 hover:text-blue-500">About</a><i class="fa-solid fa-circle-info"></i></li>

          <li className='flex gap-4'><a onClick={() => setIsOpen(false)} href="#" className="block text-gray-700 hover:text-blue-500">Discover</a><i class="fa-solid fa-magnifying-glass"></i></li>

          <li className='flex gap-8'><a onClick={() => setIsOpen(false)} href="#" className="block text-gray-700 hover:text-blue-500">Profile</a><i class="fa-solid fa-user"></i></li>

          <li className='flex gap-5'><a onClick={() => setIsOpen(false)} href="#" className="block text-gray-700 hover:text-blue-500">Contact</a><i class="fa-regular fa-message"></i></li>
        </ul>
      </div>
      )}
    </>
  );
};

export default Navbar;


