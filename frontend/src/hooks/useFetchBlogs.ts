import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { blogsAtom, loadingAtom } from '../store/atoms/blogsAtom';
import { BACKEND_URL } from '../config';



export const useFetchBlogs = () => {
  const setLoading = useSetRecoilState(loadingAtom);
  const setBlogs = useSetRecoilState(blogsAtom);
 
  
  
    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            });
            
            setBlogs(response.data.blogs || []);
            
            setLoading(false);
        } catch (error) {
            console.log('Failed to fetch blogs:', error);
            setBlogs([]);
            
            setLoading(false);
        } 
    };

   return fetchBlogs;
};