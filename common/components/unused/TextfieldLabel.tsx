import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
		<div class="question">is your Gym? </div>
		<input type="text" id="Gym" name="Gym" placeholder="Gym"></input>
	</div>
))

@style(css`
.question:before{
	content: "What ";
	color: #0D9D9D;
	font-weight: 700;
}

.question{
	font-weight: 700;
	padding-bottom: 4px;
}

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


export class Textfieldlabel extends Component <Props>{}