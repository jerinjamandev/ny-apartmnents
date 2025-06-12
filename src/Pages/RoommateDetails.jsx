import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import {} from 'react-icons';
const RoommateDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [roommate, setRoommate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get(`https://server-10-nu.vercel.app/api/roommates/${id}?email=${user?.email}`)
      .then((res) => {
        setRoommate(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id, user]);
  const handleLike = () => {
    setLikeLoading(true);
    axios
      .patch(`https://server-10-nu.vercel.app/api/roommates/${id}/like`, {
        email: user?.email,
      })
      .then(() => {
        fetchData(); // Like new fetching
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setError("You can't like your own post"); 
        } else {
          setError("Failed to like.");
        }
      })
      .finally(() => setLikeLoading(false));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  if (!roommate) {
    return <p className="text-center text-red-500 mt-10">Roommate not found</p>;
  }



  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4">{roommate.title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p><span className="font-semibold">Name:</span> {roommate.name}</p>
          <p><span className="font-semibold">Location:</span> {roommate.location}</p>
          <p><span className="font-semibold">Room Type:</span> {roommate.roomType}</p>
          <p><span className="font-semibold">Life Style:</span> {roommate.lifestyle}</p>
          <p><span className="font-semibold">Rent:</span> ৳{roommate.rent}</p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              roommate.availability === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {roommate.availability}
            </span>
          </p>
        </div>

        <div>
          <p><span className="font-semibold">Posted At:</span> {new Date(roommate.createdAt).toLocaleString()}</p>
          <p><span className="font-semibold">Likes:</span> <span className="font-bold">{roommate.likeCount || 0}</span> people interested in.</p>

          {roommate.contact ? (
            <p className="text-green-600 font-semibold mt-2">📞 Contact: {roommate.contact}</p>
          ) : (
            <p className="text-red-500 mt-2">🔒 Contact info is locked. Like to unlock.</p>
          )}

{roommate?.email === user?.email ? (
  <button
    disabled
    className="btn btn-sm mt-4 btn-disabled bg-gray-300 text-gray-500 cursor-not-allowed"
  >
    You can't like your own post
  </button>
) : (
  <button
    onClick={handleLike}
    disabled={likeLoading}
    className="btn btn-sm mt-4 btn-primary"
  >
    {likeLoading ? "Liking..." : "Like"}
  </button>
)}



          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>
      <p><span className="font-semibold">Description: </span>{roommate.description}</p>
    </div>
  );
};

export default RoommateDetails;