import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cPassword: ''
    });

    const handleInput = (e) => {
        e.preventDefault();
    }
    return (
        <section className='allplaces h-screen flex justify-center items-center' >
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
                        Sign Up to Travel Trove
                    </h1>

                    <form className=' flex gap-4 flex-col' onSubmit={handleInput}>
                        <div>
                            <input type='text' placeholder='Name' className='w-full input input-bordered  h-10' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                        </div>

                        <div>
                            <input type='email' placeholder='E-mail' className='w-full input input-bordered h-10' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                        </div>
                        <div>
                            <input type='email' placeholder='Phone Number' className='w-full input input-bordered h-10' value={inputs.phone} onChange={(e) => setInputs({ ...inputs, phone: e.target.value })} />
                        </div>

                        <div>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered h-10'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-full input input-bordered h-10'
                                value={inputs.cPassword}
                                onChange={(e) => setInputs({ ...inputs, cPassword: e.target.value })}
                            />
                        </div>

                        <Link to='/login' className='text-sm text-gray-300 hover:underline hover:text-blue-400 inline-block'>
                            Already have an account?
                        </Link>

                        <div>
                            <button
                                className='btn btn-block btn-primary text-base bg-blue-500 btn-sm mt-2 border border-slate-700'
                                type='submit'
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup