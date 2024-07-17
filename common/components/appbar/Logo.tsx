import { Component } from 'uix/components/Component.ts'

@template(() => (
  <a href="/">
    <div class="logo-container">
      <img src="/@uix/src/common/public/Logowithtitle.jpg" />
    </div>
  </a>
))
@style(css`
  .logo-container {
    display: flex;
    gap: 10px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`)
export class Logo extends Component {}
