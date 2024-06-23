import { Component } from "uix/components/Component.ts";

type Props = {
  children: any;
};

@template<Props>(({ children }) => <div class="container">{children}</div>)
@style(css`
  .container {
    width: 900px;
    background-color: red;
  }
`)
export class Layout extends Component<Props> {}
