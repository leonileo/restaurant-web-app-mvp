import React, { useState } from 'react'
import { BiSolidSearchAlt2 } from 'react-icons/bi'
import { TfiClose } from 'react-icons/tfi'
import { CiBarcode } from "react-icons/ci";
import { useAddSpecialMutation, useGetSpecialsQuery, useUpdateSpecialMutation } from '../../slices/specialsApiSlice'
import { toast } from 'react-toastify';
import { Spinner, Tooltip } from 'flowbite-react';
import egg from '../../assets/images/egg.png'
import onion from '../../assets/images/onion.png'
import oil from '../../assets/images/oil.png'
import tomato from '../../assets/images/tomato.png'
import bread from '../../assets/images/bread.png'
// import specialImg from '../../assets/images/specialImg.jpg'
// import mealImg1 from '../../assets/images/mealImg1.jpg'

const Specials = ({tab, setTab}) => {
  const [opn, setOpn] = useState(false);
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState('');
  const [mealName, setMealName] = useState("");
  const [mealPicture, setMealPicture] = useState("");
  const [mealIngredient, setMealIngredient] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [mealSpecial, setMealSpecial] = useState();
  const [mealCode, setMealCode] = useState("");
  const [mealPrice, setMealPrice] = useState();
  const [id, setId] = useState('');
  const [btnModal, setBtnModal] = useState('');
  
  const { data: meals, isLoading, error, refetch } = useGetSpecialsQuery();

  const [addSpecial, {isLoading: addLoader,  error: addError }] = useAddSpecialMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addSpecial({
        code
      }).unwrap()
      refetch()
      toast.success("Special food added!")
      setTimeout(() => {
        setModal(!modal)
      }, 1500);

    } catch(err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  // dummy data

//   const meals = [
//     {
//         name: "Scrambled eggs",
//         picture: mealImg1,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Breakfast",
//         is_special: false,
//         code: '001',
//         price: 140
//     },
//     {
//         name: "Scrambled eggs",
//         picture: mealImg1,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Breakfast",
//         is_special: false,
//         code: '002',
//         price: 140
//     },
//     {
//         name: "Scrambled eggs",
//         picture: mealImg1,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Breakfast",
//         is_special: false,
//         code: '003',
//         price: 140
//     },
//     {
//         name: "Scrambled eggs",
//         picture: mealImg1,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Breakfast",
//         is_special: false,
//         code: '004',
//         price: 140
//     },
//     {
//         name: "Burger",
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Burger",
//         is_special: false,
//         code: '005',
//         price: 140
//     },
//     {
//         name: "Scrambled eggs",
//         picture: mealImg1,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Breakfast",
//         is_special: false,
//         code: '006',
//         price: 140
//     },
//     {
//         name: "Burger",
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Burger",
//         is_special: false,
//         code: '007',
//         price: 140
//     },
//     {
//         name: "Kitfo pizza",
//         picture: specialImg,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Traditional foods",
//         is_special: true,
//         code: '008',
//         price: 140
//     },
//     {
//         name: "Pizza",
//         picture: specialImg,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Traditional foods",
//         is_special: true,
//         code: '009',
//         price: 140
//     },
//     {
//         name: "Pizza",
//         picture: specialImg,
//         ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
//         category: "Traditional foods",
//         is_special: true,
//         code: '010',
//         price: 140
//     },
// ]
  // dummy data

  const setMeal = (mname, image, ingredient, category, special, code, price) => {
    setMealName(mname);
    setMealPicture(image);
    setMealIngredient(ingredient);
    setMealCategory(category);
    setMealSpecial(special);
    setMealCode(code);
    setMealPrice(price);
  }

  const [updateSpecial, {isLoading: specialLoader} ] = useUpdateSpecialMutation();

  const deleteHandler = async (id) => {
    if (window.confirm(`Are you sure you want to delete ${id}`)) {
      try {
        await updateSpecial({foodId: id, isSpecial: false}).unwrap();
        refetch()
        toast.success("Special food removed.")
        setTimeout(() => {
          setOpn(false)
        }, 1500);
      } catch (error) {
        toast.error(error?.data?.message || error?.message)
      }
    } else {
      alert("Removing process canceled?")
    }
  }

  return (
    <div>
      {/* top */}
      <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Specials</h1>
        </div>
        {/* bottom */}
        <div className="bottom my-5">
          <div className="flex justify-between">
            {/* search functionality will be available for the next version */}
            {/* <label className="search border-[1px] w-max rounded-md flex items-center focus:ring-0">
              <BiSolidSearchAlt2 className="w-9 h-9 px-1" />
              <input type="search" name="" id="" className="focus:ring-0 border-0 border-transparent" placeholder="Search..." />
            </label> */}
            {meals && meals.length > 0 &&
              <button onClick={()=> setModal(!modal) } className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add special meal +</button>
            }
          </div>
          <div className="h-[80vh] my-5 overflow-auto">
              {isLoading ? <div className='flex items-center justify-center gap-3 text-3xl w-full'>
                  <p>Loading...</p>
                  <Spinner /> 
                </div> :
                error ? 
                <div className='flex items-center justify-center gap-3 text-3xl w-full'>
                <p>Error !</p>
                </div>
                : 
                meals.length > 0 ?
                (<div className={`meals grid gap-5 ${meals.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} grid-cols-2 mt-5`}>
                  {meals.map((meal) => (
                    <div className='rounded-2xl overflow-hidden border-[1px] hover:shadow-md transition-all'>
                      <div className="top h-[15vh]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.8)), url(${meal.picture})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="text p-5">
                        <h1 className="text-primaryColor text-2xl font-semibold">{meal.name}</h1>
                        <div className="ingredients p-2">
                          <h2>Ingredients</h2>
                          <p className='truncate'>{meal.ingredient}</p>
                        </div>
                      </div>

                      <div className="btns flex justify-between p-2 px-5">
                        <button onClick={() => {
                          setMeal(meal.name, meal.picture, meal.ingredient, meal.category, meal.isSpecial, meal.code, meal.price)
                          setOpn(!opn)
                        }} className="text-primaryColor font-semibold">Open detail</button>
                        <div className="opt flex justify-center relative">
                          <div className={ btnModal && id === meal._id ? `btns absolute bottom-0 flex gap-3 items-center right-3 transition-all bg-white rounded border p-2` : "hidden"}>
                            <button onClick={() => deleteHandler(meal._id)} className='text-red-500 bg-white-500 font-semibold hover:text-white hover:bg-red-500 transition-all p-1 sm:min-w-[200px] border border-red-500 rounded-full'>
                              { specialLoader ? <div className='flex gap-2 items-center'> Removing <Spinner/> </div> : <p>Remove</p>}
                            </button>
                          </div>
                          <div onClick={() => {setId(meal._id); setBtnModal(!btnModal)}} className='space-y-1 cursor-pointer'>
                              <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                              <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                              <div className="w-[4px] h-[4px] bg-primaryColor rounded-full block"></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>)
               : 
               <div className='w-full h-[50%] flex text-center justify-center items-center'>
                  <p>
                   No data available <br /> <button onClick={()=> setModal(!modal) } className='font-semibold'>Click here to add a special meal now</button>
                 </p>
               </div>
              }
          </div>
        </div>

        {/* add special modal */}
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
                <form onSubmit={submitHandler} className='max-w-[550px] space-y-3 p-4 border-[1px] rounded-md'>
                  <label className='block font-semibold text-xl focus:ring-0 border-0' htmlFor="foodcode">Enter food code</label>
                  <div className="fc relative w-[210px] border-2 focus:ring-0 border-[rgba(76,244,42,0.72)] rounded">
                    <input type="text" onChange={(e) => setCode(e.target.value)} name="foodcode" id="foodcode" className='border-0 focus:ring-0 w-[90%]' />
                    <div className="absolute top-3 right-3">
                      <CiBarcode />
                    </div>
                  </div>
                  <div className='border-[1px] border-primaryColor text-primaryColor flex justify-center items-center w-fit p-2 px-5 rounded hover:bg-primaryColor hover:text-white transition-all'>
                    <button type="submit" className=''>{ addLoader ? <Spinner/> : addError ? "An error occured" :"Add special" }</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>}

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
              <div className='bottom xl:flex justify-center gap-5 lg:px-52 sm:py-20 p-5 auto'>
                  <div className="left p-2 xl:w-[50%] xl:max-h-[80vh] h-full rounded mb-2 xl:m-0 border border-[rgba(76,244,42,0.72)] flex justify-center ">
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
                                    <Tooltip content="Food code">
                                      <p className='bg-primaryColor text-white text-2xl px-2 rounded'>{mealCode}</p>
                                    </Tooltip>
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
  )
}

export default Specials