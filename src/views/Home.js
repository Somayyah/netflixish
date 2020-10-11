import React from "react";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import requests from "../requests";
import "../assets/main.css";

function Home() {
	return (
		<div className="text-gray-100 font-bold">
			<Nav />
			<Banner />
			<div className="p-6">
				<Row
					title="NETFLIX ORIGINALS"
					isLargeRow
					fetchUrl={requests.fetchNetflixOriginals}
				/>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovis} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovis} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovis} />
				<Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovis} />
				<Row
					title="Documentaries Movies"
					fetchUrl={requests.fetchDocumentaries}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
