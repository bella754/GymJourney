import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { getWorkoutById, updateWorkout } from 'backend/api/training/training.crud.ts'
import { Card } from '../../components/card/HistoryCard.tsx'

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const selectedWorkout = await getWorkoutById(id)

  const name = $$('')
  const category = $$('')

  const saveWorkout = async () => {
    await updateWorkout(id, name, category)
    window.location.href = '/workouts'
  }

  const navigateToSelectExercisesPage = () => {
    window.location.href = `/selectExercise/${id}`
  }

  if (!selectedWorkout) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <AppBar />
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
          <h2>Workout erstellen</h2>
          <p>Workout id: {selectedWorkout.id}</p>
          <input type="text" placeholder="Name" style="margin-bottom: 20px; padding: 10px; width: 100%;" value={name} />
          <select style="margin-bottom: 20px; padding: 10px; width: 100%;" value={category}>
            <option value="" disabled>
              Kategorie auswählen
            </option>
            <option value="PPL">PPL</option>
            <option value="Bro Split">Bro Split</option>
            <option value="Upper/Lower">Upper/Lower</option>
            <option value="Full Body">Full Body</option>
          </select>
        </div>
      </div>
      {selectedWorkout.exercises.map((exercise: any, index) => (
        <div class={'tablecontainer'}>
          <Card>
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
          </Card>
        </div>
      ))}
      <Button onclick={navigateToSelectExercisesPage}> + </Button>
      <Button onclick={() => window.history.back()}>Zurück</Button>
      <Button onclick={saveWorkout}>Speichern</Button>
      <BottomBar />
    </div>
  )
})
@style(css`
  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
`)
export class CreateWorkoutPage extends Component<Props> {}
