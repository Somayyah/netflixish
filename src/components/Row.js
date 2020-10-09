import React, {useState, useEffect} from "react";
import '../assets/main.css'
import axios from '../axios.js'

function Row({title, fetchUrl}){
	const [movies, setMovies] = useState([]);
	useEffect(()=>{
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request)
		}
		fetchData();
	});

	return(
		<div>
			<h1>{title}</h1>
			{/* container -> posters */}
		</div>
	)
}

export default Row;
