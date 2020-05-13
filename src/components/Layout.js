import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Global.css";
//General Layout js component for subpages
export default ({ children }) => (
	<>
		<Header />
		{ children }
		<Footer />
	</>
)