import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { Weight } from './components/Weight.tsx'
import { getTrainings } from 'backend/api/training/training.crud.ts'
import { IExercise } from 'backend/api/training/training.interface.ts'

type Props = {}

const calculateTotalWeight = (exercises: IExercise[] | undefined) => {
  if (!exercises) {
    return 0
  }

  return exercises.reduce((total, exercise) => {
    return total + exercise.sets.reduce((total, set) => total + set.repetitions * set.weight, 0)
  }, 0)
}

const formatWeight = (weight: number) => {
  if (weight >= 1000) {
    return (weight / 1000).toFixed(1) + ' t'
  }
  return weight + ' kg'
}

const userTrainings = await getTrainings()

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 20%">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>My Workout History</h2>
        {userTrainings.length === 0 && <p>You have not completed any workouts yet.</p>}
        {userTrainings.$.map((session: any) => {
          // Berechnung des Gesamtgewichts für die aktuelle Trainingssession
          const totalWeight = formatWeight(calculateTotalWeight(session.training.exercises))

          return (
            <div class={session.end ? 'wholecard' : 'wholecard active'}>
              <Card>
                <a href={`/history/${session.id}`}>
                  <div>
                    <div class={'topcard'}>
                      <h3>{session.training.name}</h3>
                    </div>
                    <p class={'duration'}>{session.duration}</p>
                    <div class={'bottomcard'}>
                      <p class={'date'}>{session.start.toLocaleDateString()}</p>
                      <div class="weight-container">
                        <p class="weight-number">{totalWeight}</p>
                        <Weight />
                      </div>
                    </div>
                  </div>
                </a>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  h2 {
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    margin-right: 10px;
  }
  .wholecard {
    margin-bottom: 20px;
  }

  .topcard {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .duration {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .date {
    font-size: 15px;
  }
  .difficulty {
    font-size: 15px;
  }
  .bottomcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .weight-number {
    font-size: 14px;
    margin-right: 5px;
  }
  .weight-container {
    display: flex;
    align-items: center;
  }
`)
export class HistoryPage extends Component<Props> {}
