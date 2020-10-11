import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/";

function Movies({ data, isLarge }) {

	const [trailerUrl, setTrailer] = useState("");
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};


	function handleClick(movie){
		if (trailerUrl)
			setTrailer("")
		else
			movieTrailer(movie?.name || "")
			.then((url)=>{
				const urlParams = new URLSearchParams(new URL(url).search)
				setTrailer(urlParams.get('v'))
			})
			.catch((error)=> console.log(error))
	}

	return (
		<div>
			<div className=" ml-4 flex -mx-1 overflow-y-hidden overflow-x-scroll">
				{data.map((movie) => {
					return (
						<img
							onClick={() => handleClick(movie)}
							key={movie.id}
							className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-1 px-1 w-1/2 md:w-1/6 ${
								isLarge ? "lg:w-1/10" : "lg:w-1/9"
							}`}
							src={`${base_url}${
								isLarge ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Movies;
