// import { useEffect, useState } from "react"
// import { BACKEND_URL } from "../config";
// import axios from "axios";


// export interface Blog {
//     content: string;
//     title: string;
//     id: number;
//     author: {
//         name: string;
//     };
// }

// interface UseBlogResult {
//     loading: boolean;
//     blog: Blog;
// }

// export const useBlog = ({ id }: {id: string}): UseBlogResult => {
//     const [loading, setLoading] = useState(true);
//     const [blog, setBlog] = useState<Blog | undefined>(undefined);

//     useEffect(() => {
//         console.log("hello1")
//         if (!id) {
//             setLoading(false);
//             return;
//         }

//         const fetchBlog = async () => {
//             try {
//                 const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
//                     headers: {
//                         Authorization: localStorage.getItem("token") || ''
//                     }
//                 });
                
//                 setBlog(response.data); // Ensure this matches the API response structure
//                 setLoading(false);
                
//             } catch (error) {
//                 console.error("Error fetching blog:", error);
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, []);
    
//     return { loading, blog };
// };





// anytime this hook is used send a request to the backend 
// export const useBlogs = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogs, setBlogs] = useState<Blog[]>([]);

//     useEffect(() => {
//         axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
//             headers: {
//                 Authorization: localStorage.getItem("token")
//             }
//         })
//             .then(response => {
               
//                 setBlogs(response.data.blogs);
//                 setLoading(false);
//             })
//     }, [])

//     return {
//         loading,
//         blogs
//     }
// }
