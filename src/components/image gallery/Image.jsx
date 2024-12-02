import React, { useState } from 'react';
import Menu from '../Menu';

export default function Image() {
  const [items, setItems] = useState(Menu);

  const filterItem = (cate) => {
    if (cate === 'all') {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => curElem.category === cate);
    setItems(updatedItems);
  };

  return (
    <div className='p-6'>
      <h1 className="mt-5 text-center text-3xl font-bold text-gray-800">Order Your Favourite Dish</h1>
      <hr className="my-4 border-gray-300" />

      <div className="container mx-auto">
        <div className="flex justify-around my-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => filterItem('all')}>All</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => filterItem('breakfast')}>Breakfast</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => filterItem('lunch')}>Lunch</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => filterItem('evening')}>Evening</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded" onClick={() => filterItem('dinner')}>Dinner</button>
        </div>
      </div>

      {/* Main Items Section */}
      <div className="container  w-auto ">
        <div className="grid grid-cols-3 gap-2">
          {items.map((element) => {
            const { id, image, name, price, description } = element;
            return (
              <div key={id} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-auto" style={{ height: '240px' }}>
                {/* Item Inside */}
                <div className="flex flex-row items-center">
                  {/* Image Section */}
                  <div className="w-full p-2 flex justify-start">
                    <img src={image} alt="menuPic" className=" rounded-lg" style={{ width: '200px', height: '100px' }} />
                  </div>

                  {/* Menu Item Description */}
                  <div className=" p-2">
                    <div className="main-title ">
                      <h1 className="text-xl font-bold text-gray-800 ">{name}</h1>
                      <p className="text-gray-600">{description}</p>
                    </div>

                  
                      <div className="flex justify-between ">
                        <h2 className="text-lg font-semibold text-gray-700">{price}</h2>
                       
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-base  rounded w-12 h-8">
                            Order
                          </button>
                       
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Prices may vary on selected date.
                      </p>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
