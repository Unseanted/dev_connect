import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold">Welcome to DevConnect 👋</h1>
         <Navbar/>
    </div>
  );
}


