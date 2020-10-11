import React, {useEffect, useState} from "react";

function Nav(){

	const [show, handleShow] = useState([])
	useEffect(() => {
		
		window.addEventListener("scroll", ()=>{
			if (window.scrollY > 100){
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		}
	}, [])

	return(
		<div className={`z-10 py-4 h-16 fixed flex justify-between w-screen bg-transparent ${show && "bg-gray-900 ease-in transition-all duration-200"}`}>
			<img className=" absolute px-16 h-6 bg-transparent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
			<img className="h-6 ml-128" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="nav logo"/>
		</div>
	)
}

export default Nav;
