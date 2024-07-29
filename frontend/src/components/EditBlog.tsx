import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import { blogAtom } from "../store/atoms/blogAtom";


export const EditBlog = () => {

    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useRecoilState(blogAtom);
    
    
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
              Authorization: localStorage.getItem("token"),
            }
          });
        setBlog({
          title: response.data.title,
          content: response.data.content,
          blogId: Number(id),
        });
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlog();
  }, [id, setBlog]);


  
  return (
    <div className="flex justify-center md:mx-3 mx-3 pt-8">
      <div className="max-w-3xl w-full">
        <input
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          type="text"
          className="focus:outline-none font-medium font-serif text-gray-500 text-5xl block w-full p-2.5"
          placeholder="Title"
        />
        <div>
          <textarea
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            rows={24}
            className="block p-2.5 w-full text-lg font-serif text-gray-500 focus:outline-none"
            placeholder="Tell your story..."
          />
        </div>
      </div>
    </div>
  );
}

