import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrowseListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://server-10-nu.vercel.app/api/all-roommates')
      .then(res => {
        setListings(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Browse Listings</h2>

      {/* Responsive container with horizontal scroll on small devices */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">#</th>
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Location</th>
              <th className="text-left px-4 py-2">Rent (৳)</th>
              <th className="text-left px-4 py-2">Availability</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item, idx) => (
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
                  <Link to={`/details/${item._id}`}>  <button className="btn btn-sm btn-outline btn-info">See More</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListings;
