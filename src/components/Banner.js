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

	console.log("from banner: ", movie);
	return (
		<header
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${base_url}${movie.backdrop_poster})`,
				backgroundPosition: "center center",
			}}
		>
			<div>
				<h1>{movie.name}</h1>
				<p>{movie.overview}</p>
			</div>
		</header>
	);
}

export default Banner;
