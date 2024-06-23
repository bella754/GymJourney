import { Component } from "uix/components/Component.ts";

@template(() => (
  <div class="container">
    <img src="/@uix/src/common/public/Logowithtitle.jpg" />
    <p>GymJourney</p>
  </div>
))
@style(css`
  .container {
    display: flex;
    gap: 10px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`)
export class Logo extends Component {}
