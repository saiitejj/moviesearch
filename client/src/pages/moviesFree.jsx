import React from "react";
import PageTemplate from "../components/PageTemplate";
import axios from "axios";

const MoviesFree=()=>{
    const handleSubmit=async()=>{
        
        try{

            const response=await axios.get('https://moviesearch-mr7l.onrender.com/movies/free')
            const movieLink=response.data
            window.open(movieLink,"_blank")

        
        }catch(error){
            console.error('Error :',error)

        }

    }
    return (
        // <form onSubmit={handleSubmit}>
        <PageTemplate 
            title="Want to get FREE movies URL?"
            buttons={[
                {
                    label:"Get Free Movie",
                    onClick:handleSubmit,
                }
            ]}
            showNavigator={true}
        />
        // <div>
        //     <button onClick={handleSubmit}>
        //         Get Free Movies
        //     </button>

        // </div>
    )

}

export default MoviesFree