import { Component } from "uix/components/Component.ts";

type Props = {};

@template<Props>(() => (
  <shadow-root>
    <button>
      <slot />
    </button>
  </shadow-root>
))
@style(css`
  button {
    border-radius: 4px;
    padding: 10px 20px;
    border: unset;
    color: white;
    background-color: #0891b2;
  }

  button:hover {
    background-color: #0891a5;
  }

  button:active {
    background-color: #0891b2;
    box-shadow: 0 3px lightgrey;
    transform: translateY(4px);
  }
`)
export class Button extends Component<Props> {}

// secondary button
/* import { Component } from "uix/components/Component.ts";

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


export class Buttonsecondary extends Component <Props>{} */

// link button
/* import { Component } from "uix/components/Component.ts";

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


export class Buttontransparent extends Component <Props>{} */
