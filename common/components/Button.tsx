import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button uix-title={'but'}>Sign In</button>
	</div>
))

@style(css`
button{
	width: 300px;
	height: 100px;
	border-radius: 8px;
	border: white; /* Green */
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	color: white;
	background-color: #0891B2;
	font-size: 25px;
}

button:hover {background-color: #0891A5}

button:active {
	background-color: #0891B2;
	box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}
`)


export class Button extends Component <Props>{}