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
