import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { getWorkoutById, updateSet, updateWorkout, deleteExerciseFromWorkout } from 'backend/api/training/training.crud.ts'
import { workouts } from 'backend/api/training/training.data.ts'
import { Card } from '../../components/card/HistoryCard.tsx'
import { IWorkout } from 'backend/api/training/training.interface.ts'

type Props = {
  id: string
  ctx: any
}

@template<Props>(async ({ ctx, id }) => {
  const selectedWorkout = await getWorkoutById(id)

  const categories = Array.from(new Set(workouts.$.map((workout: IWorkout) => workout.category)))

  const name = $$(ctx?.searchParams?.get('name') || '')
  const category = $$(ctx?.searchParams?.get('category') || '')

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

  const handleDeleteExercise = async (workoutId: string, exerciseName: string) => {
    try {
      await deleteExerciseFromWorkout(workoutId, exerciseName)
      window.location.reload() // Seite neu laden, um die Änderungen anzuzeigen
    } catch (error) {
      console.error(error)
      alert('Fehler beim Löschen der Übung')
    }
  }

  return (
    <div>
      <AppBar />
      <div class={'bodycontainer'}>
        <div>
          <div class={'topcontainer'}>
            <h2>Create Workout</h2>
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
                <div class="exercise-header">
                  <h3>
                    {index + 1}. {exercise.name}
                  </h3>
                  <button class="delete-button" onclick={() => handleDeleteExercise(id, exercise.name)}>🗑️</button>
                </div>
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
              </Card>
            </div>
          ))}
          <div class={'container'}>
          <Button onclick={() => window.location.href = '/workouts'}>Back</Button>
          <Button onclick={navigateToSelectExercisesPage}>Add Exercise</Button>
          <Button onclick={saveWorkout}>Save</Button>
          </div>
          <p class={'workoutid'}>Workout id: {selectedWorkout?.id}</p>
        </div>
      </div>
      <BottomBar />
    </div>
  )
})
@style(css`
  .category {
    border: 2px solid grey;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    margin: 10px 0px 10px;
  }
  .namefield {
    border: 2px solid grey;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0px 10px;
    max-width: 380px;
  }
  .workoutcard {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .container {
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 400px;
  }
  .topcontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .tablecontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .bodycontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 600px;
  }

  .workoutid {
    font-size: 10px;
    margin-bottom: 100px;
  }
  input,
  select {
    width: 100%;
    padding: 10px;
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

  input {
    border: 1px solid black;
    border-radius: 8px;
  }

  .bbar {
    width: 100vh;
  }

  .delete-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: red;
    position: relative;
    top: -10px;
    right: -10px;
  }
  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`)
export class CreateWorkoutPage extends Component<Props> {}