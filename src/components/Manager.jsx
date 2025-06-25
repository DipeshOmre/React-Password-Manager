import React, { useEffect, useRef, useState } from 'react'
const Manager = () => {
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }

    }, [])

    const ref = useRef();
    const passwordref = useRef();
    const showPassword = () => {
        passwordref.current.type = "text";
        if (ref.current.src.includes("public/icons/eye.png")) {
            passwordref.current.type = "password";
            ref.current.src = "public/icons/eyecross.png";
        }
        else {
            passwordref.current.type = "text";
            ref.current.src = "public/icons/eye.png";
        }
    }
    const savePassword = (e) => {
        console.log(form);
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
        e.preventDefault();
        setform({
            site: "",
            username: "",
            password: "",
        })
        console.log("Password saved");
    }
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard: " + text);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    return (
        <>
            <div className="relative min-h-screen w-full">
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
                        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='site' id='1' />
                        <div className="flex w-full justify-between gap-8">
                            <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='username' id='2' />
                            <div className="relative">

                                <input ref={passwordref} value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-black-500 w-full text-black p-4 py-1' type="text" name='password' id='3' />
                                <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                    <img ref={ref} className='p-1' width={26} src="public\icons\eye.png" alt="eye" />
                                </span>
                            </div>
                        </div>
                        <button onClick={savePassword} className='flex items-center justify-center bg-green-500 px-8 py-2
                        rounded-full w-fit text-center hover:bg-green-400 gap-2 border border-green-800'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                            >
                            </lord-icon>
                            Add Password</button>
                    </div>
                    <div className="passwords">
                        <h2 className='py-4 font-bold text-2xl text-center'>Your Passwords</h2>
                        {passwordArray.length == 0 &&
                            <div className='text-center text-gray-800'>No passwords to show</div>
                        }
                        {passwordArray.length != 0 &&
                            <table className="table-auto w-full rounded-md  overflow-hidden">
                                <thead className='bg-green-800 text-white'>
                                    <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-200'>
                                    {passwordArray.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='py-2 border border-white text-center'>
                                                    <div className="flex items-center justify-center">


                                                        <a href={item.site} target='_blank'>{item.site}</a>
                                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                            <lord-icon
                                                                style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"

                                                            ></lord-icon>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className='py-2 border border-white text-center'>
                                                    <div className="flex items-center justify-center">


                                                        <span>
                                                            {item.username}

                                                        </span>
                                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                            <lord-icon
                                                                style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"

                                                            ></lord-icon>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='py-2 border border-white text-center flex items-center justify-center'>
                                                    <div className="flex items-center justify-center">


                                                        <span>
                                                            {item.password}

                                                        </span>
                                                        <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                            <lord-icon
                                                                style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"

                                                            ></lord-icon>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
