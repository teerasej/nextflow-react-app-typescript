import React from 'react';
import './App.css';

// สร้างตัวอย่างของ menu bar ด้วย tailwindcss
const Menu = () => {
  return (
    <div className="bg-blue-800 text-white h-12">
      <div className="container mx-auto flex  items-center justify-between">
        <div className="flex space-x-4 text-lg py-2">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex space-x-4 text-lg py-2">
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
