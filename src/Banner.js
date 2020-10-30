import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './Request';
import './Banner.css';


function Banner() {
    const [movie, setmovies] = useState([]);
    

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            
            let ran = Math.floor(Math.random()*request.data.results.length-1);
            setmovies(request.data.results[ran]);

            return request;
        }
        fetchData();

    },[]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str; 
    }

    return (
        <header className="banner"
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className = "banner_button">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="banner_desc">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_footer"></div>
        </header>
    )
}

export default Banner
