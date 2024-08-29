import React from 'react'
import events from '../../assets/images/events.png'
import foods from '../../assets/images/foods.png'
import specials from '../../assets/images/specials.png'
import special_food_picture from '../../assets/images/burgeriza.jpg'
import mealImg1 from '../../assets/images/mealImg1.jpg'
import smImg2 from '../../assets/images/smImg2.jpg'
import specialImg from '../../assets/images/specialImg.jpg'


const Dashboard = ({tab, setTab}) => {
    // dummy data
    const total_events = 3
    const total_foods = 80
    const total_special_foods = 4

    const special_food_name = "Special Burgerizza";

    const meals = [
        {
            meal_picture: specialImg,
            meal_name: "MIA Kitfo Pizza",
            meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
            meal_code: "001",
        },
        {
            meal_picture: smImg2,
            meal_name: "MIA Kitfo Pizza",
            meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
            meal_code: "002",
        },
        {
            meal_picture: mealImg1,
            meal_name: "MIA Kitfo Pizza",
            meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
            meal_code: "003",
        },
    ]

    // dummy data
  return (
    <div>
        {/* top */}
        <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Dashboard</h1>
        </div>
        {/* middle */}
        <div className="middle md:flex flex-col-reverse">
            {/* special-banner */}
            <div className="special-banner flex md:justify-around justify-between md:p-5 p-2 bg-gradient-to-r from-primaryColor to-transparent rounded-md">
                <div className="img h-[30vh] flex items-end p-3 md:p-0">
                    <img src={special_food_picture} alt="Special img" className='md:h-full md:max-h-full max-h-[20vh] rounded-md' />
                </div>
                <div className="text flex items-end">
                    <div className="py-4 space-y-5">
                        <p className='text-primaryColor md:text-4xl font-bold text-2xl'>Today special #1</p>
                        <p className='px-2 md:text-2xl font-Jomolhari'>{special_food_name}</p>
                        <button onClick={() => setTab(2)}  className='bg-primaryColor hover:border-primaryColor hover:bg-transparent hover:text-primaryColor transition-all rounded-full border-2 border-transparent text-white font-semibold px-10'>View Menu</button>
                    </div>
                </div>
            </div>
            {/* status_cards */}
            <div className="status_cards grid md:grid-cols-3 grid-cols-2 gap-5 my-5">
                <div className="events w-full min-h-[15vh] rounded-md p-2 flex justify-center items-center bg-[rgba(252,222,124,0.72)]">
                    <div className='text-center space-y-2'>
                        <div className="icon flex justify-center items-center">
                            <img src={events} alt="Events icon" className="md:w-32 w-16" />
                        </div>
                        <div className="name md:text-2xl font-semibold text-[rgba(115,115,115,1)]">Total Events</div>
                        <div className="value md:text-2xl text-[rgba(30,30,30,1)]">{total_events}</div>
                    </div>
                </div>      
                <div className="foods w-full min-h-[15vh] rounded-md p-2 flex justify-center items-center bg-[rgba(61,141,175,0.5)]">
                    <div className='text-center space-y-2'>
                        <div className="icon flex justify-center items-center">
                            <img src={foods} alt="Foods icon" className="md:w-32 w-16" />
                        </div>
                        <div className="name md:text-2xl font-semibold text-[rgba(115,115,115,1)]">Total Foods</div>
                        <div className="value md:text-2xl text-[rgba(30,30,30,1)]">{total_foods}</div>
                    </div>
                </div>      
                <div className="special w-full min-h-[15vh] rounded-md p-2 flex justify-center items-center bg-[rgba(234,100,143,0.47)]">
                    <div className='text-center space-y-2'>
                        <div className="icon flex justify-center items-center">
                            <img src={specials} alt="Specials icon" className="md:w-32 w-16" />
                        </div>
                        <div className="name md:text-2xl font-semibold text-[rgba(115,115,115,1)]">Total Special Foods</div>
                        <div className="value md:text-2xl text-[rgba(30,30,30,1)]">{total_special_foods}</div>
                    </div>
                </div>      
            </div>
        </div>

        {/* bottom */}
        <div className="bottom">
            <div className="t flex items-center justify-between p-2">
                <p className='md:text-2xl font-bold'>All Meals</p>
                <button onClick={() => setTab(2)} className='bg-textColor border-[1px] border-transparent hover:border-textColor hover:text-textColor text-white rounded-full px-5 transition-all hover:bg-transparent'>View all</button>
            </div>
            <div className="b p-2 bg-[rgba(237,235,235,0.5)] h-[40vh] overflow-hidden overflow-x-auto overflow-y-auto ">
                <table className='w-full rounded-md overflow-hidden'>
                    <thead>
                        <tr className='bg-white rounded-md text-nowrap'>
                            <td className='p-2 text-center'>ID</td>
                            <td className='p-2 text-center'>Picture</td>
                            <td className='p-2 text-center'>Meal name</td>
                            <td className='p-2 text-center'>Meal description</td>
                            <td className='p-2 text-center'>Meal Code</td>
                            <td className='p-2 text-center'>actions</td>
                        </tr>
                    </thead>
                    <tbody className='bg-white py-7'>
                        {/* map through the meal category */}
                        {meals.map((meal, id) => (
                            <tr className='text-nowrap hover:bg-gray-100 transition-all'>
                                <td className='p-6 text-center'>{Number(id) + 1}</td>
                                <td className='p-6 text-center flex justify-center md:h-[12vh] h-[8vh] items-center'>
                                <img src={meal.meal_picture} alt="" className='h-full min-h-8 rounded-md' />
                                </td>
                                <td className='p-6 text-center'>{meal.meal_name}</td>
                                <td className='p-6 text-center max-w-[250px] truncate'>{meal.meal_desc}</td>
                                <td className='p-6 text-center'>{meal.meal_code}</td>
                                <td className=''>
                                    <div className="opt flex justify-center">
                                        <div className='space-y-1 cursor-pointer'>
                                            <div className="w-[6px] h-[6px] bg-primaryColor rounded-full block"></div>
                                            <div className="w-[6px] h-[6px] bg-primaryColor rounded-full block"></div>
                                            <div className="w-[6px] h-[6px] bg-primaryColor rounded-full block"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Dashboard