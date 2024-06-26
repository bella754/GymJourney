import { Component } from "uix/components/Component.ts";

type Props = {
  max: number;
  value: number;
};

/* https://verpex.com/blog/website-tips/how-to-style-a-progress-bar-using-css */

@template<Props>(({ max, value }) => (
  <div>
    <progress max={max} value={value}></progress>
  </div>
))
@style(css`
  progress[value] {
    --color: blue;
    --background: lightgrey;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 200px;
    margin: 0 10px;
    border-radius: 10em;
    background: var(--background);
  }
  progress[value]::-webkit-progress-bar {
    border-radius: 10em;
    background: var(--background);
  }
  progress[value]::-webkit-progress-value {
    border-radius: 10em;
    background: var(--color);
  }
  progress[value]::-moz-progress-bar {
    border-radius: 10em;
    background: var(--color);
  }
`)
export class LvlProgressbar extends Component<Props> {}
