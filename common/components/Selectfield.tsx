import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div>
	<form>
		<div class="question">is your identity? </div>
		<select id="gender" name="gender">
		<option value="male">male</option>
		<option value="female">female</option>
		<option value="other">other</option>
		</select>
	</form>
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
}

select{
	width: 350px;
	height: 20px;
	font-size: 16px;
	border-radius: 4px;
	border:2px solid #CBD5E1;
	color: black;
	background-color: transparent;
}

select[type=text]:focus {
	outline: none;
  }

`)


export class Selectfield extends Component <Props>{}