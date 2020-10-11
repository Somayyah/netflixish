import React from "react";
const base_url = "https://image.tmdb.org/t/p/original/";

function Movies({ data , isLarge}) {
	return (
		<div className=" ml-4 flex -mx-1 overflow-y-hidden overflow-x-scroll">
			{data.map((movie) => {
				return (
					<img
						key={movie.id}
						className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-1 px-1 w-1/2 md:w-1/6 ${isLarge ? 'lg:w-1/10' : 'lg:w-1/9'}`}
						src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				);
			})}
		</div>
	);
}

export default Movies;
