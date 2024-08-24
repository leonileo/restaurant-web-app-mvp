import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactUsComponent = () => {
// info
  const phone_number = "09"
  const email_address = ""
  const address = "Ararat to kara"

  const cards = [
    {icon: <LuPhoneCall />, title: "Phone Number", value: phone_number},
    {icon: <MdOutlineMail />, title: "Email address", value: email_address},
    {icon: <HiOutlineLocationMarker />, title: "Location", value: address},
  ]
  return (
    <div className='mt-5 relative -z-10 overflow-hidden' id='contact'>
      <div className="tittle text-primaryColor text-center"><h2 className='text-4xl font-bold mb-10'>Contact us through</h2></div>
        <div className="cards flex flex-wrap gap-3 justify-center px-5">
          {cards.map((card) => (
            <div className='border-[1px] group hover:text-primaryColor text-textColor transition-all hover:bg-[rgba(237,235,235,0.5)] rounded-lg md:w-[450px] w-full sm:h-[18vh] p-5 py-10'>
              <section className='text-[50px] cursor-pointer'>{card.icon}</section>
              <div className="card-title font-bold sm:text-2xl "><p>{card.title}</p></div>
              <p>{card.value}</p>
            </div>
          ))}
        </div>
      <div className="map my-10 w-full md:px-10 px-5">
        <iframe title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.6505555163053!2d38.83084558458563!3d9.02745992259644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b90062ab7a5fd%3A0xf6c3d89f88b96452!2s2RHJ%2B28M%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1692800675182!5m2!1sen!2set"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
          className='w-full h-[30vh] rounded-md'></iframe>
      </div>
        <div className='top-[50px] -right-32 absolute flex justify-end z-0'>
            <span className='bg-gradient-to-r from-primaryColor to-white w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-full -rotate-[45deg]' />
        </div>
        <div className='-bottom-20 -left-20 -z-10 absolute flex justify-end '>
            <span className='bg-gradient-to-r from-white to-primaryColor w-[150px] h-[150px] rounded-full -rotate-[45deg]' />
        </div>
    </div>
  )
}

export default ContactUsComponent