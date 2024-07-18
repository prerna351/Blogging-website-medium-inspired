

export const Profile = () => {
  return (
    <div className="absolute left-1/2 cursor-default transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-lg z-10 w-80 h-52">
        <div className="flex justify-between  items-baseline p-2">
          <div className="w-12 h-12 rounded-full  bg-yellow-500 flex justify-center items-center ">
            <div className="  w-5 h-5 text-center text-md">P</div>
          </div>
          
            <button type="button" className="text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-4 py-2 me-2 mb-2">follow</button>
          
        </div>
        <div className="mt-2">
        <div className=" px-2 font-semibold">Author Name</div>
        <div className=" text-xs font-semibold px-2 ">47 followers</div>
        <div className="text-sm px-2 mt-3 font-thin">Product designer. Design with purpose</div>
        </div>

        
    </div>

    
    
  );
}


