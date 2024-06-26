import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button uix-title={'but'}>Register</button>
	</div>
))

@style(css`
button{
	width: 131px;
	height: 52px;
	font-size: 16px;
	border-radius: 8px;
	border: white; /* Green */
	color: white;
	background-color: #0D9D9D;
}

button:hover {background-color: #0D9D98}

button:active {
	background-color: #0D9D9D;
	box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}
`)


export class Registerbutton extends Component <Props>{}