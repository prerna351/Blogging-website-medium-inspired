import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/hooks";
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {
    const {loading, blogs} = useBlogs()
    const navigate = useNavigate();
    if(loading){
        return <div>
          <AppBar label="write" onClick={() => {
          navigate('/createBlog')
      }}></AppBar>

          <div className="flex flex-col justify-center items-center">
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
          </div>
        </div>
    }
   
  return (
    <div>
        <AppBar onClick={() => {
          navigate('/createBlog')
      }}  label="write"></AppBar>
      
    <div className="flex justify-center flex-col items-center">
      {[...blogs].reverse().map(blog => (
        <BlogCard
        id={blog.id}
        key={blog.id}
        authorName={blog.author.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate="Dec 3, 2023"
      ></BlogCard>
      ))}
      
    </div>
    </div>
  );
}


