import React, { useEffect, useState } from 'react'
import menuImg from '../assets/images/menuImg.png'
import egg from '../assets/images/egg.png'
import onion from '../assets/images/onion.png'
import oil from '../assets/images/oil.png'
import tomato from '../assets/images/tomato.png'
import bread from '../assets/images/bread.png'
import { TfiClose } from 'react-icons/tfi'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { useCategoriesQuery, useFoodsQuery } from '../slices/homepageApiSlice'
// import mealImg1 from '../assets/images/mealImg1.jpg'
// import specialImg from '../assets/images/specialImg.jpg'



const MenuScreen = () => {
    // states
    const [currentCategory, setCurrentCategory] = useState("Breakfast")
    const [opn, setOpn] = useState(false);
    const [mealName, setMealName] = useState("")
    const [mealPicture, setMealPicture] = useState("")
    const [mealIngredient, setMealIngredient] = useState("")
    const [mealCategory, setMealCategory] = useState("")
    const [mealSpecial, setMealSpecial] = useState("")
    const [mealCode, setMealCode] = useState("")
    const [mealPrice, setMealPrice] = useState()


    const setMeal = (mname, image, ingredient, category, special, code, price) => {
        setMealName(mname);
        setMealPicture(image);
        setMealIngredient(ingredient);
        setMealCategory(category);
        setMealSpecial(special);
        setMealCode(code);
        setMealPrice(price);
    }

    // dummy data
    // const categories = [
    //     "Breakfast",
    //     "Sandwich",
    //     "Pizza",
    //     "Burger",
    //     "Juice",
    //     "Coffee",
    //     "Cold drinks",
    //     "Traditional foods"
    // ]

    // const meals = [
    //     {
    //         meal_name: "Scrambled eggs",
    //         meal_picture: mealImg1,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Breakfast",
    //         is_special: false,
    //         meal_code: '001',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Scrambled eggs",
    //         meal_picture: mealImg1,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Breakfast",
    //         is_special: false,
    //         meal_code: '002',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Scrambled eggs",
    //         meal_picture: mealImg1,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Breakfast",
    //         is_special: false,
    //         meal_code: '003',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Scrambled eggs",
    //         meal_picture: mealImg1,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Breakfast",
    //         is_special: false,
    //         meal_code: '004',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Burger",
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Burger",
    //         is_special: false,
    //         meal_code: '005',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Scrambled eggs",
    //         meal_picture: mealImg1,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Breakfast",
    //         is_special: false,
    //         meal_code: '006',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Burger",
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Burger",
    //         is_special: false,
    //         meal_code: '007',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Kitfo pizza",
    //         meal_picture: specialImg,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Traditional foods",
    //         is_special: true,
    //         meal_code: '008',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Pizza",
    //         meal_picture: specialImg,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Traditional foods",
    //         is_special: true,
    //         meal_code: '009',
    //         meal_price: 140
    //     },
    //     {
    //         meal_name: "Pizza",
    //         meal_picture: specialImg,
    //         meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
    //         meal_category: "Traditional foods",
    //         is_special: true,
    //         meal_code: '010',
    //         meal_price: 140
    //     },
    // ]
    // dummy data

    const { data: meals, isLoading, error } = useFoodsQuery();
    const { data: categories, isLoading: categoryLoad, error: categoryErr } = useCategoriesQuery();

    useEffect(() => {
        setCurrentCategory(categoryLoad ? '' : categoryErr ? '' : categories[0].categoryName)
    })

  return (
    <>
        <HeaderComponent />
            <div className="sm:h-[4.5vh] h-[8vh] bg-secondaryColor"></div>
            <div className="menu min-h-[80vh]">
                <div className="banner flex justify-center items-center text-white h-[30vh]" style={
                {
                    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.8)), url(${menuImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <h1 className='sm:text-[100px] text-3xl font-Jomolhari text-center'>Our Menu</h1>
                </div>
                <div className="bottom w-full lg:flex-row flex-col-reverse flex py-10">
                    {/* menu */}
                    <div className="menu w-full flex">
                        <div className='xl:pl-52 p-2 w-full'>
                            {/* caregories */}
                            <div className="categories sm:flex block items-end gap-2 mb-5 overflow-hidden">
                                <h4 className='text-3xl '>Menu</h4>
                                {/* map categories */}
                                <div className='categories sm:overflow-hidden overflow-x-scroll flex gap-2 max-w-[4 00px] w-auto'>
                                    {categoryLoad ? "load" : categoryErr ? "ERR" : categories.length > 0  && categories.map((category) => (
                                        <p className={`${category.categoryName === currentCategory && "border-b-gray-500"} border-b-2 border-transparent text-nowrap duration-100 transition-all`} onClick={()=> setCurrentCategory(category.categoryName)}>{category.categoryName}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="meals grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
                                {isLoading ? "Loading" : error ? "EROR" : meals.map((meal) => (
                                    meal.category === currentCategory && (
                                    <div className='relative shadow-md hover:shadow-lg transition-all rounded-lg overflow-hidden h-[30vh]'>
                                        <div className="picture h-[15vh]"
                                            style={{
                                                    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.5)), url(${meal.picture})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                        >
                                        </div>
                                        <div className='px-5 p-2'>
                                            <h3 className='font-semibold text-primaryColor sm:text-2xl pb-2'>{meal.name}</h3>
                                            <p className='font-semibold'>Ingredients</p>
                                            <p className='w-[250px] line-clamp-1'>{meal.ingredient}</p>
                                        </div>
                                        <div className="btn flex justify-end">
                                            <button onClick={() =>{ 
                                                setMeal(meal.name, meal.picture, meal.ingredient, meal.category, meal.isSpecial, meal.code, meal.price)
                                                setOpn(!opn)
                                                }} 
                                                className='transition-all m-5 p-2 rounded-full px-5 font-semibold text-primaryColor border-[1px] border-primaryColor hover:text-white cursor-pointer bg-transparent hover:bg-primaryColor '>Open detail</button>
                                        </div>
                                    </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* sepcials */}
                    <div className="specials w-full lg:max-w-[500px] p-2">
                        <h2 className='text-textColor font-semibold text-3xl pb-5'>Today specials</h2>
                        <div className="sps flex flex-wrap sm:my-0 my-5 sm:p-0 p-2 sm:max-w-auto max-w-[1050px] ">
                            {isLoading ? "Loading" : error ? "EROR" : meals.map(special => (
                                special.isSpecial === true && (
                                    <div className='my-2 flex shadow-md hover:shadow-lg transition-all rounded-lg overflow-hidden w-full xl:w-[450px]'>
                                        <div className="left w-full max-w-[250px] flex justify-center items-center"
                                            style={{
                                                    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(255,165,0,0.72)), url(${special.picture})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                        ><p className='stroke text-5xl text-center'>Special</p></div>
                                        <div className='right min-h-[10vh] px-5 p-2'>
                                            <div>
                                                <h3 className='font-semibold text-primaryColor sm:text-xl pb-2'>{special.name}</h3>
                                                <p className='font-semibold'>Ingredients</p>
                                                <p className='w-full line-clamp-1'>{special.ingredient}</p>
                                            </div>
                                            <div className='flex justify-end'>
                                                <button 
                                                onClick={() =>{ 
                                                    setMeal(special.name, special.picture, special.ingredient, special.category, special.isSpecial, special.code, special.price)
                                                    setOpn(!opn)
                                                }}
                                                className='transition-all text-end p-2 rounded-full px-5 font-semibold text-primaryColor border-[1px] border-transparent hover:text-white cursor-pointer bg-transparent hover:bg-primaryColor'
                                                >Open detail</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
                {/* meal modal */}
                <div className={`modal2 sm:p-20 px-5 py-12 top-0 left-0 w-full h-full overflow-scroll bg-white fixed z-[99999] ${ opn ? "block" : "hidden"}`}>
                    <div className="closebtn flex justify-end absolute sm:top-5 top-1 right-[15px]">
                        <button className='p-2 border-2 rounded-full sm:border-transparent border-red-500 sm:hover:border-red-500 transition-all' onClick={()=>{setOpn(!opn)}}><TfiClose className='text-red-600 sm:text-[25px]'/></button>
                    </div>
                    <div className="breadcrumb">
                        <p className='font-semibold text-xl'>Home | Menu | {mealName}</p>
                    </div>
                    {mealSpecial === true ? (
                        <div>
                            <p className='text-secondaryColor font-Jomolhari md:text-3xl text-xl mt-5 text-center w-full'>Presenting our special dish from {mealCategory} category, The <i className='underline text-white px-3 rounded-md bg-gradient-to-r from-secondaryColor to-primaryColor'>{mealName}</i>.</p>
                        </div>
                    )
                    : ""}
                    <div className='bottom xl:flex justify-center gap-2 lg:px-52 sm:py-20 p-5 auto'>
                        <div className="left p-5 w-fit flex justify-center ">
                            <img src={mealPicture} alt="" className='rounded-lg h-full' />
                        </div>
                        <div className="right w-full grid items-center">
                            <div>
                                <div className="top mb-5 flex justify-between">
                                    <h2 className='text-3xl font-semibold'>{mealName}</h2>
                                    <div className="end flex gap-3">
                                        <div className="price text-primaryColor flex gap-1 items-end">
                                            <p className='text-textColor text-xl'>Price </p>
                                            <p className='text-xl'> {mealPrice}<span className='text-xs font-semibold'>Birr</span></p>
                                        </div>
                                        <div className="code">
                                            <p className='bg-primaryColor text-white text-2xl px-2 rounded'>{mealCode}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom space-y-5 mt-8">
                                    <h3 className='text-xl font-semibold'>Ingredients</h3>
                                    <p className="ingredients text-xl pl-4">{mealIngredient}</p>
                                </div>
                            </div>

                            <div className="endDiv">
                                <h3 className='text-3xl font-semibold'>Ingredients</h3>
                                <div className="icons flex gap-8 my-5 mb-16 md:overflow-hidden overflow-x-scroll">
                                    <img src={egg} alt="" className='h-[75px]' />
                                    <img src={onion} alt="" className='h-[75px]' />
                                    <img src={oil} alt="" className='h-[75px]' />
                                    <img src={tomato} alt="" className='h-[75px]' />
                                    <img src={bread} alt="" className='h-[75px]' />
                                </div>
                                <button className='focus:ring-0 w-full text-center hover:bg-white hover:text-primaryColor transition-all border-2 border-transparent hover:border-primaryColor bg-primaryColor p-3 mx-2 rounded text-white text-2xl'>Order {mealCode} now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <FooterComponent />
    </>
  )
}

export default MenuScreen