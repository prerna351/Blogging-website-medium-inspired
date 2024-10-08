
import { AppBar } from '../components/AppBar';
import { useNavigate } from 'react-router-dom';
import { EditBlog } from '../components/EditBlog';
import { useRecoilValue } from 'recoil';
import { blogAtom } from '../store/atoms/blogAtom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const UpdateBlogPage = () => {
  const blog = useRecoilValue(blogAtom);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      
      await axios.put(
        `${BACKEND_URL}/api/v1/blog/update-blog`,
        { title: blog.title, content: blog.content, id: blog.blogId },
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
      <AppBar page={"updateBlog"} onClick={handleUpdate} label="Update"></AppBar>

      <div>
        <EditBlog />
      </div>
    </div>
  );
}


