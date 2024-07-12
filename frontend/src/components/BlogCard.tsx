import { Link } from "react-router-dom"


interface BlogCardProps {
    id: number,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}


export const BlogCard = ({
                id,
                authorName,
                title,
                content,
                publishedDate
            }: BlogCardProps) => {
                
            return (
                <Link to={`/blog/${id}`}>
                    <div className=" p-8 border-b w-screen max-w-screen-sm cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-row  w-6 h-6  justify-center items-center">
                                <Avatar name={authorName} size={6}></Avatar>
                            </div>
                            <div >{authorName}</div> 
                            <span className="text-gray-400 text-[6px]">&#9679;</span> 
                            <span className="text-gray-600">{publishedDate}</span>
                        </div>
                        <div className="font-extrabold text-3xl mt-4">
                            {title}
                        </div>
                    <div className="text-md font-medium text-gray-500 mt-2">
                        {content.slice(0,100) + "..."}
                    </div>
                    <div className="mt-6 text-gray-600">
                        {`${Math.ceil(content.split(/\s+/).length/200)} min read`}
                    </div>
                {/* <div className="bg-slate-100 w-full h-1 mt-9"></div> */}
                    </div>
                </Link>
            );
            }


export function Avatar({name, size} :{name: string, size: number} ){
    return(
        <div className={`relative cursor-pointer inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-blue-300  rounded-full `}>
        <span className="font-medium text-xs text-center text-gray-600 ">{name[0].charAt(0).toUpperCase()}</span>
    </div>
    )
}