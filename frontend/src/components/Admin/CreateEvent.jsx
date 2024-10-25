import { Spinner, Tooltip } from 'flowbite-react';
import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { useCreateEventMutation, useGetEventsQuery, useUploadEventImageMutation } from '../../slices/eventApiSlice';
import { toast } from 'react-toastify'

const CreateEvent = ({setTab}) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');

    const [startingMeridian, setStartingMeridian] = useState('');
    const [startingTime, setStartingTime] = useState('');
    const [endingMeridian, setEndingMeridian] = useState('');
    const [endingTime, setEndingTime] = useState('');

    const {refetch} = useGetEventsQuery()
    const [createEvent, {isLoading: eventLoader, error: eventError}] = useCreateEventMutation();
    const [uploadEventImage] = useUploadEventImageMutation(); 

    const submitHandler = async (e) => {
        e.preventDefault();
        const addEvent = {
            name, 
            startingTime: `${startingTime} ${startingMeridian}`,
            endingTime: `${endingTime} ${endingMeridian}`,
            date,
            description,
            picture
        }

        const newEvent = await createEvent(addEvent)
        if (newEvent.error) {
            toast.error(newEvent.error?.data?.message);
        } else {
            refetch();
            toast.success("Event Created!")
            setTimeout(() => {
                setTab(3)
            }, 500)
        }
    }

    const uploadFileHandler = async (e) =>{
        const formData = new FormData();
        formData.append('picture', e.target.files[0]);
        try {
            const res = await uploadEventImage(formData).unwrap();
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
                <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(3)} className='cursor-pointer text-gray-400'>Events /</span> Add event</h1>
                <div className="text-red-400">
                    <button onClick={() => setTab(3)} className='border border-red-400 hover:text-white hover:bg-red-500 rounded p-2'>Cancel</button>
                </div>
            </div>
            <h2 className='font-bold text-3xl my-5'>Create Event</h2>
            <form onSubmit={submitHandler} className="box flex-col-reverse lg:flex-row flex items-start gap-5 p-2 border-2 rounded-lg">
            {/* form */}
                <div className='p-5 space-y-4 md:border-r-2 w-full'>
                <label className="input block space-y-4">
                    <label htmlFor="event_name" className='text-xl font-semibold block'>Name of the Event</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" id='event_name' className='w-full rounded-md border-gray-200' />
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_time" className='text-xl font-semibold block'>Event Time</label>
                    <div className="flex items-center gap-5">
                        <Tooltip content="Enter the starting time of the event.">
                            <input type="time" max={12} maxLength={2} id='event_time_from' onChange={(e) => {
                                let [h, m] = e.target.value.split(":");
                                setStartingTime((h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? setStartingMeridian('PM') : setStartingMeridian('AM'))
                            }} placeholder='From' className='text-center w-[100px] rounded-md border-gray-200' />
                        </Tooltip>
                        <p className='text-gray-400 font-bold'>-</p>
                        <Tooltip content="Enter the Ending time of the event.">
                            <input type="time" max={12} maxLength={2} id='event_time_to' onChange={(e) => {
                                let [h, m] = e.target.value.split(":");
                                setEndingTime((h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? setEndingMeridian('PM') : setEndingMeridian('AM'))
                            }}  placeholder='To' className='text-center w-[100px] rounded-md border-gray-200' />
                        </Tooltip>
                    </div>
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_date" className='text-xl font-semibold block'>Event Date</label>
                    <input onChange={(e) => setDate(e.target.value)} type="text" id='event_date' className='w-full rounded-md border-gray-200' />
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_description" className='text-xl font-semibold block'>Event Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" id='event_description' className='w-full rounded-md h-[15vh] border-gray-200' />
                </label>
                <button type="submit" className='border-2 border-textColor bg-transparent p-2 px-5 md:text-3xl rounded-md hover:bg-textColor hover:text-white transition-all'>
                    {eventLoader ?<>Creating event <Spinner /></> : eventError ? "An error occured! try again" : "Create Event"}
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

export default CreateEvent