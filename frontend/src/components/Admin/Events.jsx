import React, { useState } from 'react'
import { BiSolidSearchAlt2 } from 'react-icons/bi'
import event1 from '../../assets/images/event1.jpg'
import { CiCalendar } from 'react-icons/ci'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Events = ({tab, setTab}) => {
  const [eventName, setEventName] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventImage, setEventImage] = useState("")

  const [opn, setOpn] = useState(false);

  // set event details
  const setDetails = (ename, description, time, date, image) => {
    setEventName(ename);
    setEventDescription(description);
    setEventTime(time);
    setEventDate(date)
    setEventImage(image);
  }

  const phone_number = "0930306825"

  const events = [
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
    { 
      event_name: "Kids with chef",
      event_date: "Every Saturday",
      event_time: "8:00 AM - 7:00 PM",
      event_description: "Calling all aspiring young chefs! Join us for a fun and educational pizza cooking workshop. We'll provide all the ingredients and tools you need, and you'll even get to take home your finished pizzas. This workshop is perfect for kids ages 6-12. Space is limited, so sign up today!",
      event_picture: event1
    },
  ]
  return (
    <div>
      {/* top */}
      <div className="top">
            <h1 className='font-bold md:text-2xl text-xl'>Events</h1>
        </div>
        {/* bottom */}
        <div className="bottom my-5">
          <div className="flex justify-between">
            <label className="search border-[1px] w-max rounded-md flex items-center focus:ring-0">
              <BiSolidSearchAlt2 className="w-9 h-9 px-1" />
              <input type="search" name="" id="" className="focus:ring-0 border-0 border-transparent" placeholder="Search..." />
            </label>
            <button onClick={()=> setTab(7)} className="bg-primaryColor text-white border-2 border-transparent hover:bg-transparent hover:border-primaryColor hover:text-primaryColor p-5 py-2 rounded-md transition-all font-semibold">Add Events +</button>
          </div>
          <div className="h-[80vh] my-5 overflow-auto">
            <div className="meals grid gap-5 md:grid-cols-4 grid-cols-2 mt-5">
              {events.map((event, x) => (
                <div key={x} className=' border-[1px] rounded-lg overflow-hidden w-full'>
                  <div className="top h-[15vh]" style={{
                    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.5)), url(${event.event_picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  </div>
                  <div className="bottom md:p-5 p-2 space-y-4">
                    <div className="name md:text-3xl text-xl font-bold capitalize text-textColor">{event.event_name}</div>
                    <div className="date flex items-start gap-2 text-nowrap truncate">
                      <div className="icon flex items-center">
                        <CiCalendar size={"20px"} />
                        <p>Date:</p>
                      </div>
                      <p className='text-gray-400'><span className='hidden lg:inline'>{event.event_time}</span> {event.event_date}</p>
                    </div>
                    <div className="description pr-5 text-balance">
                      <p className='line-clamp-2'>{event.event_description}</p>
                      <button onClick={()=>{
                          setDetails(event.event_name, event.event_description, event.event_time, event.event_date, event.event_picture)
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
          </div>
        </div>
        {/* modal */}

    </div>
  )
}

export default Events