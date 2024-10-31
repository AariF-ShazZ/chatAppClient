import React from 'react'
import { MdMessage } from "react-icons/md"
import { CiMenuKebab } from "react-icons/ci"
import { FaUsers } from "react-icons/fa"
import { BsFilter } from "react-icons/bs"
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai"
import { MdKeyboardVoice } from "react-icons/md"
import { IoMdSend } from "react-icons/io"
import UserChat from '../components/UserChat/UserChat'
import InputEmoji from "react-input-emoji"
// MdMessage

const Chatpage = () => {
  return (
    <>
      <div className='w-full h-screen bg-slate-200  flex  justify-center py-2 '>
        <div className='w-11/12 h-auto  bg-slate-400 flex  justify-evenly py-2 px-3'>
          <div className='userList w-2/5 bg-orange-600 mr-1 py-2'>
            <nav className='w-full bg-green-custom py-1 pl-1 pr-5 flex items-center justify-between'>
              <div className='w-14 '>
                <img className='rounded-full ' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="image Don't show" />
              </div>
              <div className='w-2/5 py-1 flex items-center justify-between'>
                <FaUsers className='text-2xl text-custom-gray' />
                <MdMessage className='text-2xl text-custom-gray' />
                <CiMenuKebab className='text-2xl text-custom-gray' />
              </div>
            </nav>
            <div className='w-full h-5/6 bg-orange-600 px-1 '>
              <div className='w-full flex items-center justify-between py-1 px-2'>
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><AiOutlineSearch /></svg>
                  </span>
                  <input className="placeholder:text-slate-400 block bg-white w-4/5 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mr-0" placeholder="Search or start new chat" type="text" name="search" />
                </label>
                <BsFilter />
              </div>
              <div className='userList w-full h-5/6 bg-slate-700  px-3 py-2 overflow-y-auto'>
                <UserChat />
                <UserChat />
                <UserChat />
                <UserChat />
                <UserChat />
                <UserChat />
                <UserChat />
                <UserChat />
               
               
              </div>
            </div>
          </div>
          <div className='chatBox w-3/5 h-auto bg-orange-600 py-2'>
            <nav className='w-full h-16 bg-green-custom py-1 pl-4 pr-5 flex items-center justify-between'>
              <div className='w-3/6   flex px-2'>
                <img className='w-14 h-14  rounded-full mr-2 ' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="image Don't show" />
                <div className='w-4/6 px-1 py-1 flex flex-col justify-start items-start'>
                  <h1 className='ms-px text-cyan-50'>Aarif khan</h1>
                  <h2 className='text-xs text-fuchsia-50'>Online</h2>
                </div>
              </div>
              <div className='w-2/5 py-1 flex items-center justify-end'>
                <AiOutlineSearch className='text-2xl mr-6 text-custom-gray' />
                <CiMenuKebab className='text-2xl text-custom-gray' />
              </div>
            </nav>
            <div className='w-12/14 h-3/4  bg-amber-300 my-2 mx-3 py-3 px-3 overflow-y-auto'>

              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
              <div className='relative h-16 mt-5  mb-3 w-full '>
                <div className='receivedChat  absolute inset-y-0 left-0 w-1/6 h-full px-2 py-1 bg-gray-500'>
                  receive message
                </div>
              </div>


              <div class="relative h-16 mt-3  mb-3 w-full ">
                <div class="sentChat absolute inset-y-0 right-0 w-1/6 h-full px-2 py-1  bg-green-500"> send message
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-around px-1 py-1 '>
              <AiOutlinePlus className=' w-7 h-7 ml-1' />
              <InputEmoji />
              {
                !true ? <MdKeyboardVoice /> : <IoMdSend />
              }
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatpage