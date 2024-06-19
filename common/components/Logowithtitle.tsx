import { Component } from "uix/components/Component.ts";

@template((props) => (
	<div class="image">
	<img src="/@uix/src/common/res/Logowithtitle.jpg" />
	</div>
))

@style(css`
img{
	width:50px;
	height:50px;
}

`)


export class Logowithtitle extends Component {}