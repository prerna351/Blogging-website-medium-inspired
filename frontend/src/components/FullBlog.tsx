import { Blog } from '../types/BlogsTypes';
import { Avatar } from "./AvatarComponent.tsx";



export const FullBlog = ({blogDetails} : {blogDetails: Blog}) => {
  
  return (
    
    <div className="grid lg:grid-cols-12  px-2 py-6 md:px-28">
        <div className="col-span-8  p-4 ">

            <div className="text-2xl md:text-5xl mb-4 font-extrabold">
                {blogDetails.title}
            </div>
            <div className="mb-6 ">
             {new Date(blogDetails.createdAt).toLocaleDateString()}
            </div>
            <div>
                {blogDetails.content}
            </div>
        </div>

        <div className="col-span-4 p-4 ">
            <div className="text-slate-600 mb-3 text-md">
                Author
            </div>
            <div className="flex  w-full">
                <div className="pr-4 pb-14  flex flex-col justify-center">
                    <Avatar size={6} name={blogDetails.author.name || "Anonymous"} />
                </div>
                <div >
                    <div className="text-xl  font-bold">
                        {blogDetails.author.name || "Anonymous"}
                    </div>
                    <div className="pt-2 text-slate-500">
                      Random catch phrase about the author's ability to grab the user's attention
                    </div>
                    {/* <Profile></Profile> */}
                </div>
            </div>  
        </div>
    </div>
  );
}


