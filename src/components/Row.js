import React, {useState, useEffect} from "react";
import '../assets/main.css'
import axios from '../axios.js'
import Movies from './Movies'

function Row({title, fetchUrl, isLargeRow}){
	const [movies, setMovies] = useState([]);
	useEffect(()=>{
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results.slice(5))
			//return request;
		}
		fetchData();
	},[fetchUrl]);

	return(
		<div>
			<h1 className="text-xl md:text-2xl mb-2">{title}</h1>
			<Movies data={movies} isLarge={isLargeRow} />
		</div>
	)
}

export default Row;
