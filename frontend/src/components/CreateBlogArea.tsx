interface CreateBlogAreaProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    rows: number
}

export const CreateBlogArea: React.FC<CreateBlogAreaProps> = ({title, setTitle, content, setContent, rows}) => {
        
  return (
    
        
        <div className="flex justify-center md:mx-3 mx-3 pt-8 ">

            {/* title div */}
            <div className="max-w-3xl w-full ">
            <input
             value={title}
             onChange={(e) => {setTitle(e.target.value)}} 
             type="text" className="focus:outline-none  font-medium font-serif text-gray-500 text-5xl block w-full p-2.5  " placeholder="Title" />

            {/* content div  */}
            <div>
                <textarea
                  value={content}
                  onChange={(e) => {setContent(e.target.value)}}  
                  rows={rows} className="block p-2.5 w-full text-lg font-serif text-gray-500 focus:outline-none " placeholder="Tell your story..."></textarea>

            </div>
        </div>
    
    
    </div>
    
  );
}




