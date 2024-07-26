
import { AppBar } from '../components/AppBar';
import { useNavigate } from 'react-router-dom';
import { EditBlog } from '../components/EditBlog';

export const UpdateBlogPage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <AppBar onClick={() => {
          navigate('/blogs')
      }}  label="Update"></AppBar>

      <div>
        <EditBlog />
      </div>
    </div>
  );
}


