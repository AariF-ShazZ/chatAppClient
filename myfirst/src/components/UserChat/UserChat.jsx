import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
const UserChat = () => {
    return (
        <>
            <div className='w-full bg-red-600 px-1 py-1 flex items-center justify-between'>
                <img className='w-14 rounded-full ' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="image Don't show" />
                <div className='w-11/12 ml-2 px-2 bg-red-200  py-1 '>
                    <div className='flex items-center justify-between'>
                        <span>Aarif Khan</span>
                        <span>10:06</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Last message</span>
                        <span><RiArrowDropDownLine/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserChat