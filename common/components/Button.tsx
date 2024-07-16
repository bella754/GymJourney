import { Component } from 'uix/components/Component.ts'

type Props = {
  variant?: 'big'
}

@template<Props>(({ variant }) => (
  <shadow-root>
    <button style={variant === 'big' ? { width: '100%', padding: '15px' } : {}}>
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
    background-color: #06748d;
    cursor: pointer;
  }

  button:active {
    background-color: #045c70;
    box-shadow: 0 3px lightgrey;
  }
`)
export class Button extends Component<Props> {}
