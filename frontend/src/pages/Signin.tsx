import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div  className="h-screen flex  justify-center items-center flex-col">
      <Auth type="signin"></Auth>
    </div>
    <div className="hidden lg:flex lg:flex-col lg:justify-center bg-gray-100 h-screen ">
      <Quote></Quote>
    </div>
  </div>
  );
}


