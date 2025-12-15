import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage=()=>{
    const navigate=useNavigate()
    return (
    
        <div>

            <h1>Main Page</h1>
            <button onClick={()=>navigate('/moviesFree')}>
                Free movies
            </button>
            <button onClick={()=>navigate('/moviesPaid')}>
                Paid movies
            </button>
        </div>

    )
    
}

export default MainPage