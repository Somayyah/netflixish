import React from "react";
const base_url = "https://image.tmdb.org/t/p/original/"
function Movies({data}){
	console.table(data)
	return(
		<div>
			{data.map( movie =>{
				const src = base_url + movie.poster_path
				return <img src={src} alt={movie.name}/>
			})}
		</div>
	)
}

export default Movies;
