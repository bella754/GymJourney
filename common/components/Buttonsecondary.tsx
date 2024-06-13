import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button uix-title={'but'}>Log In</button>
	</div>
))

@style(css`
button{
	width: 311px;
	height: 63px;
	font-size: 22px;
	border-radius: 8px;
	border: #F0F0F0;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	color: black;
	background-color: #F0F0F0;
}

button:hover {background-color: #F0F0E8}

button:active {
	background-color: #F0F0F0;
	box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}
`)


export class Buttonsecondary extends Component <Props>{}