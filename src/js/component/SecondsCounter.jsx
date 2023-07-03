import React from "react";
import { BsClock } from "react-icons/bs";

//SecondsCounter Function
const SecondsCounter = (props) => {
	return (
		<div className="counterContainer center">
			<div className="digit icon">
				<BsClock/>
			</div>
			<div className="digit six">{props.digitSix % 10}</div>
			<div className="digit five">{props.digitFive % 10}</div>
			<div className="digit four">{props.digitFour % 10}</div>
			<div className="digit three">{props.digitThree % 10}</div>
			<div className="digit two">{props.digitTwo % 10}</div>
			<div className="digit one">{props.digitOne % 10}</div>
		</div>
	);
};

export default SecondsCounter;
