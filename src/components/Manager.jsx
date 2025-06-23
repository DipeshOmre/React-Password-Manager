import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-slate-400 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
            <div className="  mycontainer">
                <h1 className='text-4xl font-bold text-center'><span className='text-green-700'>
                    &lt;
                </span>
                    Pass
                    <span className='text-green-700'>
                        OP/&gt;
                    </span></h1>
                <p className='text-green-900 text-lg text-center'>Your name password manager</p>
                <div className='flex flex-col p-4 gap-8 items-center'>
                    <input className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                        <input className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                        <input className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                    </div>
                    <button className='flex items-center justify-center bg-green-500 px-4 py-2
                    rounded-full w-fit text-center hover:bg-green-400'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>

        </>
    )
}

export default Manager
