import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { CardHistory } from '../../components/card/CardHistory.tsx'
import { Backarrow } from './components/Backarrow.tsx'
import { getTrainingById, createSession } from 'backend/api/training/training.crud.ts'
import { IExercise, ITrainingSession } from 'backend/api/training/training.interface.ts'
import { Trophy } from './components/Trophy.tsx'
import { Weight } from './components/Weight.tsx'
import { Button } from 'common/components/Button.tsx'

type Props = {
  id: string
}

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

const handleCreateSession = async (workout: ITrainingSession) => {
  const sessionId = await createSession(workout.training)
  window.location.href = `/workouts/${sessionId}`
}

@template<Props>(async (_, { id }) => {
  const training = await getTrainingById(id)
  const totalWeight = formatWeight(calculateTotalWeight(training?.training.exercises))
  return (
    <div>
      <AppBar />
      <div class={"page"}>
        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 100px;">
          <div class="headercontainer">
            <Backarrow class={"back"}/>
            <div class={'namedate-container'}>
              <h2 style={"margin-bottom: 8px; font-size: 20px;"}>{training?.training.name}</h2>
              {/* @ts-ignore */}
              <p>{new Date(training?.start).toLocaleDateString()}</p>
            </div>
            <div class="weight-container">
              <p class="weight-number">{totalWeight}</p>
              <Weight />
            </div>
          </div>
          <Button class="repeat-button" onclick={() => handleCreateSession(training)}>Repeat Workout</Button>
          {training?.training.$.exercises.$.map((exercise, index) => (
            <div class={'tablecontainer'}>
              <CardHistory class={"cardd"}>
                <div>
                  <h3>
                    {index + 1}. {exercise.name}
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Set</th>
                        <th>Reps</th>
                        <th> </th>
                        <th>Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <tr>
                          <td>{setIndex + 1}</td>
                          <td>{set.repetitions}</td>
                          <td class={'color'}>x</td>
                          <td>{set.weight} kg</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardHistory>
            </div>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  )
})
@style(css`
  .page{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
  .back:hover{
   border: 1px solid #0891b2;
   border-radius: 90px;
   cursor: pointer;
  }
  .tablecontainer {
    margin-bottom: 15px;
  }
  .headercontainer {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .namedate-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
  .weight-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  tr.firstrow td,
  tr.firstrow th {
    border-bottom: 2px solid lightgrey;
  }

  table {
    width: 290px;
    margin: auto;
  }

  .color {
    color: #0891b2;
  }

  td {
    text-align: center;
  }

  th,
  td {
    padding: 8px;
    text-align: center;
  }

  h3 {
    text-align: left;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .repeat-button {
    background: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 15px;
  }
`)
export class HistoryDetailPage extends Component<Props> {}