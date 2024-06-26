import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
		<input type="text" id="Username" name="Username" placeholder="Username"></input>
	</div>
))

@style(css`
input{
	width: 350px;
	height: 20px;
	font-size: 16px;
	border-radius: 4px;
	border:2px solid #CBD5E1;
	color: black;
	background-color: transparent;
}

input[type=text]:focus {
	outline: none;
  }

`)


export class Textfield extends Component <Props>{}