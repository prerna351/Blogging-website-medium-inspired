import { Blog } from "../hooks/hooks";
import { Avatar } from "./BlogCard";


export const FullBlog = ({blog} : {blog: Blog}) => {
  
  return (
    
    <div className="grid lg:grid-cols-12  p-2 md:px-28">
        <div className="col-span-8  p-4 ">

            <div className="text-5xl mb-2 font-extrabold">
                {blog.title}
            </div>
            <div className="mb-6">
              Posted on 2nd December 2023
            </div>
            <div>
                {blog.content}
            </div>
        </div>

        <div className="col-span-4 p-4 ">
            <div className="text-slate-600 mb-3 text-md">
                Author
            </div>
            <div className="flex  w-full">
                <div className="pr-4 pb-14  flex flex-col justify-center">
                    <Avatar size={6} name={blog.author.name || "Anonymous"} />
                </div>
                <div >
                    <div className="text-xl  font-bold">
                        {blog.author.name || "Anonymous"}
                    </div>
                    <div className="pt-2 text-slate-500">
                      Random catch phrase about the author's ability to grab the user's attention
                    </div>
                </div>
            </div>  
        </div>
    </div>
  );
}


