import React from "react";
const base_url = "https://image.tmdb.org/t/p/original/";
function Movies({ data }) {
	console.table(data);
	return (
		<div className="flex -mx-1 overflow-y-hidden overflow-x-scroll scrolling-touch">
			{data.map((movie) => {
				const src = base_url + movie.poster_path;
				return (
					<img
						className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-4 px-2 w-1/1 md:w-1/6 lg:w-1/12"
						src={src}
						alt={movie.name}
					/>
				);
			})}
		</div>
	);
}

export default Movies;
