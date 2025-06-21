import React from 'react'

const Manager = () => {
    return (
        <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
        <div className=" bg-slate-50 mycontainer">
        <h1>Passop</h1>
        <p>Your name password manager</p>
        <div className='text-white flex flex-col p-4'>
            <input className='rounded-full' type="text" name='' id='' />
            <div className="flex">
                <input type="text" />
                <input type="text" />
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Manager
