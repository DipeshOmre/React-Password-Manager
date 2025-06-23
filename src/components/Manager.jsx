import React, { useState } from 'react'

const Manager = () => {
    const [visible, setVisible] = useState("public\\icons\\eye.png");
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
                    <input placeholder='Enter website URL' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter username' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                        <div className="relative">

                        <input placeholder='Enter password' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                        <span className='absolute right-1 top-1'>
                            <img 
                            onClick={()=>{
                                if(visible === "public\\icons\\eye.png"){
                                    setVisible("public\\icons\\eyecross.png");
                                }else{
                                    setVisible("public\\icons\\eye.png");
                                }
                            }}
                            className='cursor-pointer' width={25} src={visible} alt="eye"  />
                        </span>
                        </div>
                    </div>
                    <button className='flex items-center justify-center bg-green-500 px-8 py-2
                    rounded-full w-fit text-center hover:bg-green-400 gap-2 border border-green-800'>
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
