import { Component } from 'uix/components/Component.ts'

type Props = {}

@template<Props>((props) => (
  <div>
    <button>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.74175 23.4776V19.644C8.74173 18.6726 9.57325 17.8834 10.6032 17.8772H14.385C15.4196 17.8772 16.2582 18.6683 16.2582 19.644V23.4665C16.2582 24.3091 16.979 24.9938 17.8723 25H20.4524C21.6574 25.0029 22.8141 24.5535 23.6673 23.7508C24.5205 22.9482 25 21.8584 25 20.7219V9.83229C25 8.91422 24.5685 8.04338 23.8219 7.45436L15.0566 0.842834C13.5244 -0.313596 11.336 -0.276239 9.8492 0.931729L1.27238 7.45436C0.490448 8.02601 0.0230951 8.89944 0 9.83229V20.7108C0 23.0796 2.03603 25 4.5476 25H7.0688C7.49891 25.0029 7.91248 24.8438 8.21773 24.558C8.52297 24.2722 8.69464 23.8833 8.69463 23.4776H8.74175Z"
          fill="white"
        />
      </svg>
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
    width: 35px;
    height: 35px;
    stroke: black;
  }
`)
export class Homebutton extends Component<Props> {}
