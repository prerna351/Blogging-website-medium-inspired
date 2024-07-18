import { Link } from "react-router-dom"
import { Avatar } from "./AvatarComponent";
import { useState } from "react";


export interface BlogCardProps {
    id: number,
    authorName: string,
    title: string,
    content: string,
    publishedDate: number,
    titleFontSize: string;
    isAuthor?: boolean; // New prop to check if the current user is the author
    onDelete?: (id: number) => void; // Handler for delete action
}


export const BlogCard = ({
                id,
                authorName,
                title,
                content,
                publishedDate,
                titleFontSize,
                isAuthor,
                onDelete,
            }: BlogCardProps) => {
                
            const [showDropdown, setShowDropdown] = useState(false);
            const handleDelete = () => {
                if(onDelete){
                    onDelete(id)
                }
            }
            return (
                
                    <div className=" p-8 border-b w-full max-w-full  space-x-2 grid grid-cols-12  ">
                       <div className=" col-span-8  "> 

                            <div className="flex gap-2  items-center">
                                <div className="flex flex-row  w-6 h-6  justify-center items-center">
                                    <Avatar name={authorName} size={6}></Avatar>
                                </div>
                                <div >{authorName}</div> 
                                <span className="text-gray-400 text-[6px]">&#9679;</span> 
                                <span className="text-gray-600">{new Date(publishedDate).toLocaleDateString()}</span>
                            </div>
                            <Link to={`/blog/${id}`}>
                                <div className={`font-extrabold text-${titleFontSize} mt-4`}>
                                    {title}
                                </div>
                                <div className=" lg:text-md font-medium text-gray-500 mt-2">
                                    {content.slice(0,70) + "..."}
                                </div>
                                <div className="mt-6 text-gray-600 ">
                                    {`${Math.ceil(content.split(/\s+/).length/200)} min read`}
                                </div>
                            </Link>
                        </div>

                       {/* image   */}
                     <div className=" col-span-4 space-y-16  px-5 ">
                        <div className=" flex flex-col  overflow-x-clip items-center ">
                            <img className=" max-w-44 object-cover h-auto lg:h-32" src="/image1.jpeg" alt="image1" />
                        </div>

                        {/* menubutton  */}
                        {isAuthor?
                            <div className="flex justify-end">
                                <div className="relative">
                                    <button onClick={() => setShowDropdown(!showDropdown)} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-600  hover:bg-gray-100  focus:outline-none   rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                    </button>
                                    {showDropdown && (
                                    <div className="absolute left-0 bottom-10 mt-2 w-48 bg-white rounded-sm shadow-lg z-50">
                                        <button
                                            className=" w-full text-left px-5 py-3 font-semibold text-sm text-gray-600 hover:text-gray-900 "
                                            // onClick={handleDelete}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="block w-full text-left px-5 py-3 font-semibold text-sm text-gray-600 hover:text-red-700 "
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                                </div>
                            
                            </div>
                            : null}
                     </div>
                </div>
                
            );
            }


           