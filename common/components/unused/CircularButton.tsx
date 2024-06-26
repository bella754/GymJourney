import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button uix-title={'circularbutton'}>+</button>
	</div>
))

@style(css`
button{
	width: 40px;
	height: 40px;
	transition-duration: 0.3s;
	border-radius: 50%;
	border: 2px solid #0891B2;
	box-shadow: 0 4px 8px 0 lightgrey, 0 3px 10px 0 lightgrey;
	color: #0891B2;
	background-color: transparent;
	font-size: 30px;
}

button:hover {
	background-color: transparent;
	color: #089190;
	border: 2px solid #089190;
}

button:active {
	background-color: transparent;
	box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}
`)


export class Circularbutton extends Component <Props>{}