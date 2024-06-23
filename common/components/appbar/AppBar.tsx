import { Component } from "uix/components/Component.ts";
import { Logo } from "./Logo.tsx";
import { Streak } from "./Streak.tsx";

type Props = {};

@template<Props>(() => (
  <div class="container">
    <Logo />
    <Streak />
  </div>
))
@style(css`
  .container {
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
  }
`)
export class AppBar extends Component<Props> {}
