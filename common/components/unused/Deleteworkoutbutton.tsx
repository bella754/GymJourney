import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button>Delete Workout</button>
	</div>
))

@style(css`
button{
	width: 134px;
	height: 40px;
	border: none;
	font-size: 9px;
	color: #EF2D20;
	background-color: transparent;
	text-decoration: underline;
}

button:hover{
	color: #EF2D00;
}

button:active {
	color: #EF2D20;
}
`)


export class Deleteworkoutbutton extends Component <Props>{}