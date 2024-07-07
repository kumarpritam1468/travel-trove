import React from 'react'
import { placesDummy } from '../data/dummy'

const BookingTableViewer = () => {
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
                    <tbody>
                        {placesDummy.map((place, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className=' text-lg'>{place.name}</td>
                                <td className=' text-lg'>$6,000</td>
                                <td className=' text-lg'>Pritam Kumar</td>
                                <td className=' text-lg'>21-07-24</td>
                                <td className=' text-lg'>3</td>
                                <td className=' text-lg'>4</td>
                                <td>
                                    <div className=' btn btn-warning'>Cancel</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BookingTableViewer