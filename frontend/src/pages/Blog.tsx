import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import {  useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
import { blogsAtom, loadingAtom } from "../store/atoms/blogsAtom";
import { useRecoilValue } from "recoil";


export const Blog = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  
    const blogs = useRecoilValue(blogsAtom);
    const loading = useRecoilValue(loadingAtom);

    
    if (!id) {
      // Handle case where id is undefined (optional)
      return ;
    }
    //find the specific blog by it's id
    const blog = blogs.find(blog => blog.id === parseInt(id));

  if(loading){
    return <div >
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
    
    <div >
      <AppBar label={"Write"}  onClick={() => {
          navigate('/createBlog')
      }}></AppBar>
      
      {blog === undefined? <div>Blog not Found</div> : <FullBlog blogDetails ={blog}></FullBlog>}
    </div>
  );
}


