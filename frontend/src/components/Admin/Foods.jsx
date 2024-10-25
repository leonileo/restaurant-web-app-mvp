import React, { useState } from 'react'
import { useDeleteFoodMutation, useGetFoodsQuery, useUpdateFoodMutation, useUploadFoodImageMutation } from '../../slices/foodApiSlice';
import { Spinner, Tooltip } from 'flowbite-react'
import { TfiClose } from 'react-icons/tfi';
import egg from '../../assets/images/egg.png'
import onion from '../../assets/images/onion.png'
import oil from '../../assets/images/oil.png'
import tomato from '../../assets/images/tomato.png'
import bread from '../../assets/images/bread.png'
import { toast } from 'react-toastify'
import { useAddCategoryMutation, useGetCategoriesQuery } from '../../slices/categoryApiSlice';

const Foods = ({tab, setTab}) => {
  const [opn, setOpn] = useState(false);
  const [mealName, setMealName] = useState("");
  const [mealPicture, setMealPicture] = useState("");
  const [mealIngredient, setMealIngredient] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [mealSpecial, setMealSpecial] = useState("");
  const [mealCode, setMealCode] = useState("");
  const [mealPrice, setMealPrice] = useState();
  const [btnModal, setBtnModal] = useState(false);
  const [id, setId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [picture, setPicture] = useState('');


  const {data: meals, isLoading, error, refetch } = useGetFoodsQuery();  
  const {data: category, isLoading: categoryLoader, error: categoryError } = useGetCategoriesQuery();

  const setMeal = (mname, image, ingredient, category, special, code, price) => {
      setMealName(mname);
      setMealPicture(image);
      setMealIngredient(ingredient);
      setMealCategory(category);
      setMealSpecial(special);
      setMealCode(code);
      setMealPrice(price);
  }
  // create category
  const [createCategory, setCreateCategory] = useState('');
  const [addCategory, { isLoading: loadingAdd , error: errorCategory} ] = useAddCategoryMutation();
  const [updateFood, {isLoading: updateFoodLoader, error: updateFoodError}] = useUpdateFoodMutation();

  const addIngredient = (e) =>{
    e.preventDefault();
    ingredient !== "" && setAllIngredients([...allIngredients, ingredient]);
    setIngredient('')
  }

  const addNewCategory = async (e) => {
    e.preventDefault();
    const newCategory = await addCategory({categoryName: createCategory});
    if (newCategory.error) {
      toast.error(newCategory.error);
    } else {
      toast.success('Category created');
      refetch()
    }
  }
  
  const [uploadFoodImage, {isLoading: foodLoader, error: foodError}] = useUploadFoodImageMutation();

  const uploadFileHandler = async (e) =>{
    const formData = new FormData();
    formData.append('picture', e.target.files[0]);
    try {
        const res = await uploadFoodImage(formData).unwrap();
        toast.success(res.message);
        setPicture(res.picture);
    } catch (error) {
        toast.error(error?.data?.message || error?.error)
    }
  }  

  const [deleteFood, {isLoading: deletLoader, error: deleteError}] = useDeleteFoodMutation();

  const deleteHandler = async (id) => {
    if (window.confirm(`Are you sure you want to delete ${id}`)) {
      try {
        await deleteFood(id);
        refetch()
        toast.success("Food Deleted")
        setTimeout(() => {
          setOpn(false)
        }, 1500);
      } catch (error) {
        toast.error(error?.data?.message || error?.message)
      }
    } else {
      alert("Food deletion canceled?")
    }
  }

  // dummy data
  // const meals = [
  //   {
  //       name: "Scrambled eggs",
  //       picture: mealImg1,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Breakfast",
  //       isSpecial: false,
  //       code: '001',
  //       price: 140
  //   },
  //   {
  //       name: "Scrambled eggs",
  //       picture: mealImg1,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Breakfast",
  //       isSpecial: false,
  //       code: '002',
  //       price: 140
  //   },
  //   {
  //       name: "Scrambled eggs",
  //       picture: mealImg1,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Breakfast",
  //       isSpecial: false,
  //       code: '003',
  //       price: 140
  //   },
  //   {
  //       name: "Scrambled eggs",
  //       picture: mealImg1,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Breakfast",
  //       isSpecial: false,
  //       code: '004',
  //       price: 140
  //   },
  //   {
  //       name: "Burger",
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Burger",
  //       isSpecial: false,
  //       code: '005',
  //       price: 140
  //   },
  //   {
  //       name: "Scrambled eggs",
  //       picture: mealImg1,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Breakfast",
  //       isSpecial: false,
  //       code: '006',
  //       price: 140
  //   },
  //   {
  //       name: "Burger",
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Burger",
  //       isSpecial: false,
  //       code: '007',
  //       price: 140
  //   },
  //   {
  //       name: "Kitfo pizza",
  //       picture: specialImg,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Traditional foods",
  //       isSpecial: true,
  //       code: '008',
  //       price: 140
  //   },
  //   {
  //       name: "Pizza",
  //       picture: specialImg,
  //       ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       category: "Traditional foods",
  //       isSpecial: true,
  //       code: '009',
  //       price: 140
  //   },
  //   {
  //       meal_name: "Pizza",
  //       meal_picture: specialImg,
  //       meal_ingredient: "Egg, onions, tomato, oil, Breckland thyme with bread or injera.",
  //       meal_category: "Traditional foods",
  //       isSpecial: true,
  //       meal_code: '010',
  //       meal_price: 140
  //   },
  // ]
  // dummy data

  const editModalHandler = (id, name, code, price, ingredient, category, picture) => {
    setId(id);
    setName(name);
    setCode(code);
    setPrice(price);
    setAllIngredients(ingredient);
    setNewCategory(category);
    setPicture(picture);
    setEditModal(true)
  }

  const closeModal = () => {
    setEditModal(false);
  }

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      await updateFood({foodId: id, name, ingredient: allIngredients, price, code, picture, category: newCategory }).unwrap();
      refetch();
      toast.success("Meal updated sucessfuly")
      setTimeout(() => {
        setEditModal(false)
      }, 3000);
    } catch(err) {
      toast.error(err?.data?.message || err.error);
    }

  }

  return (
    <>
    {!editModal &&
    <div>
      {/* top */}
      <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Foods</h1>
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
              <button onClick={()=> setTab(6)} className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add meal +</button>
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
            <div className={`meals grid gap-5 ${meals.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} grid-cols-2 mt-5`}>
              {meals.map((meal) => (
                <div className='rounded-2xl overflow-hidden border-[1px]'>
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
                      setMeal(meal.name, meal.picture, meal.ingredient, meal.category, meal.special, meal.code, meal.price)
                      setOpn(!opn)
                    }} className="text-primaryColor font-semibold">Open detail</button>
                    <div className="opt flex justify-center relative">
                      <div className={ btnModal && id === meal._id ? `btns absolute bottom-0 flex gap-3 items-center right-3 transition-all bg-white rounded border p-2` : "hidden"}
                      >
                        <button onClick={(e) => {editModalHandler(meal._id, meal.name, meal.code, meal.price, meal.ingredient, meal.category, meal.picture)}} className='text-blue-500 bg-white-500 font-semibold hover:text-white hover:bg-blue-500 transition-all p-1 w-20 border border-blue-500 rounded-full '>Edit</button>
                        <button onClick={() => deleteHandler(meal._id)} className='text-red-500 bg-white-500 font-semibold hover:text-white hover:bg-red-500 transition-all p-1 min-w-20 border border-red-500 rounded-full '>
                          { deletLoader ? <div className='flex gap-2 items-center'> Deleting <Spinner/> </div> : "Delete"}
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
              ))
              }
            </div>
          : <div className='flex h-[50%] text-center items-center justify-center'>
                <div>
                  <p>No meals created yet.</p>
                  <button className="font-semibold" onClick={()=> setTab(6)} >Click here to create one now.</button>
                </div>
            </div>}
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
    </div>}
    {/* edit modal */}
    {editModal && 
      <div>
        {/* top */}
        <div className="top flex justify-between">
            <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(2)} className='cursor-pointer text-gray-400'>Foods /</span> Edit meal</h1>
            <div className="text-red-400">
              <button onClick={closeModal} className='border border-red-400 hover:text-white hover:bg-red-500 rounded p-2'>Cancel</button>
            </div>
        </div>
        <h2 className='font-bold text-3xl my-5'>Edit Meal</h2>
        <form onSubmit={updateHandler} className="box flex-col-reverse lg:flex-row flex items-start gap-5 p-2 border-2 rounded-lg">
          {/* form */}
            <div className='p-5 space-y-4 md:border-r-2 w-full'>
              <label className="input block space-y-4">
                <label htmlFor="name" className='text-xl font-semibold block'>Name of the meal</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="mealcode" className='text-xl font-semibold block'>Meal code</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="number" id='mealcode' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="price" className='text-xl font-semibold block'>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" id='price' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="ingredients" className='text-xl font-semibold block'>Ingredients</label>
                <div className="select-ingredients flex gap-10 items-center">
                  <input type="text" name='ingredients' onChange={(e) => setIngredient(e.target.value)} className='border-gray-300 rounded' />
                  <button onClick={addIngredient}
                    className='bg-transparent border-[1px] rounded border-primaryColor text-primaryColor text-2xl hover:bg-primaryColor hover:text-white transition-all px-4 p-2'
                  > Add
                  </button>
                </div>
                <div className="ing border-2 rounded p-2 w-full h-[15vh] cursor-not-allowed">
                  <p className='font-semibold'>
                    {allIngredients.map(ing => (
                    <p className='inline-block pr-1'>{ing},</p>
                  ))}</p>
                </div>
              </label>
              <label className="input block space-y-2 w-fit">
                <label htmlFor="category" className='text-xl font-semibold block'>category</label>
                  { categoryLoader ? "loading ..." :
                  categoryError ? "An error occured" :
                  <>{
                    category.length === 0 ? (
                      <div>
                      <label htmlFor='category' className='block mb-2'>No Catagories Available! <span className='underline text-primaryColor'> Click to create one now. </span></label>
                      <div className="div flex items-center gap-8">
                        <input type="text" id='category' onChange={(e) => setCreateCategory(e.target.value)} className='border-gray-400 rounded' />
                        <button onClick={addNewCategory}
                          className='bg-transparent border-[1px] rounded border-primaryColor text-primaryColor text-2xl hover:bg-primaryColor hover:text-white transition-all px-4 p-2'
                          > Add </button>
                      </div>
                    </div>
                  ) 
                  : (
                    <select name="category" id="category" onChange={(e) => setNewCategory(e.target.value)}>
                    { category.map(e => (
                      <option key={e._id} value={e.categoryName}>{e.categoryName}</option>
                    ))}
                  </select>
                  )
                  }
                  </>
                  }
              </label>
              <button type="submit" className='border-2 border-textColor bg-transparent p-2 px-5 md:text-3xl rounded-md hover:bg-textColor hover:text-white transition-all'>
                {updateFoodLoader ?<>Updating meal <Spinner /></> : updateFoodError ? "An error occured! try again" : "Update Meal"}
              </button>
            </div>
            {/* image upload */}
            <div className="img-upload w-full">
              <label htmlFor='picture' className="icon flex justify-center items-center bg-gray-100 rounded border-[1px] md:min-h-[35vh] min-h-[15vh] my-2">
                <img src={picture}  alt='lt'/>
              </label>
              <div className='px-5 relative'>
                    <input 
                    onChange={(e) => {uploadFileHandler(e)}}
                    type="file" 
                    name="picture" id="picture" className='absolute hidden' />
                    <button type='button' className='p-2 w-full flex cursor-pointer'>
                      <label htmlFor='picture' className='bg-primaryColor cursor-pointer rounded-md text-white border-2 border-transparent p-2 w-full hover:bg-transparent hover:text-primaryColor hover:border-primaryColor transition-all md:text-2xl'> 
                        Change image
                      </label> 
                  </button>
              </div>
            </div>
        </form>
      </div>
    }
    </>
  )
}

export default Foods