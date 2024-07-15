import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { getExercises, getWorkoutById, addExercisesToWorkout } from 'backend/api/training/training.crud.ts'

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const allExercises = await getExercises()
  const selectedExercises = $$([])

  const search = $$('')

  const handleCheckboxChange = (exercise, isChecked) => {
    if (isChecked) {
      selectedExercises.push(exercise)
    } else {
      const index = selectedExercises.findIndex((e) => e.name === exercise.name)
      if (index > -1) {
        selectedExercises.splice(index, 1)
      }
    }
  }

  const saveExercises = async () => {
    await addExercisesToWorkout(id, selectedExercises)
    window.location.href = `/createWorkout/${id}`
  }
  
  const groupedExercises = () => {
    return allExercises.reduce((groups, exercise) => {
      const muscleGroup = exercise.muscleGroup
      if (!groups[muscleGroup]) {
        groups[muscleGroup] = []
      }
      groups[muscleGroup].push(exercise)
      return groups
    }, {})
  }

  return (
    <div>
      <AppBar />
      <div class={"screen"}>
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 20%">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
          <h2 style="font-size: 25px; margin-top: 10px; margin-bottom: 10px;">Select exercises</h2>
          <input class="search" type="text" style="border: 2px solid #0891b2;" placeholder="Search" value={search} />
          {always(() =>
            Object.entries(groupedExercises())
              .filter(([muscleGroup, exercises]) => 
                exercises.some((exercise) => 
                  exercise.name.toString().toLowerCase().includes(search.toString().toLowerCase())
                )
              )
              .map(([muscleGroup, exercises]) => (
                <details>
                  <summary class={"group"}>{muscleGroup}</summary>
                  {exercises
                    .filter((exercise) => exercise.name.toString().toLowerCase().includes(search.toString().toLowerCase()))
                    .map((exercise) => (
                      <div style="margin-bottom: 20px;">
                        <input type="checkbox" id={exercise.name} value={exercise.name} onchange={(e) => handleCheckboxChange(exercise, e.target.checked)} />
                        <label for={exercise.name}>{exercise.name}</label>
                      </div>
                    ))
                  }
                </details>
              ))
          )}
          <div class={"bottombut"}>
          <Button style="margin-right: 180px;" onclick={() => window.history.back()}>Back</Button>
          <Button onclick={saveExercises}>Save</Button>
          </div>
        </div>
      </div>
      </div>
      <BottomBar />
    </div>
  )
})
@style(css`
  .screen{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  .group{
    border: 1px solid #0891b2;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    min-width: 300px;
    margin-bottom: 10px;
  }
  .search{
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    }
  input[type='checkbox'] {
    margin-right: 10px;
  }
  label {
    font-size: 16px;
  }
  bottombut{
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%px;
    bottom-margin: 100px;
  }
`)
export class SelectExercisePage extends Component<Props> {}

