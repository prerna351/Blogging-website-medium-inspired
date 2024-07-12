import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/hooks"
import {  useNavigate, useParams } from "react-router-dom";


export const Blog = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  //after extracting id from the url
  //pass it to the useBlog function
  //the useBlog function then returns loading and blog
  const {loading , blog} = useBlog({
    id: id || ""
  });

  if(loading ){
      return <div>loading...</div>
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


