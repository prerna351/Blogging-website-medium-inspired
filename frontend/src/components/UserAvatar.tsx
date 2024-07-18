import { useRecoilValue } from "recoil";
import { userCredentialAtom } from "../store/atoms/userAtom.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserAvatar = () => {
    const userName = useRecoilValue(userCredentialAtom);
    const [ShowUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();

    const handleMyStoriesClick = () => {
      navigate('/blogger-profile');
  };

  return (
    <div>
        {/* userIcon  */}
        <div>
              <div onMouseEnter={() => setShowUserMenu(true)} className={`relative cursor-pointer inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 overflow-hidden bg-blue-300  rounded-full `}>
                <span className="font-medium text-xs text-center text-gray-600 ">{userName.name? userName.name.charAt(0).toUpperCase(): 'A'}</span>
              </div>

            {
              ShowUserMenu && 
              <div  className="absolute top-16 right-8 z-99 w-40 grid-cols-2 text-sm font-medium border border-gray-100 rounded-sm shadow-md  md:grid-cols-3 0">
              <div onClick={handleMyStoriesClick} className="bg-white p-4 pb-0 text-gray-500 md:pb-4 hover:text-black cursor-pointer">
                My Stories                                        
              </div>
              
              <div className="p-4 pb-0 bg-white text-gray-500 hover:text-black  md:pb-4  cursor-pointer">
                Sign Out                                       
              </div>
              
              <div className="p-4 pb-0 bg-white text-red-500 hover:text-red-700  md:pb-4  cursor-pointer">
                Delete Account                                       
              </div>
              </div>
            }
            </div>
    </div>
  );
}

