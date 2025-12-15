import React from "react";
// import { Link } from "react-router-dom";
// import {Link} from "react-router-dom"
import axios from "axios";

const MoviesPaid=()=>{
    const handleSubmit=async()=>{
        // e.preventDefault()
        try{

            const response=await axios.get('http://localhost:3000/movies/paid')
            const movieLink=response.data
            window.open(movieLink,"_blank")

        
        }catch(error){
            console.error('Error :',error)

        }

    }
    return (
        // <form onSubmit={handleSubmit}>
        <div>
            <button onClick={handleSubmit}>
                Get Movies
            </button>

        </div>
    )

}

export default MoviesPaid