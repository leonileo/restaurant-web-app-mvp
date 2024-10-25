import React, { useEffect, useState } from 'react'
import events from '../../assets/images/events.png'
import foods from '../../assets/images/foods.png'
import specials from '../../assets/images/specials.png'
import { Spinner } from 'flowbite-react'
import { useGetStatusQuery } from '../../slices/dashboardApiSlice'
import { IoIosClose } from "react-icons/io";
// import special_food_picture from '../../assets/images/burgeriza.jpg'
// import mealImg1 from '../../assets/images/mealImg1.jpg'
// import smImg2 from '../../assets/images/smImg2.jpg'
// import specialImg from '../../assets/images/specialImg.jpg'

const Dashboard = ({tab, setTab}) => {
    const [total_events, setTotal_events] = useState(0)
    const [total_foods, setTotal_foods] = useState(0)
    const [total_special_foods, setTotal_special_foods] = useState(0)
    const [meals, setMeals] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [mealId, setMealId] = useState('');

    // dummy data
    // const total_events = 3
    // const total_foods = 80
    // const total_special_foods = 4
    // const special_food_name = "Special Burgerizza";
    
    // const meals = [
    //     {
    //         meal_picture: specialImg,
    //         meal_name: "MIA Kitfo Pizza",
    //         meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
    //         meal_code: "001",
    //     },
    //     {
    //         meal_picture: smImg2,
    //         meal_name: "MIA Kitfo Pizza",
    //         meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
    //         meal_code: "002",
    //     },
    //     {
    //         meal_picture: mealImg1,
    //         meal_name: "MIA Kitfo Pizza",
    //         meal_desc: "Pizza Sauce, Kitfo, Ayb, Gomen kitfo, Pizza beef, Cheese for pizza beef, oregano.",
    //         meal_code: "003",
    //     },
    // ]
    // dummy data
    
    const {data: getStatus, isLoading, error } = useGetStatusQuery();
    
    useEffect(() => {
        setTotal_foods(isLoading ? <Spinner /> : error ? "An error occured!" : getStatus.foodLength)
        setTotal_events(isLoading ? <Spinner /> : error ? "An error occured!" : getStatus.eventLength)
        setTotal_special_foods(isLoading ? <Spinner /> : error ? "An error occured!" : getStatus.specialLength)
        setMeals(isLoading ? [] : error ? [] : getStatus.food)
    })

    // image viewer
    const imageViewer = (id) => {
        setMealId(id);
        setClicked(true)
    }

  return (
    <div className='relative'>
        {/* top */}
        <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Dashboard</h1>
        </div>
        {/* middle */}
        <div className="middle md:flex flex-col-reverse">
            {/* special-banner */}
            <div className="special-banner md:flex md:justify-around justify-between md:p-5 p-2 bg-gradient-to-r from-primaryColor to-transparent rounded-md">
                {isLoading ? 
                    <div className='xl:text-3xl text-center w-full flex items-center justify-center h-[30vh]'>
                        <p>Loading...</p>
                        <Spinner />
                    </div>
                 : error ? 
                    <div className='xl:text-3xl text-center w-full flex items-center justify-center h-[30vh]'>
                        <p>Error!</p>
                    </div>
                :
                getStatus.specialFoods.length > 0 ?
                <>
                <div className="img xl:h-[30vh] flex items-end p-3 xl:p-0  justify-center">
                    <img src={getStatus.specialFoods[0].picture} alt="Special img" className='xl:h-full xl:max-h-full max-h-[20vh] rounded-md' />
                </div>
                <div className="text flex items-end ">
                    <div className="py-4 space-y-5">
                        <p className='md:text-primaryColor text-white xl:text-4xl font-bold text-2xl'>Today special #1</p>
                        <p className='px-2 xl:text-2xl font-Jomolhari '>{getStatus.specialFoods[0].name}</p>
                        <button onClick={() => setTab(2)}  className='bg-primaryColor hover:border-transparent hover:bg-white hover:bg-transparent hover:text-primaryColor transition-all rounded-full border-2 border-transparent text-white font-semibold px-10'>View Menu</button>
                    </div>
                </div>
                </> : 
                <div className='h-[30vh] text-center flex items-center justify-center sm:text-2xl'>
                    <div>
                        <p>You will see special meals here after created.</p>
                    </div>
                </div>
                }
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
                <p className='md:text-2xl font-bold'>Recently added meals</p>
                {meals.length > 0 &&
                    <button onClick={() => setTab(2)} className='bg-textColor border-[1px] border-transparent hover:border-textColor hover:text-textColor text-white rounded-full px-5 transition-all hover:bg-transparent'>View all</button>
                }
            </div>
            <div className="b p-2 bg-[rgba(237,235,235,0.5)] h-[40vh] overflow-hidden overflow-x-auto overflow-y-auto ">
                {isLoading ? 
                    <div className='xl:text-3xl flex items-center justify-center h-[30vh]'>
                        <p>Loading...</p>
                        <Spinner />
                    </div>
                 : error ? 
                    <div className='xl:text-3xl flex items-center justify-center h-[30vh] text-center'>
                        <p>An error occured while getting recent meal data! <br/> refresh and try again</p>
                    </div>
                :
                meals.length > 0 ?
                <table className='w-full rounded-md overflow-hidden'>
                    <thead>
                        <tr className='bg-white rounded-md text-nowrap'>
                            <td className='p-2 text-center'>ID</td>
                            <td className='p-2 text-center'>Picture</td>
                            <td className='p-2 text-center'>Meal name</td>
                            <td className='p-2 text-center'>Ingredients</td>
                            <td className='p-2 text-center'>Meal Code</td>
                        </tr>
                    </thead>
                    <tbody className='bg-white py-7'>
                        {/* map through the meal category */}
                        {meals.map((meal, id) => (
                            <tr className='text-nowrap hover:bg-gray-100 transition-all'>
                                <td className='p-6 text-center'>{Number(id) + 1}</td>
                                <td className='p-6 text-center flex justify-center items-center'>
                                    <div onClick={(e) => {imageViewer(meal._id)}} className='cursor-pointer w-[100px] h-[50px] overflow-hidden rounded flex justify-center items-center bg-blue-300'>
                                        <img src={meal.picture} alt="" className='h-auto min-h-8 rounded-md' />
                                    </div>
                                    {/* image preview */}
                                    {clicked && mealId === meal._id && 
                                        <div className='p-5 transition-all absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded'>
                                            <div onClick={(e) => {setMealId(''); setClicked(false)}} className=' w-full flex justify-end my-5'>
                                                <IoIosClose className='text-4xl border-2 rounded-full border-white transition-all text-white hover:text-red-500 cursor-pointer hover:border-red-500' />
                                            </div>
                                            <p className='text-center text-white text-4xl mb-5'>Image viewer</p>
                                            <div className='w-full flex justify-center items-start'>
                                                <img src={meal.picture} alt="" className='max-h-[850px] w-auto rounded-md' />
                                            </div>
                                        </div>
                                    }
                                </td>
                                <td className='p-6 text-center'>{meal.name}</td>
                                <td className='p-6 text-center max-w-[250px] truncate'>{meal.ingredient}</td>
                                <td className='p-6 text-center'>{meal.code}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
                : <div className="flex justify-center w-full h-full items-center">
                    <p>When you create meals it will be displayed here.</p>
                </div> 
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard