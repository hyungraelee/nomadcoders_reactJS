import React from 'react';
import PropTypes from "prop-types";

function Food({name, start, rating}) {
	return (
	<h2>start {start}, {name}, rating: {rating}/5.0</h2>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};

const foodILike = [
	{
		id: 1,
		start: "k",
		name: "kimchi",
		rating: 4.2
	},
	{
		id: 2,
		start: "r",
		name: "ramen",
		rating: 4.7
	},
	{
		id: 3,
		start: "c",
		name: "coffee",
		rating: 4.9
	}
];

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			{foodILike.map(dish => (<Food key={dish.id} name={dish.name} start={dish.start} rating={dish.rating} />))}
		</div>
	);
}

export default App;
