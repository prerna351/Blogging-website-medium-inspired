import { useState } from "react";
import { Profile } from "./Profile";
import { Link } from "react-router-dom";



export function Avatar({name, size} :{name: string, size: number} ){
    const [showTooltip, setShowTooltip] = useState(false);
    
  
    return(
        <>
        
        <div className="relative ">
            <div onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                 className={`relative cursor-pointer inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-blue-300  rounded-full `}>
                <span className="font-medium text-xs text-center text-gray-600 ">{name[0].charAt(0).toUpperCase()}</span>
            </div>

            {showTooltip && (
                <Profile  ></Profile>
                // <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-lg z-10 w-48">
                //     <p className="text-sm text-gray-700 font-semibold">{name}</p>
                //     <p className="text-xs text-gray-500">User Profile Info</p>
                // </div>
            )}
            
        </div>
        
        </>
    )
}

// onMouseLeave={() => setShowTooltip(false)}