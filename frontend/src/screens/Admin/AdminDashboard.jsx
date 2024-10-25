import React, { useState } from 'react'
import AdminNav from '../../components/AdminNav';
import { MdDashboardCustomize } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import Dashboard from '../../components/Admin/Dashboard';
import Foods from '../../components/Admin/Foods';
import Events from '../../components/Admin/Events';
import Specials from '../../components/Admin/Specials';
import Account from '../../components/Admin/Account';
import { Tooltip } from 'flowbite-react';
import CreateFood from '../../components/Admin/CreateFood';
import CreateEvent from '../../components/Admin/CreateEvent';
import EditAccount from '../../components/Admin/EditAccount';


const AdminDashboard = () => {
    const [tab, setTab] = useState(1)
    const [name, setName] = useState(1)
    const [email, setEmail] = useState(1)

  return (
    <div className='min-h-[100vh] h-full'>
        <div className="rounded-none top">
            <AdminNav />
        </div>
        <div className="bottom flex h-full">
            {/* links */}
            <div className="left border-r-2 md:w-[250px] grid items-center">
                <div className="alinks h-[50%] transition-all">
                    <button onClick={() => setTab(1)} className={`transition-all ease-linear block p-5 w-full relative rounded-r border-[1px] focus:ring-0 ${ tab === 1 ? "bg-white shadow-lg border-gray-200" : "border-transparent"}`}>
                        <div className="link-dash flex gap-4 items-center">
                            <Tooltip content="Dashboard" placement='left'>
                                <div className="icon"><MdDashboardCustomize /></div>
                            </Tooltip>
                            <div className="link-name hidden md:block">Dashboard</div>
                        </div>
                        <span className={`${ tab === 1 ? "block" : "hidden"} absolute bg-primaryColor w-[3px] h-[80%] right-0 top-2 rounded-full `}></span>
                    </button>
                    <button onClick={() => setTab(2)} className={`transition-all ease-linear block p-5 w-full relative rounded-r border-[1px] focus:ring-0 ${ tab === 2 || tab === 6 ? "bg-white shadow-lg border-gray-200" : "border-transparent"}`}>
                        <div className="link-dash flex gap-4 items-center">
                            <Tooltip content="Food" placement='left'>
                                <div className="icon"><BiFoodMenu /></div>
                            </Tooltip>
                            <div className="link-name hidden md:block">Foods</div>
                        </div>
                        <span className={`${ tab === 2 || tab === 6 ? "block" : "hidden"} absolute bg-primaryColor w-[3px] h-[80%] right-0 top-2 rounded-full `}></span>
                    </button>
                    <button onClick={() => setTab(3)} className={`transition-all ease-linear block p-5 w-full relative rounded-r border-[1px] focus:ring-0 ${ tab === 3 || tab === 7 ? "bg-white shadow-lg border-gray-200" : "border-transparent"}`}>
                        <div className="link-dash flex gap-4 items-center">
                            <Tooltip content="Events" placement='left'>
                                <div className="icon">< MdEventAvailable /></div>
                            </Tooltip>
                            <div className="link-name hidden md:block">Events</div>
                        </div>
                        <span className={`${ tab === 3 || tab === 7? "block" : "hidden"} absolute bg-primaryColor w-[3px] h-[80%] right-0 top-2 rounded-full `}></span>
                    </button>
                    <button onClick={() => setTab(4)} className={`transition-all ease-linear block p-5 w-full relative rounded-r border-[1px] focus:ring-0 ${ tab === 4 ? "bg-white shadow-lg border-gray-200" : "border-transparent"}`}>
                        <div className="link-dash flex gap-4 items-center">
                            <Tooltip content="Specials" placement='left'>
                                <div className="icon"><MdOutlineFolderSpecial /></div>
                            </Tooltip>
                            <div className="link-name hidden md:block">Specials</div>
                        </div>
                        <span className={`${ tab === 4 ? "block" : "hidden"} absolute bg-primaryColor w-[3px] h-[80%] right-0 top-2 rounded-full `}></span>
                    </button>
                    <button onClick={() => setTab(5)} className={`transition-all ease-linear block p-5 w-full relative rounded-r border-[1px] focus:ring-0 ${ tab === 5 || tab === 8 ? "bg-white shadow-lg border-gray-200" : "border-transparent"}`}>
                        <div className="link-dash flex gap-4 items-center">
                            <Tooltip content="Account" placement='left'>
                                <div className="icon"><FaUserCog /></div>
                            </Tooltip>
                            <div className="link-name hidden md:block">Account</div>
                        </div>
                        <span className={`${ tab === 5 || tab === 8 ? "block" : "hidden"} absolute bg-primaryColor w-[3px] h-[80%] right-0 top-2 rounded-full `}></span>
                    </button>
                </div>
            </div>

            {/* components */}
            <div className="right p-5 w-full overflow-hidden">
                {tab === 1 && <Dashboard tab={tab} setTab={setTab} />}
                {tab === 2 && <Foods tab={tab} setTab={setTab} />}
                {tab === 3 && <Events tab={tab} setTab={setTab} />}
                {tab === 4 && <Specials tab={tab} setTab={setTab} />}
                {tab === 5 && <Account tab={tab} setTab={setTab} setName={setName} setEmail={setEmail} />}
                {tab === 6 && <CreateFood tab={tab} setTab={setTab} />}
                {tab === 7 && <CreateEvent tab={tab} setTab={setTab} />}
                {tab === 8 && <EditAccount tab={tab} setTab={setTab} name={name} setName={setName} email={email} setEmail={setEmail} />}
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard