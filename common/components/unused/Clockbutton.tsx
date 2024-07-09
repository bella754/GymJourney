import { Component } from 'uix/components/Component.ts'

type Props = {}

@template<Props>((props) => (
  <div>
    <button>
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-4.581 3.324a1 1 0 0 0-.525-1.313L13 12.341V6.5a1 1 0 0 0-2 0v6.17c0 .6.357 1.143.909 1.379l4.197 1.8a1 1 0 0 0 1.313-.525z" fill="white"/></svg>

    </button>
  </div>
))
@style(css`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 30px;
    height: 30px;
    stroke: white;
  }
`)
export class Clockbutton extends Component<Props> {}
