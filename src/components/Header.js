import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default () => (
	<header>
		<div id={"title-container"}>
			<h1 id={"title"}>Sidhant Puntambekar</h1>
			<span id={"secret-tooltip"}>Read about me on the home page.</span>
		</div>
		<Navbar />
	</header>
)
