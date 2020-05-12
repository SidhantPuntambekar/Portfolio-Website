import React from "react";
import "../styles/ResponsiveContainer.css";

/**
 * A component that represents a responsive container
 * Adapted from SaurabhTotey
 */
export default props => (
	<div className={"responsiveContainer"}>{
		props.children.map((child, index) => <div className={"responsiveContainerItem"} style={{"--responsive-width": child.props.responsiveWidth}} key={index}>{child}</div>)
	}</div>
)

//export default ResponsiveContainer