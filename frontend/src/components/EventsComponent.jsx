import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { BsArrowRight } from "react-icons/bs";
import eventbg from '../assets/images/eventbg.jpg'
import event1 from '../assets/images/event1.jpg'
import event2 from '../assets/images/event2.jpg'
import event3 from '../assets/images/event3.webp'
import { Link } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";


const EventsComponent = () => {
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
      event_name: "Couples Night",
      event_date: "Every Thursday",
      event_time: "8:00 PM - 10:00 PM",
      event_description: "Escape the hustle and bustle of everyday life and spend an evening with your loved one at our Couples Night Out. Enjoy a delicious dinner, live music, and dancing.",
      event_picture: event2
    },
    { 
      event_name: "Single mom's",
      event_date: "Every Wednesday",
      event_time: "5:00 AM - 9:00 PM",
      event_description: "Free Night Out for Single Moms and Their Kids A night to relax, recharge, and have fun with your kids. Enjoy a delicious dinner, games, and activities.",
      event_picture: event3
    },
  ]
  return (
    <div className='p-10' id='events'>
      <div className='md:px-20 sm:space-y-5'>
        <div className="title w-[130px] px-5 my-2">
          <h1 className='text-3xl text-primaryColor'>Events</h1>
          <hr className='border-primaryColor border-[1px] rounded-full w-auto' />
        </div>
        <div className="events flex md:flex-nowrap flex-wrap gap-5 justify-center">
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
                <div className="date flex items-start gap-2">
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
      
      {/* Event modal */}
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
            <h2 className='text-white font-semibold items-end p-4 sm:text-4xl text-2xl absolute bottom-0'>Event Details</h2>
          </div>
          <div className='bottom lg:flex-row flex-col-reverse flex lg:px-52 sm:py-20 p-5'>
            <div className='w-full'>
              {/* bottom section */}
                <div className="space-y-4">
                  <div className="name md:text-3xl text-xl font-bold capitalize text-textColor">{eventName}</div>
                  <div className="date flex items-start gap-2 sm:text-xl text-gray-400 font-light hover:text-secondaryColor  hover:font-normal transition-all w-fit">
                    <div className="icon flex items-center gap-1">
                      <CiCalendar className="sm:text-[25px] text-[20px]" />
                      <p>Date:</p>
                    </div>
                    <p>{eventTime} {eventDate}</p>
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
            <div className='sm:p-5 px-5 w-fit flex justify-center items-start'>
              <img src={eventImage} alt={`${eventName} `} className=' rounded-lg' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EventsComponent