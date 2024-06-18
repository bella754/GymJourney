import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
    <div>
	<button class="Settingsnav">
	<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.99972 12L3.2688 3.12451C9.88393 5.04617 16.0276 8.07601 21.4855 11.9997C16.0276 15.9235 9.884 18.9535 3.26889 20.8752L5.99972 12ZM5.99972 12L13.5 12" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
	</button>
    </div>
))

@style(css`

    button {
		border: 2px solid black;
        cursor: pointer;
		border-radius: 8px;
        background-color: white;
        width: 49px;
        height: 49px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`)

export class Workoutnavigation extends Component<Props> {}
