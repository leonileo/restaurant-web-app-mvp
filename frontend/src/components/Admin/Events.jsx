import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDeleteEventMutation, useGetEventsQuery, useUpdateEventMutation } from '../../slices/eventApiSlice';
import { TfiClose } from "react-icons/tfi";
import eventbg from '../../assets/images/eventbg.jpg'
import { toast } from 'react-toastify'
import { Spinner, Tooltip } from 'flowbite-react'
import { useUploadFoodImageMutation } from '../../slices/foodApiSlice';
// import { BiSolidSearchAlt2 } from 'react-icons/bi'
// import event1 from '../../assets/images/event1.jpg'

const Events = ({ setTab }) => {
  const [eventName, setEventName] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventStartingTime, setEventStartingTime] = useState("")
  const [eventEndingTime, setEventEndingTime] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventImage, setEventImage] = useState("")
  const [eventID, setEventID] = useState("")
  const [eventModal, setEventModal] = useState(false);
  const [opn, setOpn] = useState(false);

  const [startingMeridian, setStartingMeridian] = useState('');
  const [startingTime, setStartingTime] = useState('');
  const [endingMeridian, setEndingMeridian] = useState('');
  const [endingTime, setEndingTime] = useState('');

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [id, setId] = useState('');


  // set event details
  const setDetails = (ename, description, startT, endT, date, image, eventID) => {
    setEventName(ename);
    setEventDescription(description);
    setEventStartingTime(startT);
    setEventEndingTime(endT);
    setEventDate(date)
    setEventImage(image);
    setEventID(eventID)
  }

  const phone_number = "0930306825"
  const {data: events, isLoading, error, refetch } = useGetEventsQuery()
  const [updateEvent, {isLoading: eventLoader, error: eventError}] = useUpdateEventMutation();

// dummy data
  
  // const events = [
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  //   { 
  //     name: "Kids with chef",
  //     date: "Every Saturday",
  //     time: "8:00 AM - 7:00 PM",
  //     description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
  //     picture: event1
  //   },
  // ]

// dummy data

  const [deleteEvent, {isLoading: deletLoader, error: deleteError}] = useDeleteEventMutation();
  const [uploadFoodImage] = useUploadFoodImageMutation();

  const deleteHandler = async (eventID) => {
    if (window.confirm(`Are you sure you want to delete ${eventID}`)) {
      try {
        await deleteEvent(eventID);
        refetch()
        toast.success("Event Deleted")
        setTimeout(() => {
          setOpn(false)
        }, 1500);
      } catch (error) {
        toast.error(error?.data?.message || error?.message)
      }
    } else {
      alert("Event deletion canceled?")
    }
  }

  const editModalHandler = () => {
    setId(eventID);
    setName(eventName);
    setDate(eventDate);
    setDescription(eventDescription);
    setPicture(eventImage);
    setEventModal(true)
  }

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
        await updateEvent({
        eventID: id,
        name, 
        startingTime: `${startingTime} ${startingMeridian}`,
        endingTime: `${endingTime} ${endingMeridian}`,
        date,
        description,
        picture
      }).unwrap();
      refetch();
      toast.success("Event updated sucessfuly")
      setTimeout(() => {
        setEventModal(false);
      }, 1500);
    } catch(err) {
      toast.error(err?.data?.message || err.error);
    }

  }

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
    <>
    {!eventModal && 
      <div>
      {/* top */}
      <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Events</h1>
        </div>
        {/* bottom */}
        <div className="bottom my-5">
          <div className="flex justify-between">
          {/* search functionality will be available for next version */}
            {/* <label className="search border-[1px] w-max rounded-md flex items-center focus:ring-0">
              <BiSolidSearchAlt2 className="w-9 h-9 px-1" />
              <input type="search" name="" id="" className="focus:ring-0 border-0 border-transparent" placeholder="Search..." />
            </label> */}
            {events && events.length > 0 &&
              <button onClick={()=> setTab(7)} className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add Events +</button>
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
            events.length > 0 ?
            <div className={`meals grid gap-5 ${ events && events.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} grid-cols-2 mt-5`}>
              {events.map((event, x) => (
                <div key={x} className=' border-[1px] rounded-lg overflow-hidden w-full'>
                  <div className="top h-[15vh]" style={{
                    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.5)), url(${event.picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  </div>
                  <div className="bottom md:p-5 p-2 space-y-4">
                    <div className="name md:text-3xl text-xl font-bold capitalize text-textColor truncate">{event.name}</div>
                    <div className="date flex items-start gap-2 text-nowrap truncate">
                      <div className="icon flex items-center">
                        <CiCalendar size={"20px"} />
                        <p>Date:</p>
                      </div>
                      <p className='text-gray-400'><span className='hidden lg:inline'>{event.time}</span> {event.date}</p>
                    </div>
                    <div className="description pr-5 text-balance">
                      <p className='line-clamp-2'>{event.description}</p>
                      <button onClick={()=>{
                          setDetails(event.name, event.description, event.startingTime, event.endingTime, event.date, event.picture, event._id)
                          setOpn(!opn)
                        }} 
                        className='btn mt-5 font-bold text-gray-400'><span className='group flex gap-2 items-center hover:text-secondaryColor'>More info <BsArrowRight className='group-hover:translate-x-2 transition-all' /></span></button>
                    </div>
                  </div>
                  <div className="book p-1 w-full">
                    <Link to={`tel:${phone_number}`} className="flex justify-center bg-secondaryColor hover:bg-primaryColor hover:text-textColor transition-all text-white rounded-lg py-2 items-center">
                      <p className='w-full text-center'>Book a table</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            : <div className='flex h-[50%] text-center items-center justify-center'>
                <div>
                  <p>No events created yet.</p>
                  <button className='font-semibold' onClick={()=> setTab(7)} >Click here to create one now.</button>
                </div>
            </div>
            }
          </div>
        </div>
        {/* preview modal */}
          <div className={`modal sm:p-20 px-5 py-12 top-0 left-0 w-full h-full bg-white fixed z-50 ${ opn ? "block" : "hidden"}`}>
            <div className="closebtn flex justify-end absolute sm:top-5 top-1 right-[15px]">
              <button className='p-2 border-2 rounded-full sm:border-transparent border-red-500 sm:hover:border-red-500 transition-all' onClick={()=>{setOpn(!opn)}}><TfiClose className='text-red-600 sm:text-[25px]'/></button>
            </div>
            <div className='bg-[rgba(237,235,235,0.5)] min-h-[40vh] h-auto rounded overflow-hidden'>
              <div className="relative top h-[15vh]"
                style={{
                  backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.5)), url(${eventbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                <div className='relative h-full'>
                  <h2 className='text-white font-semibold items-end p-4 sm:text-4xl text-2xl absolute bottom-0'>Event Details</h2>
                  <div className="actions absolute bottom-0 right-5 flex m-5 gap-3 items-center">
                    <div
                    onClick={() => deleteHandler(eventID)} 
                    className="text-red-500 p-2 bg-white rounded font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition-all">
                    { deletLoader ? <>Deleting <Spinner /> </> : deleteError ? "An Error occred!" : "Delete"}
                    </div>
                    <div onClick={editModalHandler} className="text-blue-500 p-2 bg-white rounded font-semibold cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className='my-5 px-5 font-semibold'>Event | {eventName}</p>
                <div className='bottom lg:flex-row flex-col-reverse flex sm:py-10 p-5'>
                  <div className='w-full'>
                    {/* bottom section */}
                      <div className="space-y-4">
                        <div className="name md:text-3xl text-xl font-bold capitalize text-textColor">{eventName}</div>
                        <div className="date flex items-start gap-2 sm:text-xl text-gray-400 font-light hover:text-secondaryColor  hover:font-normal transition-all w-fit">
                          <div className="icon flex items-center gap-1">
                            <CiCalendar className="sm:text-[25px] text-[20px]" />
                            <p>Date:</p>
                          </div>
                          <p> <span className='md:text-[20px]'> {eventStartingTime} - {eventEndingTime} </span> <br /> {eventDate}</p>
                        </div>
                        <div className="event-description pr-5 text-balance max-h-[25vh] h-auto sm:w-[80%] w-full sm:text-xl">
                          <p>{eventDescription}</p>
                        </div>
                      </div>
                      <div className="book p-1 w-full sm:mt-12 mt-5">
                        <Link to={`tel:${phone_number}`} className="flex justify-center w-[50%] bg-secondaryColor hover:bg-primaryColor hover:text-textColor transition-all text-white rounded-lg py-2 items-center">
                          <p className='text-center font-bold sm:text-xl'>Book a table</p>
                        </Link>
                      </div>
                  </div>
                  {/* event picture */}
                  <div className='sm:p-5 max-h-[55vh] max-w-[50%] flex justify-center items-start'>
                    <img src={eventImage} alt={`${eventName} `} className='h-full rounded-lg' />
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    }

    {eventModal && 
      <div>
            {/* top */}
            <div className="top flex justify-between">
                <h1 className='font-semibold md:text-2xl text-xl'><span onClick={() => setTab(3)} className='cursor-pointer text-gray-400'>Events /</span> Update event</h1>
                <div className="text-red-400">
                  <button onClick={() => setEventModal(false)} className='border border-red-400 hover:text-white hover:bg-red-500 rounded p-2'>Cancel</button>
                </div>
            </div>
            <h2 className='font-bold text-3xl my-5'>Update Event</h2>
            <form onSubmit={updateHandler} className="box flex items-start gap-5 p-2 border-2 rounded-lg">
            {/* form */}
                <div className='p-5 space-y-4 md:border-r-2 w-full'>
                <label className="input block space-y-4">
                    <label htmlFor="event_name" className='text-xl font-semibold block'>Name of the Event</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='event_name' className='w-full rounded-md border-gray-200' />
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
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" id='event_date' className='w-full rounded-md border-gray-200' />
                </label>
                <label className="input block space-y-4">
                    <label htmlFor="event_description" className='text-xl font-semibold block'>Event Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" id='event_description' className='w-full rounded-md h-[15vh] border-gray-200' />
                </label>
                <button type="submit" className='border-2 border-textColor bg-transparent p-2 px-5 md:text-3xl rounded-md hover:bg-textColor hover:text-white transition-all'>
                    {eventLoader ?<>Updating event <Spinner /></> : eventError ? "An error occured! try again" : "Create Event"}
                </button>
                </div>
                {/* image upload */}
                <div className="img-upload w-full">
                <label htmlFor='picture' className="icon flex justify-center items-center bg-gray-100 rounded border-[1px] md:min-h-[35vh] min-h-[15vh] my-2 ">
                  <div className="h-[35vh]">
                    <img src={picture}  alt='lt' className='h-full'/>
                  </div>
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

export default Events