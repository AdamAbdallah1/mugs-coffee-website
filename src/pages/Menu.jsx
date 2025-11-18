
const menuData = [
  {
    category: "Hot Drinks",
    items: [
      {
        name: "Espresso",
        price: "$2",
      },
      {
        name: "Double Expresso",
        price: "$3",
      },
      {
        name: "Cappuccino",
        price: "$4",
      },
      {
        name: "Americano",
        price: "$4",
      }
    ]
  },
  {
    category: "Milkshakes",
    items: [
      {
        name: "Chocltate",
        price: "$5",
      },
            {
        name: "Strawberry",
        price: "$5",
      },
            {
        name: "Vanilla",
        price: "$5",
      }
      
      
      
    ]
  },
  {
    category: "Smoothies",
    items: [
      {
        name: "Mango",
        price: "$6",
      },
      {
        name: "Strawberry",
        price: "$6",
      }
    ]
  }
];

import React, { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hot Drinks");

  const category = menuData.find(cat => cat.category === selectedCategory);

  return (
    <section id='menu' className='bg-white mt-10 md:mt-20 flex flex-col p-5 justify-center items-center gap-10'>
        <h1 className='text-4xl font-extrabold text-center'>Our Menu</h1>

        <div className='flex gap-4'>
          {menuData.map(cat => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 py-2 rounded-full font-medium cursor-pointer ${
                selectedCategory === cat.category
                  ? "bg-[#a05c29] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className='flex flex-col gap-6 w-full max-w-4xl'>
          {category.items.map(item => (
            <div key={item.name} className='border-b pb-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold'>{item.name}</h2>
                <span className='font-bold'>{item.price}</span>
              </div>
              <p className='text-gray-700 mt-1'>{item.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Menu;
