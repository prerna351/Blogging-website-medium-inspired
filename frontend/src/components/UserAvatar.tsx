import { useRecoilValue, useSetRecoilState } from "recoil";
import { userCredentialAtom } from "../store/atoms/userAtom.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config.ts";
import { ConfirmationModal } from "./confirmationModal.tsx";

export const UserAvatar = () => {
    const userName = useRecoilValue(userCredentialAtom);
    const setUserCredential = useSetRecoilState(userCredentialAtom)
    const [ShowUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleMyStoriesClick = () => {
      navigate('/blogger-profile');
  };

 

  const handleSignOut = () => {
     // Clear user state and token
    setUserCredential({ email: '', password: '',name: '' });
    localStorage.removeItem('token');
    navigate('/signin');
  }

  const handleDeleteAccount = async () => {
    try {
      
      await axios.delete(`${BACKEND_URL}/api/v1/user/delete-account`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setUserCredential({ email: '', name: '', password: '' });
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    handleDeleteAccount();
    setShowConfirmationModal(false);
  };
  return (
    <div>
        {/* userIcon  */}
        <div>
              <div onClick={() => setShowUserMenu(!ShowUserMenu)} className={`relative cursor-pointer inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 overflow-hidden bg-yellow-400  rounded-full `}>
                <span className="font-medium text-xs text-center text-gray-800 ">{userName.name? userName.name.charAt(0).toUpperCase(): 'A'}</span>
              </div>

            {
              ShowUserMenu && 
              <div  className="absolute bg-white top-16 right-4 md:right-8 z-99 w-40 grid-cols-2 text-sm font-medium border border-gray-100 rounded-sm shadow-md  md:grid-cols-3 0">
                <div onClick={handleMyStoriesClick} className="bg-white px-4 py-3 text-gray-500 md:pb-4 hover:text-black cursor-pointer">
                  My Stories                                        
                </div>
                
                <div onClick={handleSignOut} className=" bg-white text-gray-500 hover:text-black px-4 py-3 md:pb-4  cursor-pointer">
                  Sign Out                                       
                </div>
                
                <div onClick={handleDeleteClick} className="px-4 py-3 bg-white text-red-500 hover:text-red-700  md:pb-4  cursor-pointer">
                  Delete Account                                       
                </div>
              </div>
            }
            </div>
            <div >
              <ConfirmationModal
                isOpen={showConfirmationModal}
                onClose={() => setShowConfirmationModal(false)}
                onConfirm={handleConfirmDelete}
              />
            </div>
    </div>
  );
}

