import { useState } from "react";
import { Profile } from "./Profile";




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
                
            )}
            
        </div>
        
        </>
    )
}

