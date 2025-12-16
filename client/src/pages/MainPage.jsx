import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage=()=>{
    const navigate=useNavigate()
    return (
    
        <div className="min-h-screen bg-[url('/movie.jpg')] bg-cover bg-center bg-no-repeat flex border items-center justify-center ">
            <div className="w-96 border p-8 text-center space-y-6 bg-white/30 backdrop-blur-md shadow-lg rounded-lg border-transparent ">
                <form className="flex flex-col space-y-4 p-2">

                    <h1 className="text-xl font-bold text-gray-900">GET MOVIE URL SUGGESTIONS</h1>
                    <div>


                    <button 
                    type="button"
                    onClick={()=>navigate('/moviesFree')}
                        className="border p-2 cursor-pointer rounded-sm mr-2 ring-0 hover:ring-[#213448] hover:ring-2 focus:outline-none border-transparent shadow-md "
                        >
                        Free movies 
                    </button >
                    <button 
                        type="button"
                    onClick={()=>navigate('/moviesPaid')}
                        className="border p-2 cursor-pointer rounded-sm mr-2 hover:ring-[#213448] hover:ring-2 focus:outline-dotted border-transparent shadow-md"
                        >
                        Paid movies
                    </button>
                    </div>
                </form>
            </div>
        </div>

    )
    
}

export default MainPage