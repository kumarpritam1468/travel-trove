import React from 'react'
import { placesDummy } from '../data/dummy'
import { useLocation } from 'react-router-dom'

const TableViewer = () => {
    const path = useLocation().pathname;
    return (
        <section className='allplaces min-h-screen h-fit pt-20 px-20 text-white'>
            <div className="overflow-x-auto flex justify-center">
                <table className="table min-w-[70vw] w-fit backdrop-blur-md text-center ">
                    {/* head */}
                    <thead>
                        <tr className=' text-2xl text-white'>
                            <th></th>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {placesDummy.map((place, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className=' flex items-center justify-center'><div className=' h-20 w-20 rounded-2xl'><img src={place.imgUrl} alt={place.name} className=' object-cover' /></div></td>
                                <td className=' text-lg'>{place.name}</td>
                                <td className=' text-lg'>$500</td>
                                <td>
                                    {path === '/likes' ?
                                        <div className=' btn btn-warning'>Unlike</div> :
                                        <div className=' btn btn-error'>Cancel</div>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TableViewer