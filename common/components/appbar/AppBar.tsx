import { Component } from 'uix/components/Component.ts'
import { Logo } from './Logo.tsx'
import { Streak } from './Streak.tsx'
import { AuthIcon } from 'auth/AuthIcon.tsx'

type Props = {}

@template<Props>(() => (
  <div class="app-bar">
    <div class="container">
      <Logo />
      <div class="icons">
        <Streak />
        <AuthIcon />
      </div>
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

  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`)
export class AppBar extends Component<Props> {}
