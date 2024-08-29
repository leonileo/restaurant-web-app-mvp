import React from 'react'
import { BiSolidSearchAlt2 } from "react-icons/bi";
import mealImg1 from '../../assets/images/mealImg1.jpg'
import specialImg from '../../assets/images/specialImg.jpg'

const Foods = ({tab, setTab}) => {
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
            <h1 className='font-bold md:text-2xl text-xl'>Foods</h1>
        </div>
        {/* bottom */}
        <div className="bottom my-5">
          <div className="flex justify-between">
            <label className="search border-[1px] w-max rounded-md flex items-center focus:ring-0">
              <BiSolidSearchAlt2 className="w-9 h-9 px-1" />
              <input type="search" name="" id="" className="focus:ring-0 border-0 border-transparent" placeholder="Search..." />
            </label>
            <button onClick={()=> setTab(6)} className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add meal +</button>
          </div>
          <div className="h-[80vh] my-5 overflow-auto">
            <div className="meals grid gap-5 md:grid-cols-4 grid-cols-2 mt-5">
              {meals.map((meal) => (
                <div className='rounded-2xl overflow-hidden border-[1px]'>
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
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Foods