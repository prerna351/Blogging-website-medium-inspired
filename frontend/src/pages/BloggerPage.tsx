import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useEffect } from "react";
import { useFetchUserBlogs } from "../hooks/useFetchUserBlogs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userBlogsAtom } from "../store/atoms/userBlogsAtom";
import { loadingAtom } from "../store/atoms/blogsAtom";
import axios from "axios";
import { BACKEND_URL } from "../config";





export const BloggerProfilePage = () => {
    const navigate = useNavigate();
    const {user} = useRecoilValue(userBlogsAtom);
    const setUserBlogs = useSetRecoilState(userBlogsAtom);
    const loading = useRecoilValue(loadingAtom);
    const fetchUserBlogs = useFetchUserBlogs();
    useEffect(() => {
        fetchUserBlogs();
    }, []);
    
    
    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/blog/delete-blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                }
            });
            // Update state to remove deleted blog
            setUserBlogs(prev => ({
                ...prev,
                user: {
                    ...prev.user,
                    blog: prev.user.blog.filter(blog => blog.id !== id)
                }
            }));
        } catch (error) {
            console.error("Failed to delete blog", error);
        }
    }

    if (loading) {
        return (
            <div>
                <AppBar label="Home" onClick={() => navigate('/')} />
                {/* <div className="flex flex-col justify-center items-center">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div> */}Loading....
            </div>
        );
    }
  return (
    <div>
      <AppBar onClick={() => {
          navigate('/createBlog')
      }}  label="write"></AppBar>

        <div className="w-screen  z-10 flex-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:44 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 space-x-10  lg:space-x-20 h-auto w-full md:max-w-screen-xl">

                    <div className="col-span-1 md:col-span-7 px-2">
                        <div className=" border-b-2 py-8 mt-12 mb-8">
                            <div className="text-2xl md:text-4xl  pl-8 font-bold">
                                Your Stories
                            </div>
                        </div>

                        <div className="">
                            {user.blog.length === 0 ?
                            <div className="px-8">You have no blog posts, Create one!</div> 
                            :
                            user.blog.slice().reverse().map(blog => (
                                <BlogCard
                                    id={blog.id}
                                    key={blog.id}
                                    authorName={user.name || "Anonymous"}
                                    title={blog.title}
                                    content={blog.content}
                                    publishedDate={blog.createdAt}
                                    titleFontSize={'xl'}
                                    isAuthor = {true}
                                    onDelete={handleDelete}
                                ></BlogCard>
                            ))
                            }
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-5  px-2 pb-5">
                        
                            <div className=" mt-12 p-1">
                                <div className="w-20 h-20 rounded-full bg-yellow-300"></div>
                            </div>
                            <div className="px-2 mt-4 text-lg font-semibold">
                                {user.name}
                            </div>
                            <div className="px-2 mt-2 text-sm font-medium text-gray-600">
                                100 followers
                            </div>
                            <div className="px-2 mt-3 text-sm font-medium text-gray-600">
                            Designer, researcher | MS-HCI @Georgia Tech alum | Passionate about UX and people-centered design
                            </div>
                        
                    </div>
                </div>
            </div>
    </div>
  );
}
