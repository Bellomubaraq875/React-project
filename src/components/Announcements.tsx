import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className='text-xs text-gray-400 cursor-pointer'> View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-tlhlight1 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem, ipsum dolor</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-02-10</span>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, odio!</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-tlhlight1 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem, ipsum dolor</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-02-10</span>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, odio!</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-tlhlight1 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem, ipsum dolor</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-02-10</span>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, odio!</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements