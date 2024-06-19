import { Component } from "uix/components/Component.ts";

@template((props) => (
	<div class="image">
	<img src="/@uix/src/common/res/Logo.jpg" />
	</div>
))

@style(css`
img{
	width:50px;
	height:50px;
}

`)


export class Logo extends Component {}