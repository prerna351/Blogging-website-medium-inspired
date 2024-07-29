
import { Link } from "react-router-dom";
import { SearchComponent } from "./SearchComponent";
import { UserAvatar } from "./UserAvatar.tsx";





interface AppBarProps {
  label: string;
  onClick?: () => void;
  
}



export const AppBar : React.FC<AppBarProps> = ({ label,  onClick }) => {
  

  return (
    <div className="flex justify-between items-center sm px-6 md:px-12 py-3 w-screen shadow-sm ">
      
        {/* logo  */}
        <div className="flex gap-6 ">
          <div className="font-bold  text-2xl">
            <Link to={'/blogs'}>InspireInk</Link>
          </div>
          
          <SearchComponent ></SearchComponent>
        </div>


      <div className="flex justify-center  items-baseline gap-2">
        
          <button onClick={onClick}  className="bg-green-500 mr-2 rounded-full pb-2 px-4 pt-1 text-white font-medium text-xs md:text-sm">{label}</button>
        
          <UserAvatar></UserAvatar>
        </div>
    </div>
  );
}


