import React from "react";
import Row from '../components/Row'
import requests from '../requests'
function Home(){
	return(
		<div>
			<Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovis}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovis}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovis}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovis}/>
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
	)
}

export default Home;
