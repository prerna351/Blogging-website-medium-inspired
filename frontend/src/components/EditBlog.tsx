import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const EditBlog = () => {

    const {id} = useParams() ;
    const blogId = Number(id);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
    
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
              Authorization: localStorage.getItem("token"),
            }
          });
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlog();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       
      await axios.put(
        `${BACKEND_URL}/api/v1/blog/update-blog`,
        { title, content, blogId  },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate("/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate} className="max-w-2xl mx-auto p-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={24}
            className=" appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
}

