import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
  // console.log(data)
  const [foods, setFoods] = useState(data)

  // Filter Type foods

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* FILTER ROW */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* FILTER TYPE */}
        <div>
          <p className="font-bold text-grey-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* FILTER PRICE */}
        <div>
          <p className="font-bold text-grey-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-orange-400 border transition duration-300 ease-in-out text-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-400 text-white p-1 rounded-lg ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
