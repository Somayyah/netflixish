import React, {useState, useEffect} from "react";
import '../assets/main.css'
import axios from '../axios.js'
import Movies from './Movies'

function Row({title, fetchUrl}){
	const [movies, setMovies] = useState([]);
	useEffect(()=>{
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results)
			//return request;
		}
		fetchData();
	},[fetchUrl]);

	return(
		<div>
			<h1>{title}</h1>
			<Movies data={movies}/>
		</div>
	)
}

export default Row;
