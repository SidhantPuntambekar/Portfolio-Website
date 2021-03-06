import React from "react";
import "../styles/Carousel.css";


export let carouselCounter = 0;

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentItemIndex: 0
		};
		this.carouselNumber = carouselCounter;
		carouselCounter++;
		this.oldItemIndex = null;
	}

	movePosition(amount) {
		this.oldItemIndex = this.state.currentItemIndex;
		this.setState({
			...this.state,
			currentItemIndex: this.state.currentItemIndex + amount
		});
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const numberChildren = React.Children.toArray(nextProps.children).length;
		if (nextProps.children !== this.props.children) {
			this.oldItemIndex = null;
		}
		let newPosition = nextState.currentItemIndex % numberChildren;
		while (newPosition < 0) {
			newPosition += numberChildren;
		}
		if (nextState.currentItemIndex !== newPosition) {
			this.setState({
				...nextState,
				currentItemIndex: newPosition
			});
		}
	}

	render() {
		const id = `carousel${this.carouselNumber}`;
		const makeCarouselControls = () => (
			<fieldset className={"carouselControlBox"} aria-label={"carousel controls"} aria-controls={id}>
				<button className={"carouselControl"} onClick={() => this.movePosition(-1)} aria-label={"previous"}>&#10094;</button>
				<button className={"carouselControl"} onClick={() => this.movePosition(1)} aria-label={"next"}>&#10095;</button>
			</fieldset>
		);
		return <div className={"carousel"} id={id} aria-live={"polite"}>
			<h3>{this.props.title}</h3>
			{makeCarouselControls()}
			<ul className={"carouselContentList"}>{
				React.Children.toArray(this.props.children).map((child, index) => {
					let childContainerClassName = this.state.currentItemIndex === index ? "" : "hiddenCarouselContent";
					let style = {};
					if (this.oldItemIndex !== null && [this.state.currentItemIndex, this.oldItemIndex].includes(index)) {
						childContainerClassName = "animation";
						style["--animation-name"] = index === this.state.currentItemIndex ? "enter" : "exit";
					}
					return <li aria-hidden={index !== this.state.currentItemIndex} className={"carouselItem"}>
						<div className={childContainerClassName} style={style}>{child}</div>
					</li>
				})
			}</ul>
			{makeCarouselControls()}
		</div>
	}

}

export default Carousel