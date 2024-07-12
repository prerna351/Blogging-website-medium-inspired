import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/hooks"
import {  useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";

export const Blog = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  //after extracting id from the url
  //pass it to the useBlog function
  //the useBlog function then returns loading and blog
  const {loading , blog} = useBlog({
    id: id || ""
  });

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
      
      <FullBlog blog ={blog}></FullBlog>
    </div>
  );
}


