import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
//useState react wala varibale hadana tahwa widihak
import movieTrailer from 'movie-trailer';

const baseurl = "https://image.tmdb.org/t/p/original";

function Row(title, fetchUrl, isLargrRow) {

    const [movies, setmovies] = useState([]);
    const [trailerUrl, SetTrailerUrl] = useState("");

    useEffect (() =>{
        async function fetchData(){
            const request = await axios.get(title.fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData(); 

    }, [title.fetchUrl]);
    //[] hiswa thyenakota, row eka load unama ekaparak ran wenna, aye epa 
    //movies variable eka wenas unama withray meka run wenne

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick = (movie) =>{
        if (trailerUrl){
            SetTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                SetTrailerUrl(urlParams.get("v"));
                //v eken passe thyen tika ganna kila kianne
                
            //youtube link eke? lanunen passe thyena trailer eka aran denawa
            }).catch(error=> console.log(error));
            //movie trailer eken wenne dena namata anuwa trailer eka youtube eken hoyaganna eka
        }
    }

    return (
        <div className="row"> 
            <h2> {title.title}</h2>
            <div className = "row_posters">
                {movies.map(movie =>(
                    <img
                    key={movie.id}
                    onClick = {() => handleClick(movie)}
                    className={`row_poster ${title.isLargrRow && "row_posterLarge"}`}
                    src={`${baseurl}${title.isLargrRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts = {opts}/>}
        </div>
    )
}

export default Row
