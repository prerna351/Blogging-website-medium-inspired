
import { AppBar } from '../components/AppBar';
import { CreateBlogArea } from '../components/CreateBlogArea';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const TextEditor:React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handlePublish = async () => {
        const blogPost = { title, content };
           

        if (!title.trim() || !content.trim()) {
            setError('Title and content cannot be empty');
            alert("Title and content cannot be empty")
            return;
        }

        try {
             await axios.post(`${BACKEND_URL}/api/v1/blog/createBlog`,blogPost,{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }        
        ).then(() => {
            // console.log(response.data.id);
            console.log("Blog published successfully");
            navigate(`/blogs`)
           
        }).catch(error => {
            console.log(error);
        })
        } catch (error) {
            // Handle network error
            console.log(error)
        }
    };
    
  return (
    <div className='overscroll-none'>
      <AppBar page={"textEditor"} label="Publish"   onClick={handlePublish} ></AppBar>
        {error && <div>{error}</div>}
      <CreateBlogArea title={title} setTitle={setTitle} content={content} setContent={setContent} rows={20}></CreateBlogArea>
    </div>
  );
}


