import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button uix-title={'but'}>Back to homescreen</button>
	</div>
))

@style(css`
button{
	width: 169px;
	height: 40px;
	font-size: 14px;
	border-radius: 8px;
	border: black;
	color: white;
	background-color: black;
	cursor: pointer;
}

button:hover {background-color:black}

button:active {
	background-color: #black;
	transform: translateY(4px);
}
`)


export class Backtohomescreen extends Component <Props>{}