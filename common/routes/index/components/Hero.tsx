import { Component } from 'uix/components/Component.ts'

type Props = {
  userName: string
}

@template<Props>(({ userName }) => (
  <div class="container">
    <div class="hero">
      <h1>{userName}</h1>
      <img
        src="/@uix/src/common/public/Character.png"
        style={{
          width: '180px',
          height: '216px',
        }}
      />
    </div>
  </div>
))
@style(css`
  h1 {
    font-weight: 800;
    font-family: 'Verdana', sans-serif;
    font-size: 40px;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero {
    max-width: 600px;
    padding: 20px 10px 0px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: -10;
  }
`)
export class Hero extends Component<Props> {}
