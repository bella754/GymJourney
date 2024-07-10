import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { getWorkoutById, updateSet, updateWorkout } from 'backend/api/training/training.crud.ts'
import { exercises, workouts } from 'backend/api/training/training.data.ts'
import { Card } from '../../components/card/HistoryCard.tsx'
import { IWorkout } from "backend/api/training/training.interface.ts";

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const selectedWorkout = await getWorkoutById(id)

  const categories = Array.from(new Set(workouts.$.map((workout: IWorkout) => workout.category)));

  const name = $$('')
  const category = $$('')

  const saveWorkout = async () => {
    await updateWorkout(id, name, category)
    window.location.href = '/workouts'
  }

  const navigateToSelectExercisesPage = () => {
    window.location.href = `/selectExercise/${id}`
  }

  const handleSetChange = async (sessionId: string, exerciseName: string, setIndex: number, field: 'repetitions' | 'weight', value: number) => {
    await updateSet(sessionId, exerciseName, setIndex, field, value)
  }

  return (
    <div>
      <AppBar />
      <div class={"bodycontainer"}>
        <div>
          <div class={"topcontainer"}>
            <h2>Workout erstellen</h2>
            <input type="text" placeholder="Name" style="margin-bottom: 20px; padding: 10px; width: 100%;" value={name} />
            <input type="text" list="categories" value={category} placeholder="Category" required />
            <datalist id="categories">
            {categories.map((category: any) => (
              <option>{category}</option>
            ))}
            </datalist>
          </div>
          {selectedWorkout?.exercises.map((exercise: any, index) => (
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
                          <input
                            type="number"
                            value={set.repetitions}
                            /* @ts-ignore */
                            onchange={(e) => handleSetChange(id, exercise.name, setIndex, 'repetitions', e.target.value)}
                          />
                          <td class={'color'}>x</td>
                          <div style="display: flex; align-items: center;">
                            <input
                              type="number"
                              value={set.weight}
                              /* @ts-ignore */
                              onchange={(e) => handleSetChange(id, exercise.name, setIndex, 'weight', e.target.value)}
                            />
                            <span>kg</span>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          ))}
        <div class={"container"}>
          <Button onclick={() => window.history.back()}>Zurück</Button>
          <Button onclick={navigateToSelectExercisesPage}>Add Exercise</Button>
          <Button onclick={saveWorkout}>Speichern</Button>
        </div>
      <p class={"workoutid"}>Workout id: {selectedWorkout?.id}</p>
      </div>
    </div>
    <BottomBar/>
    </div>
  )
})
@style(css`
  h2{
  font-size: 20px;
  margin-bottom: 10px;
  }
  .topcontainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .tablecontainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .bodycontainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 600px;
  }

  .workoutid{
  font-size: 10px;
  }
  input,select {
    width: 100%;
    padding: 10px;
  }

  tr.firstrow td, tr.firstrow th {
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

  th, td {
    padding: 8px;
    text-align: center;
  }

  input {
    border: 1px solid black;
    border-radius: 8px;
  }
`)
export class CreateWorkoutPage extends Component<Props> {}
