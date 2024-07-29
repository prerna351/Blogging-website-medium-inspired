
import { Link } from "react-router-dom";
import { SearchComponent } from "./SearchComponent";
import { UserAvatar } from "./UserAvatar.tsx";





interface AppBarProps {
  label: string;
  onClick?: () => void;
  page: string;
}



export const AppBar : React.FC<AppBarProps> = ({ label,page, onClick }) => {
  

  return (
    <div className="flex justify-between items-center sm px-6 md:px-12 py-3 w-screen shadow-sm ">
      
        {/* logo  */}
        <div className="flex gap-6 items-center">
          <div className="font-bold  text-2xl">
            <Link to={'/blogs'}>InspireInk</Link>
          </div>
          
          <div className="hidden md:block ">{page === 'blogs'? <SearchComponent ></SearchComponent>: <></>}</div>
        </div>


      <div className="flex justify-center  items-baseline gap-2">
        
          <button onClick={onClick}  className="bg-green-500 mr-2 rounded-full pb-1 md:pb-2 px-4 pt-1 text-white font-medium text-xs md:text-sm">{label}</button>
        
          <UserAvatar></UserAvatar>
        </div>
    </div>
  );
}


