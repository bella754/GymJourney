import { Component } from "uix/components/Component.ts";

type Props = {};

@template<Props>(() => (
  <shadow-root>
    <div class="card">
      <slot />
    </div>
  </shadow-root>
))
@style(css`
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 90%;
    min-width: 300px;
  }
`)
export class CardHistory extends Component<Props> {}
