import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { createSession, getWorkouts, createWorkout, deleteWorkout } from 'backend/api/training/training.crud.ts'
import { IWorkout } from 'backend/api/training/training.interface.ts'

type Props = {}

const workouts = await getWorkouts()
const categories = Array.from(new Set(workouts.$.map((workout: IWorkout) => workout.category)))

const handleCreateSession = async (workout: IWorkout) => {
  const sessionId = await createSession(workout)
  window.location.href = `/workouts/${sessionId}`
}

const handleCreateWorkout = async (category?: string) => {
  const workoutId = await createWorkout()
  window.location.href = `/createWorkout/${workoutId}${category ? `?category=${category}` : ''}`
}

const handleDeleteWorkout = async (workoutId: string) => {
  try {
    await deleteWorkout(workoutId)
    window.location.reload() // Seite neu laden, um die Änderungen anzuzeigen
  } catch (error) {
    console.error(error)
    alert('Fehler beim Löschen des Workouts')
  }
}

const handleEditWorkout = async (workoutId: string, name?: string, category?: string) => {
  const params = new URLSearchParams()
  if (name) params.append('name', name)
  if (category) params.append('category', category)
  window.location.href = `/createWorkout/${workoutId}?${params.toString()}`
}

const CategorySection = ({ category }: { category: string }) => {
  const filteredWorkouts = workouts.filter((workout) => workout.category === category)

  return (
    <details>
      <summary>{category}</summary>
      {filteredWorkouts.map((workout: any) => (
        <Card class="card" onclick={() => handleCreateSession(workout)}>
          <div class="card-header">
            <h4 style="margin-bottom: 20px; flex-grow: 1;">{workout.name}</h4>
            <div class="card-buttons">
              <button class="edit-button" onclick={(e) => { e.stopPropagation(); handleEditWorkout(workout.id, workout.name, category) }}>✏️</button>
              <button class="delete-button" onclick={(e) => { e.stopPropagation(); handleDeleteWorkout(workout.id) }}>🗑️</button>
            </div>
          </div>
          {workout.exercises.map((exercise: any) => (
            <div style="margin-top: 20px;">
              <p>{exercise.name} - <b>{exercise.muscleGroup}</b></p>
            </div>
          ))}
        </Card>
      ))}
      <Button class="button" onclick={() => handleCreateWorkout(category)}>
        New Workout
      </Button>
    </details>
  )
}

@template<Props>(() => (
  <div>
    <AppBar />
    <div class="workout">
      <h2>Workouts</h2>
      {categories.map((category: any) => (
        <CategorySection category={category} />
      ))}
      <Button class="button" onclick={() => handleCreateWorkout()}>
        Create a new workout
      </Button>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  .workout {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    font-size: 20px;
  }
  .card:hover {
    cursor: pointer;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-buttons {
    display: flex;
    gap: 10px;
  }
  .edit-button, .delete-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  .edit-button {
    color: blue;
  }
  .delete-button {
    color: red;
  }
  .button {
    margin-bottom: 100px;
  }
`)
export class WorkoutsPage extends Component<Props> {}