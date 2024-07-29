import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";


export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4">
      <div  className="h-screen flex  justify-center md:items-center flex-col">
        <Auth type="/"></Auth>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-center bg-gray-100 h-screen ">
        <Quote></Quote>
      </div>
    </div>
  );
}


//flex justify-center  flex-col