import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

interface AppBarProps {
  label: string;
  onClick: () => void;
  
}

export const AppBar : React.FC<AppBarProps> = ({ label,  onClick }) => {
  return (
    <div className="flex justify-between items-center px-12 py-3 w-screen shadow-sm ">
      <div className="flex gap-2 ">
        <div className="font-bold text-2xl">
          <Link to={'/blogs'}>Medium</Link></div>
        <div className="text-sm "></div>
      </div>


      <div className="flex justify-center items-baseline gap-2">
        
        <button onClick={onClick}  className="bg-green-500 mr-2 rounded-full pb-2 px-4 pt-1 text-white font-medium text-sm">{label}</button>
        
        
        <div className="w-8 h-8">
        <Avatar name="Prerna" size={8}></Avatar>
        </div>
      </div>
    </div>
  );
}


