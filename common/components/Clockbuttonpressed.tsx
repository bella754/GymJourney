import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
    <div>
         <button>
		 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>



    </button>
    </div>
))

@style(css`
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: 2px solid #0891B2;
        border-radius: 8px;
        background-color: white;
    }
`)

export class Clockbuttonpressed extends Component<Props> {}