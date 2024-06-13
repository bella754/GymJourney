import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<button>Forgot Password?</button>
	</div>
))

@style(css`
button{
	width: 100px;
	height: 16px;
	border: none;
	font-size: 9px;
	color: #4E75FC;
	background-color: transparent;
	text-decoration: underline;
}

button:hover{
	color: #4E75EE;
}

button:active {
	color: #4E75EE;
}
`)


export class Buttontransparent extends Component <Props>{}