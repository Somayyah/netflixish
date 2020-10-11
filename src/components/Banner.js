import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../assets/main.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);

	return (
		<header
			className="bg-cover h-80 bg-top bg-no-repeat bg-fixed"
			style={{
				backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
			}}
		>
				<div className="h-full">
					<h1 className="mt-6">{movie?.name || movie?.title || movie?.original_name}</h1>
					<div>
						<button className="">Play</button>
						<button className="">My List</button>
					</div>
					<p>{movie?.overview}</p>
				</div>
		</header>
	);
}

export default Banner;
