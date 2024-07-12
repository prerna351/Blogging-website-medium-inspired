import { ChangeEvent, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { SignupInput } from "@presha/common_blog";
import axios from "axios";
import { BACKEND_URL } from "../config";


//have a separate sign up and signin component

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    async function sendRequest () {
      try{
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup" ? "signup": "signin"}`,postInputs)
        //here i get jwt as the response
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }catch(e){
        alert("error while signing up")
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
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        });
                    }} 
                />

                <LabelledInput 
                    label="Password" 
                    type="password"
                    placeholder="" 
                    onChange={(e) => {
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
    return (
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-900 pt-4">{label}</label>

            <input onChange={onChange} type={type || "text"}  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    )
}


