import { useSetRecoilState } from "recoil";
import { userBlogsAtom } from "../store/atoms/userBlogsAtom";
import { loadingAtom } from "../store/atoms/blogsAtom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const useFetchUserBlogs = () => {
    const setUserBlogs = useSetRecoilState(userBlogsAtom);
    const setLoading = useSetRecoilState(loadingAtom);

    return async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/userBlog`,{
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            })
            setUserBlogs(response.data);
        } catch (error) {
            console.error("Error fetching user blogs:", error);
        } finally {
            setLoading(false);
        }
    };
};
