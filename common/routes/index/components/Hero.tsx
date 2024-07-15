import { Component } from 'uix/components/Component.ts'
import { avatars } from 'backend/api/user/user.data.ts'

type Props = {
  userName: string
  character: any
}

@template<Props>(({ userName, character }) => (
  <div class="container">
    <div class="hero">
      <h1>{userName}</h1>
      <img
        src={
          Object.values(avatars)
            .flatMap((gender) => Object.values(gender).flat())
            .find((avatar) => avatar.name === character)?.url
        }
        style={{
          width: '180px',
          height: '220px',
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
