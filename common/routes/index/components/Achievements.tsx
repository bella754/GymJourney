import { Component } from 'uix/components/Component.ts'
import { Card } from 'common/components/card/HistoryCard.tsx'
import { achievements } from 'backend/api/achievements/achievements.data.ts'
import { hasFirstWorkout, hasProfileCreated } from 'backend/api/achievements/achievements.crud.ts'

type Props = {}

@template<Props>(async () => {
  const profileCreated = await hasProfileCreated()
  const firstWorkout = await hasFirstWorkout()

  return (
    <div class="achievements">
      {achievements.map((achievement) => (
        <Card class={profileCreated && achievement.id === 'profileCreated' ? 'card' : firstWorkout && achievement.id === 'firstWorkout' ? 'card' : 'hidden'}>
          <div class="card-content">
            <img src={achievement.image} alt={achievement.title} width="80" height="80" />
            <div class="card-text">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        </Card>
      ))}
      {!profileCreated && !firstWorkout && <small>You have no achievements yet</small>}
    </div>
  )
})
@style(css`
  .achievements {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 0;
  }
  h3 {
    margin-bottom: 4px;
  }
  .card {
    max-width: 300px;
    width: 100%;
  }
  .card-content {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .card-text {
    display: flex;
    flex-direction: column;
  }
  .hidden {
    display: none;
  }
  .small {
    font-size: 12px;
    color: #666;
  }
`)
export class Achievements extends Component<Props> {}
