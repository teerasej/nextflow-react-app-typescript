import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className=' bg-black flex flex-row'>
        <p className=' text-white p-4 hover:bg-red-400 active:bg-red-700'>Home</p>
      </nav>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl mt-9'>Welcome to the Product Catalog</h1>
        <p className='text-xl'>Click on the link above to see the products</p>
        <div className='sm:w-full sm:mx-3 md:w-full md:mx-3 lg:w-1024 bg-gray-300 rounded flex flex-col items-center mt-10'>
          <p className='p-32 text-4xl'>Hej!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
