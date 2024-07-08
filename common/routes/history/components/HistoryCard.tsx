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
    border: 1px solid #0891b2;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    min-width: 300px;
  }
    `)
export class Card extends Component<Props> {}
