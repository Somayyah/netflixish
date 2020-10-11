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

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="bg-cover h-80 bg-top bg-no-repeat"
			style={{
				backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
			}}
		>
			<div className="px-16 h-full absolute  mt-48">
				<h1 className="text-5xl">
					{movie?.name || movie?.title || movie?.original_name}
				</h1>
				<div className="py-2 font-normal">
					<button className="px-6 py-1 opacity-50 cursor-pointer text-gray-100 outline-none font-semibold rounded-sm bg-gray-800 hover:bg-gray-100 hover:text-gray-900">
						Play
					</button>
					<button
						className="hover:bg-gray-100 hover:text-gray-900
					px-6 py-1 opacity-50 ml-3 cursor-pointer text-gray-100 outline-none border-none font-semibold rounded-sm bg-gray-800"
					>
						My List
					</button>
				</div>
				<p className="font-normal text-xl w-3/6">
					{truncate(movie?.overview, 150)}
				</p>
			</div>
			<div className="h-full from-gray-900 to-transparent bg-gradient-to-t"></div>
		</header>
	);
}

export default Banner;
