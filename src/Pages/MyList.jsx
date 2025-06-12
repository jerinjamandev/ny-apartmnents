import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyList = () => {
    const [listings, setListings] = useState([]);
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://server-10-nu.vercel.app/api/my-roommates?email=${user?.email}`)
            .then(res => {
                setListings(res.data);
                console.log(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, []);




    const handelDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {


            if (result.isConfirmed) {


                console.log(id);

                axios.delete(`https://server-10-nu.vercel.app/api/roommates/${id}`).then(res => {
                    console.log(res.data);
                    if (res.data.result.acknowledged === true) {
                        const filter = listings?.filter(list => list._id !== id)
                        setListings(filter)
                    }
                })

                Swal.fire({
                    title: "Deleted!",
                    text: "has been deleted.",
                    icon: "success"
                });
            }
        });
    }




    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <div className="px-4 py-10">
                <h2 className="text-2xl font-bold text-center mb-6">My Listings</h2>

                {/* Responsive container with horizontal scroll on small devices */}
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[700px] w-full border border-gray-200 text-sm">
                        <thead className="bg-gray-100 text-gray-700 w-full">
                            <tr>
                                <th className="text-left px-4 py-2">#</th>
                                <th className="text-left px-4 py-2">Title</th>
                                <th className="text-left px-4 py-2">Name</th>
                                <th className="text-left px-4 py-2">Location</th>
                                <th className="text-left px-4 py-2">Rent (৳)</th>
                                <th className="text-left px-4 py-2">Availability</th>
                                <th className="text-left px-4 py-2">Edit</th>
                                <th className="text-left px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings?.map((item, idx) => (
                                <tr key={item.id} className="">
                                    <td className="px-4 py-2">{idx + 1}</td>
                                    <td className="px-4 py-2">{item.title}</td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.location}</td>
                                    <td className="px-4 py-2">{item.rent}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.availability === 'Available'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}>
                                            {item.availability}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <Link to={`/edit/${item._id}`}>  <button className="btn btn-sm btn-outline btn-info">Edit</button></Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button onClick={() => handelDelete(item._id)} className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;