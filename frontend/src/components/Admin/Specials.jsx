import React, { useState } from 'react'
import { BiSolidSearchAlt2 } from 'react-icons/bi'
import specialImg from '../../assets/images/specialImg.jpg'
import mealImg1 from '../../assets/images/mealImg1.jpg'
import { TfiClose } from 'react-icons/tfi'
import { CiBarcode } from "react-icons/ci";

const Specials = ({tab, setTab}) => {
  const [modal, setModal] = useState(false);

  const meals = [
    {
        meal_name: "Scrambled eggs",
        meal_picture: mealImg1,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Breakfast",
        is_special: false,
        meal_code: '001',
        meal_price: 140
    },
    {
        meal_name: "Scrambled eggs",
        meal_picture: mealImg1,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Breakfast",
        is_special: false,
        meal_code: '002',
        meal_price: 140
    },
    {
        meal_name: "Scrambled eggs",
        meal_picture: mealImg1,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Breakfast",
        is_special: false,
        meal_code: '003',
        meal_price: 140
    },
    {
        meal_name: "Scrambled eggs",
        meal_picture: mealImg1,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Breakfast",
        is_special: false,
        meal_code: '004',
        meal_price: 140
    },
    {
        meal_name: "Burger",
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Burger",
        is_special: false,
        meal_code: '005',
        meal_price: 140
    },
    {
        meal_name: "Scrambled eggs",
        meal_picture: mealImg1,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Breakfast",
        is_special: false,
        meal_code: '006',
        meal_price: 140
    },
    {
        meal_name: "Burger",
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Burger",
        is_special: false,
        meal_code: '007',
        meal_price: 140
    },
    {
        meal_name: "Kitfo pizza",
        meal_picture: specialImg,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Traditional foods",
        is_special: true,
        meal_code: '008',
        meal_price: 140
    },
    {
        meal_name: "Pizza",
        meal_picture: specialImg,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Traditional foods",
        is_special: true,
        meal_code: '009',
        meal_price: 140
    },
    {
        meal_name: "Pizza",
        meal_picture: specialImg,
        meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
        meal_category: "Traditional foods",
        is_special: true,
        meal_code: '010',
        meal_price: 140
    },
]
  return (
    <div>
      {/* top */}
      <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Specials</h1>
        </div>
        {/* bottom */}
        <div className="bottom my-5">
          <div className="flex justify-between">
            <label className="search border-[1px] w-max rounded-md flex items-center focus:ring-0">
              <BiSolidSearchAlt2 className="w-9 h-9 px-1" />
              <input type="search" name="" id="" className="focus:ring-0 border-0 border-transparent" placeholder="Search..." />
            </label>
            <button onClick={()=> setModal(!modal) } className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add special meal +</button>
          </div>
          <div className="h-[80vh] my-5 overflow-auto">
            <div className="meals grid gap-5 md:grid-cols-4 grid-cols-2 mt-5">
              {meals.map((meal) => (
                meal.is_special === true && (
                <div className='rounded-2xl overflow-hidden border-[1px] hover:shadow-md transition-all'>
                  <div className="top h-[15vh]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.8)), url(${meal.meal_picture})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="text p-5">
                    <h1 className="text-primaryColor text-2xl font-semibold">{meal.meal_name}</h1>
                    <div className="ingredients p-2">
                      <h2>Ingredients</h2>
                      <p className='truncate'>{meal.meal_ingredient}</p>
                    </div>
                  </div>

                  <div className="btns flex justify-between p-2 px-5">
                    <button className="text-primaryColor font-semibold">Open detail</button>
                    <div className="opt flex justify-center">
                        <div className='space-y-1 cursor-pointer'>
                            <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                            <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                            <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                        </div>
                    </div>
                  </div>

                </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* modal */}
        {modal &&
        <div className='bg-[rgba(0,0,0,0.5)] w-full h-full fixed top-0 left-0 flex justify-center py-10'>
          <div className='bg-white md:w-[80%] h-[50%] p-2 rounded'>
            {/* close btn */}
            <div className="cls flex justify-end p-5">
              <div onClick={()=>setModal(!modal)} className="w-fit border-2 hover:border-red-600 hover:text-red-600 transition-all cursor-pointer border-gray-600 p-2 rounded-full">
                <TfiClose />
              </div>
            </div>
            {/* bottom */}
            <div className="bottom p-5">
              <div className="breadcrumbs">
                <p className='pb-5 font-semibold '>Specials | Add special food</p>
              </div>
              <div className='add px-5 space-y-4'>
                <h2 className='font-bold md:text-3xl'>Add Special food</h2>
                <form className='max-w-[550px] space-y-3 p-4 border-[1px] rounded-md'>
                  <label className='block font-semibold text-xl focus:ring-0 border-0' htmlFor="foodcode">Enter food code</label>
                  <div className="fc relative w-[210px] border-2 focus:ring-0 border-[rgba(76,244,42,0.72)] rounded">
                    <input type="text" name="foodcode" id="foodcode" className='border-0 focus:ring-0 w-[90%]' />
                    <div className="absolute top-3 right-3">
                      <CiBarcode />
                    </div>
                  </div>
                  <div className='border-[1px] border-primaryColor text-primaryColor flex justify-center items-center w-fit p-2 px-5 rounded hover:bg-primaryColor hover:text-white transition-all'><button type="button" className=''>Add special</button></div>
                </form>
              </div>
            </div>

          </div>
        </div>
        }
    </div>
  )
}

export default Specials