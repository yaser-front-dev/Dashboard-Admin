import React from 'react'
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (

    <>
      <div className="bg-[rgb(251,251,255)] pl-5 pt-8 rounded-lg h-[calc(100vh - 48px)] w-full">
        {/* menu */}
        <div className="">
          <h3 className='text-[rgb(187,186,186)] text-[14px]'>Dashboard</h3>
          <ul className='pl-2 pr-3'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[rgb(240,240,255)] text-[rgb(122,122,122)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
                  : "text-[rgb(122,122,122)] hover:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
              }
            >
              <li>
                <LineStyleIcon className='mr-1' />
                Home
              </li>
            </NavLink>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <TimelineIcon className="mr-1" />
              Analytics
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <TrendingUpIcon className="mr-1" />
              Sales
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className='text-[rgb(187,186,186)] text-[14px]'>Quick Menu</h3>
          <ul className='pl-2 pr-3'>
            <NavLink to="/Users"
              className={({ isActive }) =>
                isActive
                  ? "bg-[rgb(240,240,255)] text-[rgb(122,122,122)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
                  : "text-[rgb(122,122,122)] hover:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
              }
            >
              <li>
                <PermIdentityIcon className="mr-1" />
                Users
              </li>
            </NavLink>
            <NavLink to="/newUser"
              className={({ isActive }) =>
                isActive
                  ? "bg-[rgb(240,240,255)] text-[rgb(122,122,122)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
                  : "text-[rgb(122,122,122)] hover:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
              }
            >
              <li>
                <PermIdentityIcon className="mr-1" />
                New User
              </li>
            </NavLink>
            <NavLink to="/Prodcts"
              className={({ isActive }) =>
                isActive
                  ? "bg-[rgb(240,240,255)] text-[rgb(122,122,122)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
                  : "text-[rgb(122,122,122)] hover:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1 flex items-center cursor-pointer"
              }
            >
              <li>
                <StorefrontIcon className="mr-1" />
                Products
              </li>
            </NavLink>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <AttachMoneyIcon className="mr-1" />
              Transactions
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <BarChartIcon className="mr-1" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className='text-[rgb(187,186,186)] text-[14px]'>Notifications</h3>
          <ul className='pl-2 pr-3'>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <MailOutlineIcon className="mr-1" />
              Mail
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <DynamicFeedIcon className="mr-1" />
              Feedback
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <MessageOutlinedIcon className="mr-1" />
              Messages
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className='text-[rgb(187,186,186)] text-[14px]'>Staff</h3>
          <ul className='pl-2 pr-3'>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <ManageAccountsIcon className="mr-1" />
              Manage
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <TimelineIcon className="mr-1" />
              Analytics
            </li>
            <li className='text-[rgb(122,122,122)] cursor-pointer  hover:bg-[rgb(240,240,255)] active:bg-[rgb(240,240,255)] py-1 px-2 rounded-2xl mb-1'>
              <ReportIcon className="mr-1" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
