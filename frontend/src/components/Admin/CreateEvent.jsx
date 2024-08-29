import { Tooltip } from 'flowbite-react';
import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

const CreateEvent = ({setTab}) => {
  return (
        <div>
            {/* top */}
            <div className="top">
                <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(3)} className='cursor-pointer text-gray-400'>Events /</span> Add event</h1>
            </div>
            <h2 className='font-bold text-3xl my-5'>Create Event</h2>
            <form className="box flex items-start gap-5 p-2 border-2 rounded-lg">
            {/* form */}
                <div className='p-5 space-y-4 md:border-r-2 w-full'>
                <label className="input block space-y-4">
                    <label htmlFor="event_name" className='text-xl font-semibold block'>Name of the Event</label>
                    <input type="text" id='event_name' className='w-full rounded-md border-gray-200' />
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_time" className='text-xl font-semibold block'>Event Time</label>
                    <div className="flex items-center gap-5">
                        <Tooltip content="Enter the starting time of the event.">
                            <input type="time" id='event_time_from' placeholder='From' className='text-center w-[100px] rounded-md border-gray-200' />
                        </Tooltip>
                        <p className='text-gray-400 font-bold'>-</p>
                        <Tooltip content="Enter the Ending time of the event.">
                            <input type="time" id='event_time_to' placeholder='To' className='text-center w-[100px] rounded-md border-gray-200' />
                        </Tooltip>
                    </div>
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_date" className='text-xl font-semibold block'>Event Date</label>
                    <input type="text" id='event_date' className='w-full rounded-md border-gray-200' />
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_description" className='text-xl font-semibold block'>Event Description</label>
                    <input type="text" id='event_description' className='w-full rounded-md h-[15vh] border-gray-200' />
                </label>
                <button type="submit" className='border-2 border-textColor bg-transparent p-2 px-5 md:text-3xl rounded-md hover:bg-textColor hover:text-white transition-all'>Create Event</button>
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

export default CreateEvent