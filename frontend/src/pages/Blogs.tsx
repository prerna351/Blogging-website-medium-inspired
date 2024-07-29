import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

import { Skeleton } from "../components/Skeleton";
import {  useRecoilValue } from "recoil";
import {queryAtom} from '../store/atoms/queryAtom.js'
import { blogsAtom, loadingAtom } from "../store/atoms/blogsAtom.js";
import { useFetchBlogs } from "../hooks/useFetchBlogs.js";
import { useEffect } from "react";
import { SearchComponent } from "../components/SearchComponent.js";
// import { currentPageAtom, limitAtom, totalPagesAtom } from "../store/atoms/pageAtom.js";

export const Blogs = () => {
    // const {loading, blogs} = useBlogs();
    const blogs = useRecoilValue(blogsAtom);
    const loading = useRecoilValue(loadingAtom);
    const fetchBlogs = useFetchBlogs();
    const navigate = useNavigate();
    const query = useRecoilValue(queryAtom);
    
  
    useEffect(() => {
        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );

    if(loading){
        return <div>
          <AppBar page={"blogs"} label="write" onClick={() => {
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
    <div className="overflow-x-clip">
        <AppBar onClick={() => {
          navigate('/createBlog')
      }}  label="write" page={"blogs"}></AppBar>
    <div className="w-screen  flex-1 flex justify-center  ">  
      <div className="overflow-x-hidden  flex p-5 w-screen max-w-screen-lg justify-center flex-col items-center  ">
        <div className="block md:hidden w-full "><SearchComponent/></div>
        <div className="mt-6 md:mt-0 ">
            {filteredBlogs.length === 0 ? (
                <div className="mt-10">No blogs found.</div>
              ) : (
                filteredBlogs.reverse().map(blog => (
                  <BlogCard
                    id={blog.id}
                    key={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.createdAt}
                    isAuthor={false}
                  ></BlogCard>
                ))
              )}
        </div>
      
      </div>
    </div>
    </div>
  );
}


