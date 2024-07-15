import { useQuery } from '@tanstack/react-query'
import React from 'react'
import convertMongoDateToDate from '../utils/lib/convertDate'
import useCancelBooking from '../hooks/useCancelBooking';

const MyBookings = () => {
    const { data: authUser } = useQuery({ queryKey: ['authUser'] });
    const bookings = authUser?.bookings;

    const {deleteBooking, isDeleting} = useCancelBooking();
    return (
        <section className='allplaces min-h-screen h-fit pt-20 px-20 text-white flex flex-col items-center'>
            <div className="overflow-x-auto flex justify-center">
                <table className="table min-w-[70vw] w-fit backdrop-blur-md text-center ">
                    {/* head */}
                    <thead>
                        <tr className=' text-2xl text-white'>
                            <th></th>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className=' flex items-center justify-center'><div className=' h-20 w-20 rounded-2xl'><img src={booking.place.imgUrl} alt={booking.place.name} className=' object-cover' /></div></td>
                                <td className=' text-lg'>{booking.place.name}</td>
                                <td className=' text-lg'>{convertMongoDateToDate(booking.from)}</td>
                                <td>
                                    <div className=' btn btn-error' onClick={() => deleteBooking(booking._id)}>
                                        {isDeleting ? <div className=' loading loading-spinner'></div> : 'Delete'}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MyBookings