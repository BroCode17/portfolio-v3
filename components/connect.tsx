import React from 'react'
import ShinyButton from './magicui/shiny-button'

const Connect = () => {
  return (
        <div className="mt-10  space-y-4">
        <div className="flex items-center justify-between gap-4">
           <div className="h-[1px] w-full bg-gray-500/20"></div>
          <div className="">
            <input className="border rounded-none border-gray-500/20 bg-[#09090b] p-2 text-white focus-within:outline-none focus-within:rounded-none" placeholder="Name" />
          </div>
          <div className="">
            <input className="border rounded-none border-gray-500/20 bg-[#09090b] p-2 text-white focus-within:outline-none focus-within:rounded-none" placeholder="Email" />
          </div>
          <div className="h-[1px] w-full bg-gray-500/20"></div>
        </div>
        <div className="flex items-center">
          <div className="h-[1px] w-12 bg-gray-500/20"></div>
          <div className="w-full">
            <input className="w-full border rounded-none border-gray-500/20 bg-[#09090b] p-2 text-white focus-within:outline-none focus-within:rounded-none" placeholder="Subject" />
          </div>
           <div className="h-[1px] w-12 bg-gray-500/20"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-[1px] w-12 bg-gray-500/20"></div>
          <div className="w-full">
            <textarea className="w-full border rounded-none border-gray-500/20 bg-[#09090b] p-2 text-white focus-within:outline-none focus-within:rounded-none min-h-40 custom-textarea" placeholder="Message"  />
          </div>
           <div className="h-[1px] w-12 bg-gray-500/20"></div>
        </div>
        <div className='flex items-center justify-end'>
        <ShinyButton text="Submit" className="text-white border-gray-500/20 border rounded-none" />
        <div className="h-[1px] w-10 bg-gray-500/20"></div>
        </div>
      </div>
  )
}

export default Connect