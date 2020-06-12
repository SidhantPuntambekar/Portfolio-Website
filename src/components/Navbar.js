import React from "react";
import { Link } from "gatsby";
import "../styles/Navbar.css";

//Page names to relative page paths
const pages = {
	"Home": "/",
	"Resume": "/Resume",
	"Programming": "/Programming",
	"Music": "/Music",
    "Computational Biology": "/ComputationalBiology",
	"History": "/History",
	"Chess": "/Chess"
};
//List of page names
const pageNames = Object.keys(pages);

function NavbarItem(props) {
	return <li className={"navbarItem" + (props.isActive ? " active" : "")}><Link className={"navbarLink"} to={pages[props.currentPageName]}>{props.currentPageName}</Link></li>;
}

/**
 * React component that is a navbar
 * Handles setting navigation to all pages and figuring out current page
 */
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentRelativePath: null
		};
	}

	componentDidMount() {
		this.setState({ currentRelativePath: window.location.href.replace(window.location.origin,"") });
	}

	render() {
		return <nav role={"navigation"} aria-label={"Page Navigation"}>
			<ul id={"navbar"}>{
				pageNames.map(pageName => <NavbarItem isActive={this.state.currentRelativePath === pages[pageName]} currentPageName={pageName} key={pageName} />)
			}</ul>
		</nav>
	}

}

export default Navbar