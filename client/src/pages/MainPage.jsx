import React from "react";
import PageTemplate from "../components/PageTemplate";
import { useNavigate } from "react-router-dom";

const MainPage=()=>{
    const navigate=useNavigate()
    return (

        <PageTemplate
            title="GET MOVIE URL SUGGESTIONS"
            buttons={[
                {label:"Free movies",onClick:()=>navigate("/moviesFree")},
                {label:"Paid movies",onClick:()=>navigate("/moviesPaid")}
            ]}
        />


    )
    
}

export default MainPage