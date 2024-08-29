import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

const CreateFood = ({setTab}) => {
  const [ingredient, setIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState([]);

  const ingredientLists = [
    "Onion", "Oil", "Bread"
  ]

  const addIngredient = (e) =>{
    e.preventDefault()
    ingredient !== "" && setAllIngredients([...allIngredients, ingredient])
  }
  return (
    <div>
        {/* top */}
        <div className="top">
            <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(2)} className='cursor-pointer text-gray-400'>Foods /</span> Add meal</h1>
        </div>
        <h2 className='font-bold text-3xl my-5'>Create Meal</h2>
        <form className="box flex items-start gap-5 p-2 border-2 rounded-lg">
          {/* form */}
            <div className='p-5 space-y-4 md:border-r-2 w-full'>
              <label className="input block space-y-4">
                <label htmlFor="name" className='text-xl font-semibold block'>Name of the meal</label>
                <input type="text" id='name' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="mealcode" className='text-xl font-semibold block'>Meal code</label>
                <input type="text" id='mealcode' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="price" className='text-xl font-semibold block'>Price</label>
                <input type="text" id='price' className='w-full rounded-md border-gray-200' />
              </label>
              <label className="input block space-y-4">
                <label htmlFor="ingredients" className='text-xl font-semibold block'>Ingredients</label>
                <div className="select-ingredients flex gap-10 items-center">
                  <select name="ingredients" id="ingredients" 
                    onChange={(e)=> e.target.value !== " " && setIngredient(e.target.value)}
                    className='text-xl text-gray-400 rounded border-gray-400 focus:ring-0 focus:border-gray-400'
                  >
                    <option value={""} >Select ingredients</option>
                    {ingredientLists.map(ing => (
                      <option value={ing}>{ing}</option>
                    )
                    )}
                  </select>
                  <button onClick={addIngredient}
                    className='bg-transparent border-[1px] rounded border-primaryColor text-primaryColor text-2xl hover:bg-primaryColor hover:text-white transition-all px-4 p-2'
                  > Add
                  </button>
                </div>
                <div className="ing border-2 rounded p-2 w-full h-[15vh]">
                  <p className='font-semibold'>
                    {allIngredients.map(ing => (
                    <p className='inline-block pr-1'>{ing},</p>
                  ))}</p>
                </div>
              </label>
              <button type="submit" className='border-2 border-textColor bg-transparent p-2 px-5 md:text-3xl rounded-md hover:bg-textColor hover:text-white transition-all'>Create meal</button>
            </div>
            {/* image upload */}
            <div className="img-upload w-full">
              <div className="icon flex justify-center items-center bg-gray-100 rounded border-[1px] md:min-h-[35vh] min-h-[15vh] my-2">
                <IoCloudUploadOutline className='md:h-32 md:w-32 h-16 w-16' />
              </div>
              <div className='px-5'>
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