import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditPage = () => {
  const roommate = useLoaderData(); // Existing data from loader
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      location: form.location.value,
      rent: form.rent.value,
      roomType: form.roomType.value,
      lifestyle: form.lifestyle.value,
      contact: form.contact.value,
      availability: form.availability.value,
      email: form.email.value,
      name: form.name.value,
      description:form.description.value
    };

    try {
      const response = await axios.patch(`https://server-10-nu.vercel.app/api/roommates/${roommate._id}`, updatedData);
    

      if (response.data.result.acknowledged===true) {
          toast.success("Post updated successfully!");
        //   navigate('/my-listings')
      }else{
        toast.error("Post updated error!");
      }
     
    } catch (error) {
      toast.error("Failed to update post.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Roommate Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4 bg-base-100 p-6 rounded-lg shadow">
        <input name="title" type="text" defaultValue={roommate.title} placeholder="Title" className="input input-bordered w-full" required />

        <input name="location" type="text" defaultValue={roommate.location} placeholder="Location" className="input input-bordered w-full" required />

        <input name="rent" type="number" defaultValue={roommate.rent} placeholder="Rent Amount" className="input input-bordered w-full" required />

        <select name="roomType" defaultValue={roommate.roomType} className="select select-bordered w-full" required>
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>

        <select name="lifestyle" defaultValue={roommate.lifestyle} className="select select-bordered w-full" required>
          <option value="">Select Lifestyle Preference</option>
          <option value="Pets Allowed">Pets Allowed</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Early Bird">Early Bird</option>
          <option value="Clean and Quiet">Clean and Quiet</option>
          <option value="Etc">Etc</option>
        </select>
  <textarea  defaultValue={roommate.description} name="description" rows="4" placeholder="Short description about the room or your preferences" className="textarea textarea-bordered w-full" required></textarea>
        <input name="contact" type="text" defaultValue={roommate.contact} placeholder="Contact Info" className="input input-bordered w-full" required />

        <select name="availability" defaultValue={roommate.availability} className="select select-bordered w-full" required>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input name="email" type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full cursor-not-allowed" />

        <input name="name" type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full cursor-not-allowed" />

        <button type="submit" className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default EditPage;