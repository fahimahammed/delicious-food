import React from 'react';
import food from './assets/food.png';

function App() {
  return (
    <div className='flex justify-center items-center flex-wrap flex-col-reverse lg:flex-row mx-4' style={{background: 'white'}}>
      <div className='mt-4 lg:mr-40'>
        <h1 className='text-4xl text-bold font-bold'>Fresh Healthy</h1>
        <h1 className='text-4xl text-bold mt-1'>Delicious Food</h1>
        <p className='mt-1'>We made fresh and healthy food.</p>
        <span className='inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'>Explore</span>
      </div>
      <img src={ food}/>
    </div>
  );
}

export default App;
