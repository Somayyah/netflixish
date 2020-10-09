import React from "react";
const base_url = "https://image.tmdb.org/t/p/original/"
function Movies({data}){
	console.table(data)
	return(
		<div className="flex flex-wrap -mx-1">
			{data.map( movie =>{
				const src = base_url + movie.poster_path
				return <img className="px-1 w-1/2 md:w-1/3 lg:w-1/6" src={src} alt={movie.name}/>
			})}
		</div>
	)
}

export default Movies;
