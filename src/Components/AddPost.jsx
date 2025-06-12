
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const rent = form.rent.value;
    const roomType = form.roomType.value;
    const lifestyle = form.lifestyle.value;
    const contact = form.contact.value;
    const availability = form.availability.value;
    const email = form.email.value;
    const name = form.name.value;
    const description = form.description.value;

    const postData = {
      title,
      location,
      rent,
      roomType,
      lifestyle,
      contact,
      availability,
      email,
      name,
      description,
    };

    try {
      const response = await axios.post('https://server-10-nu.vercel.app/api/roommates', postData);
      console.log(response.data);
      toast.success('Add Post Successful');
      form.reset();
    } catch (error) {
      console.error('Error adding post:', error);
      toast.error('Error adding post');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Fade direction="up" cascade damping={0.1} triggerOnce>
        <h2 className="text-2xl font-bold mb-6 text-center">Add to Find Roommate</h2>
      </Fade>

      <form onSubmit={handleAddPost} className="space-y-4 bg-base-100 p-6 rounded-lg shadow">
        <input name="title" type="text" placeholder="Title (e.g., Looking for a roommate in NYC)" className="input input-bordered w-full" required />

        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />

        <input name="rent" type="number" placeholder="Rent Amount" className="input input-bordered w-full" required />

        <select name="roomType" className="select select-bordered w-full" required>
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>

        <select name="lifestyle" className="select select-bordered w-full" required>
          <option value="">Select Lifestyle Preference</option>
          <option value="Pets Allowed">Pets Allowed</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Early Bird">Early Bird</option>
          <option value="Clean and Quiet">Clean and Quiet</option>
          <option value="Etc">Etc</option>
        </select>

        <textarea name="description" rows="4" placeholder="Short description about the room or your preferences" className="textarea textarea-bordered w-full" required></textarea>

        <input name="contact" type="text" placeholder="Contact Info" className="input input-bordered w-full" required />

        <select name="availability" className="select select-bordered w-full" required>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input name="email" type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full cursor-not-allowed" />

        <input name="name" type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full cursor-not-allowed" />

        <button type="submit" className="btn btn-primary w-full">Add</button>
      </form>
    </div>
  );
};

export default AddPost;
