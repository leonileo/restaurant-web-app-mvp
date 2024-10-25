import React, { useEffect, useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { useAddCategoryMutation, useGetCategoriesQuery } from '../../slices/categoryApiSlice';
import { toast } from 'react-toastify'
import { useCreateFoodMutation, useGetFoodsQuery, useUploadFoodImageMutation } from '../../slices/foodApiSlice';
import { Spinner } from 'flowbite-react';

const CreateFood = ({setTab}) => {
  const [ingredient, setIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [picture, setPicture] = useState('')

  const {data: category, isLoading, error } = useGetCategoriesQuery();
  const { refetch } = useGetFoodsQuery();

  // create category
  const [createCategory, setCreateCategory] = useState('');
  const [addCategory, { isLoading: loadingAdd , error: errorCategory} ] = useAddCategoryMutation();

  // dummy data

  // const category = 
  // [
  //     "Breakfast",
  //     "Sandwich",
  //     "Pizza",
  //     "Burger",
  //     "Juice",
  //     "Coffee",
  //     "Cold drinks",
  //     "Traditional foods"
  // ]

  // dummy data

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

  const [createFood, {isLoading: createFoodLoader, error: createFoodError}] = useCreateFoodMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const addFood = {
      name,
      code,
      price,
      ingredient: allIngredients,
      category: newCategory,
      picture
    }

    const newFood = await createFood(addFood)
    if (newFood.error) {
        toast.error(newFood.error?.data?.message);
    } else {
        refetch()
        toast.success("Food Created!")
        setTimeout(() => {
            setTab(2)
        }, 500)
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

  return (
    <div>
        {/* top */}
        <div className="top flex justify-between">
            <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(2)} className='cursor-pointer text-gray-400'>Foods /</span> Add meal</h1>
            <div className="text-red-400">
              <button onClick={() => setTab(2)} className='border border-red-400 hover:text-white hover:bg-red-500 rounded p-2'>Cancel</button>
            </div>
        </div>
        <h2 className='font-bold text-3xl my-5'>Create Meal</h2>
        <form onSubmit={submitHandler} className="box flex-col-reverse lg:flex-row flex items-start gap-5 p-2 border-2 rounded-lg">
          {/* form */}
            <div className='p-5 space-y-4 md:border-r-2 w-full'>
              <label className="input block space-y-4">
                <label htmlFor="name" className='text-xl font-semibold block'>Name of the meal</label>
                <input onChange={(e) => setName(e.target.value)} type="text" id='name' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="mealcode" className='text-xl font-semibold block'>Meal code</label>
                <input onChange={(e) => setCode(e.target.value)} type="number" id='mealcode' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="price" className='text-xl font-semibold block'>Price</label>
                <input onChange={(e) => setPrice(e.target.value)} type="number" id='price' className='w-full rounded-md border-gray-200' />
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
                  { isLoading ? "loading ..." :
                   error ? "An error occured" :
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
                {createFoodLoader ?<>Creating meal <Spinner /></> : createFoodError ? "An error occured! try again" : "Create Meal"}
              </button>
            </div>
            {/* image upload */}
            <div className="img-upload w-full">
              <label htmlFor='picture' className="icon flex justify-center items-center bg-gray-100 rounded border-[1px] md:min-h-[35vh] min-h-[15vh] my-2">
                {picture ? picture : 
                    <>
                    <IoCloudUploadOutline className='md:h-32 md:w-32 h-16 w-16' />
                    </>
                    }
              </label>
              <div className='px-5 relative'>
                    <input 
                    onChange={(e) => {uploadFileHandler(e)}}
                    type="file" 
                    name="picture" id="picture" className='absolute hidden' />
                <button type='button'
                className='bg-primaryColor rounded-md text-white border-2 border-transparent p-2 w-full hover:bg-transparent hover:text-primaryColor hover:border-primaryColor transition-all md:text-2xl'>
                Upload image</button> 
              </div>
            </div>
        </form>
    </div>
  )
}

export default CreateFood