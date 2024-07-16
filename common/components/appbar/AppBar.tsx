import { Component } from 'uix/components/Component.ts'
import { Logo } from './Logo.tsx'
import { AuthIcon } from 'auth/AuthIcon.tsx'

type Props = {}

@template<Props>(() => (
  <div class="app-bar">
    <div class="container">
      <Logo />
      <AuthIcon />
    </div>
  </div>
))
@style(css`
  .app-bar {
    padding: 20px 25px;
    border-bottom: 1px solid #ccc;
  }
  .container {
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
  }
`)
export class AppBar extends Component<Props> {}
