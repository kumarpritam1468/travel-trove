import React, { useState } from 'react'
import { placesDummy } from '../data/dummy'
import { useLocation } from 'react-router-dom'

const TableViewer = () => {
    const path = useLocation().pathname;

    const [img, setImg] = useState(null);
    const [input, setInput] = useState({
        name:'',
        desc:'',
        city:'',
        imgUrl:img,
        price:''
    });

    const handleInputs = (e) => {
        e.preventDefault();
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
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

            {path === '/admin/places' ?
                <button className=' btn btn-primary fixed bottom-2 mt-2 px-6 text-white' onClick={() => document.getElementById('my_modal_2').showModal()}>
                    Add New
                </button>
                : ''}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col gap-6 items-center justify-center bg-white/10 backdrop-blur-3xl">
                    <h2 className="font-bold text-lg text-white">Add a new place</h2>
                    <form className='flex flex-col gap-2' onSubmit={handleInputs}>
                        <div>
                            <label htmlFor="imageFile">Upload a Photo</label>
                            <input type='file' id='imageFile' onChange={handleImgChange} />
                        </div>
                        <input type="text" placeholder='Place Name' className=' input input-bordered w-full' />
                        <input type="text" placeholder='Description' className=' input input-bordered w-full' />
                        <input type="text" placeholder='Place City' className=' input input-bordered w-full' />
                        <input type="number" placeholder='Price per person/day' className=' input input-bordered w-full' />
                        <button className=' btn btn-primary text-white' type='submit'>Add</button>
                        <div className="modal-action w-full mt-0">
                            <form method="dialog" className=' w-full'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-warning w-full">Cancel</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    )
}

export default TableViewer