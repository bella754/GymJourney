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
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 20%">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
          <h2>Select exercises</h2>
          <input type="text" placeholder="Suche" style="margin-bottom: 20px; padding: 10px; width: 100%;" value={search} />
          {always(() => 
            Object.entries(groupedExercises())
              .filter(([muscleGroup, exercises]) => 
                exercises.some((exercise) => 
                  exercise.name.toString().toLowerCase().includes(search.toString().toLowerCase())
                )
              )
              .map(([muscleGroup, exercises]) => (
                <details>
                  <summary>{muscleGroup}</summary>
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
          <Button onclick={() => window.history.back()}>Back</Button>
          <Button onclick={saveExercises}>Save</Button>
        </div>
      </div>
      <BottomBar />
    </div>
  )
})
@style(css`
  input[type='checkbox'] {
    margin-right: 10px;
  }
  label {
    font-size: 16px;
  }
`)
export class SelectExercisePage extends Component<Props> {}

