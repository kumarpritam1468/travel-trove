import React from 'react'
import { placesDummy } from '../data/dummy'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import convertMongoDateToDate from '../utils/lib/convertDate'
import toast from 'react-hot-toast'

const BookingTableViewer = () => {
    const queryClient = useQueryClient();

    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            try {
                const response = await fetch('/api/bookings');
                const data = await response.json();

                if (!response.ok) throw new Error(data.error || 'Something went wrong');

                return data;
            } catch (error) {
                throw new Error(error);
            }
        }
    });

    const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
        mutationFn: async (bookingId) => {
            try {
                const response = await fetch(`/api/bookings/cancel/${bookingId}`, {
                    method: 'DELETE'
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || 'Something went wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success('Deleted Booking');
            queryClient.invalidateQueries({ queryKey: ['bookings'] });
        }
    })

    return (
        <section className='allplaces min-h-screen h-fit pt-20 px-20 text-white'>
            <div className="overflow-x-auto flex justify-center">
                <table className="table min-w-[70vw] w-fit backdrop-blur-md text-center ">
                    {/* head */}
                    <thead>
                        <tr className=' text-xl text-white'>
                            <th></th>
                            <th>Place</th>
                            <th>Net Income</th>
                            <th>Booked By</th>
                            <th>From</th>
                            <th>TotalDays</th>
                            <th>Members</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {isLoading ?
                        <div className=' loading loading-spinner'></div>
                        : <tbody>
                            {bookings.length === 0 && <h1 className=' text-xl'>No bookings</h1>}
                            {bookings?.map((booking, index) => {
                                let bookingFrom = convertMongoDateToDate(booking.from);
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td className=' text-lg'>{booking.place.name}</td>
                                        <td className=' text-lg'>${booking.price}</td>
                                        <td className=' text-lg'>{booking.user.name}</td>
                                        <td className=' text-lg'>{bookingFrom}</td>
                                        <td className=' text-lg'>{booking.totalDays}</td>
                                        <td className=' text-lg'>{booking.totalPeople}</td>
                                        <td>
                                            <div className=' btn btn-warning' onClick={() => deleteBooking(booking._id)}>
                                                {isDeleting ? <div className=' loading loading-spinner'></div> : 'Delete'}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>}
                </table>
            </div>
        </section>
    )
}

export default BookingTableViewer