import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <>
            {/* Topbar */}
            <div className="w-full h-12 flex justify-between items-center px-4">
                {/* top left */}
                <div className="">
                    {/* logo */}
                    <p className="cursor-pointer text-blue-800 text-2xl font-bold">EasyShop</p>
                </div>
                {/* top right */}
                <div className="flex items-center gap-2">
                    {/* Notifications icon */}
                    <div className="text-[#555] relative cursor-pointer">
                        <NotificationsIcon />
                        {/* NotificationsIcon Badge */}
                        <span className='w-[14px] h-[14px] bg-red-600 text-white flex justify-center items-center absolute top-0 right-0 text-[11px] rounded-full'>2</span>
                    </div>
                    {/* Language icon */}
                    <div className="text-[#555] relative cursor-pointer">
                        <LanguageIcon />
                        {/* LanguageIcon Badge */}
                        <span className='w-[14px] h-[14px] bg-red-600 text-white flex justify-center items-center absolute top-0 right-0 text-[11px] rounded-full'>2</span>
                    </div>
                    {/* SettingsIcon icon */}
                    <div className="text-[#555] cursor-pointer">
                        <SettingsIcon />
                    </div>
                    <div className="w-10 rounded-full cursor-pointer overflow-hidden">
                    <img className='w-full' src="./public/vite.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
