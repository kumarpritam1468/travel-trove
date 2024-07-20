import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const Signup = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cPassword: ''
    });

    const queryClient = useQueryClient();

    const { mutate: signup, isPending } = useMutation({
        mutationFn: async (inputs) => {
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(inputs)
                })

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || 'Something went wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success('Sign up successful');
            queryClient.invalidateQueries({queryKey:['authUser']});
            window.location.reload();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    const handleInput = (e) => {
        e.preventDefault();
        signup(inputs);
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
                            <input type='number' placeholder='Phone Number' className='w-full input input-bordered h-10' value={inputs.phone} onChange={(e) => setInputs({ ...inputs, phone: e.target.value })} />
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
                                {isPending ? <div className=' loading loading-spinner'></div> : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup