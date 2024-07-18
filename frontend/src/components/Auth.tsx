import { ChangeEvent, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { SignupInput } from "@presha/common_blog";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import { userCredentialAtom } from "../store/atoms/userAtom";




//have a separate sign up and signin component

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useRecoilState<SignupInput>(userCredentialAtom);
    const navigate = useNavigate();
    
    async function sendRequest () {
      try{
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup" ? "signup": "signin"}`,postInputs)
        //here i get jwt as the response
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate(`/blogs`);
      }catch(e){
        alert("error while signing up")
        console.log(e);
        //alert the user that the request has failed
      }
    }
    return (
        <>
            <div className="max-w-md lg:w-1/2  flex flex-col gap-2">
                <div className="text-3xl text-center font-extrabold">
                    Create an account
                </div>
                <div className="text-gray-500 text-center">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                    <Link className="px-1 underline text-yellow-400" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Login"}
                    </Link>
                </div>
                
                <div className=" mt-2">
                {type === "signup" ? <LabelledInput 
                    label="Username" 
                    placeholder="Enter your username" 
                    onChange={(e) => {
                        e.preventDefault();
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        });
                    }} 
                /> : null}

                <LabelledInput 
                    label="Email" 
                    placeholder="m@example.com" 
                    onChange={(e) => {
                        e.preventDefault();
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        });
                    }} 
                />

                <LabelledInput 
                    label="Password" 
                    
                    placeholder="" 
                    onChange={(e) => {
                        e.preventDefault();
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        });
                    }} 
                    
                />

                <button onClick= {sendRequest}type="button" className="text-white bg-gray-900 hover:bg-gray-700  font-medium rounded-md text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-6 ">{type === "signup" ? "Sign up": "Sign in"}</button>
                </div>

                
            </div>
        </>
    );
}


interface labelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
    
}
function LabelledInput({label, placeholder, onChange, type}: labelledInputType){

    const [isPasswordVisible, setisPasswordVisible] = useState(false);
isPasswordVisible
    function togglePasswordView(){
        setisPasswordVisible(!isPasswordVisible);
    }
    return (
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-900 pt-4">{label}</label>

            {label === 'Password'? 
                <div className="max-w-sm">
                
                <div className="relative">
                    <input onChange={onChange}  type={isPasswordVisible? "text" : "password"} className=" border border-gray-300 py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder={placeholder}/>
                    <button onClick={togglePasswordView} type="button" className="absolute top-0 end-0 p-3.5 rounded-e-md">
                    <svg className="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
              className={isPasswordVisible ? 'hidden' : ''}
              d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
            ></path>
            <path
              className={isPasswordVisible ? 'hidden' : ''}
              d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            ></path>
            <path
              className={isPasswordVisible ? 'hidden' : ''}
              d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            ></path>
            <line
              className={isPasswordVisible ? 'hidden' : ''}
              x1="2"
              x2="22"
              y1="2"
              y2="22"
            ></line>
            <path
              className={isPasswordVisible ? '' : 'hidden'}
              d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
            ></path>
            <circle
              className={isPasswordVisible ? '' : 'hidden'}
              cx="12"
              cy="12"
              r="3"
            ></circle>
                    </svg>
                    </button>
                </div>
                </div>

            
            :
            <input onChange={onChange} type={type || "text"}  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
            }
            
        </div>
    )
}


