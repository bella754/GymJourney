import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div class="image">
	<img src={("common/res/Logo.jpg")}/>
	</div>
))

@style(css`
img{
	width:210px;
	height:210px;
	border-radius: 50%;
	border: 4px solid black;
	background: transparent;
}

`)


export class Logo extends Component <Props>{}