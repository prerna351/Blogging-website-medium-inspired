import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";


export const Signup = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div  className="h-screen flex  justify-center items-center flex-col">
        <Auth type="signup"></Auth>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-center bg-gray-100 h-screen ">
        <Quote></Quote>
      </div>
    </div>
  );
}


//flex justify-center  flex-col