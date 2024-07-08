import { Component } from "uix/components/Component.ts";
import { Logo } from "./Logo.tsx";
import { Streak } from "./Streak.tsx";
import { AuthIcon } from "auth/AuthIcon.tsx";

type Props = {};

@template<Props>(() => (
  <div class="container">
    <Logo />
    <div class="icons">
      <Streak /> 
      <AuthIcon/>    
    </div>
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

  .icons {
    display: flex;
    gap: 20px;
  }
`)
export class AppBar extends Component<Props> {}
