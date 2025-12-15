import React from "react";

import axios from "axios";

const MoviesFree=()=>{
    const handleSubmit=async()=>{
        // e.preventDefault()
        try{

            const response=await axios.get('http://localhost:3000/movies/free')
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
                Get Free Movies
            </button>

        </div>
    )

}

export default MoviesFree