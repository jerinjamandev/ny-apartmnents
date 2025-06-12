import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedRoommates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://server-10-nu.vercel.app/api/roommates?availability=true&limit=6") // API endpoint
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Roommates</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">{post.name}</h3>
              <p><span className="font-semibold">Location:</span> {post.location}</p>
              <p><span className="font-semibold">Rent:</span> {post.rent}৳</p>
              <p><span className="font-semibold">Room Type:</span> {post.roomType}</p>
              <p><span className="font-semibold">Availability:</span> {post.availability}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${post._id}`} className="btn  btn-outline btn-primary">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoommates;
