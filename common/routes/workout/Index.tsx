import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { createSession, getWorkouts, createWorkout, deleteWorkout } from 'backend/api/training/training.crud.ts'
import { IWorkout } from 'backend/api/training/training.interface.ts'
import { Trash }  from 'common/components/unused/Trash.tsx'
import { Editpen } from 'common/components/unused/Editpen.tsx'
import { Buttonextended } from "common/components/unused/Buttonextended.tsx";

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
    <details style="gap: 10px;">
      <summary class={"cat"}>{category}</summary>
      {filteredWorkouts.map((workout: any) => (
        <Card class="card" onclick={() => handleCreateSession(workout)}>
          <div class="card-header">
          <h4 style="flex-grow: 1;">{workout.name}</h4>
            <div class="card-buttons">
              <Editpen class="edit-button" onclick={(e) => { e.stopPropagation(); handleEditWorkout(workout.id, workout.name, category) }}></Editpen>
              <Trash class="delete-button" onclick={(e) => { e.stopPropagation(); handleDeleteWorkout(workout.id) }}></Trash>
            </div>
          </div>
          {workout.exercises.map((exercise: any) => (
            <div style="margin-top: 20px;">
              <p>{exercise.name} - <b>{exercise.muscleGroup}</b></p>
            </div>
          ))}
        </Card>
      ))}
      <Buttonextended class="catbutton" onclick={() => handleCreateWorkout(category)}> New Workout </Buttonextended>
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
    gap: 15px;
    margin-top: 15px;
  }
  .cat{
    border: 1px solid #0891b2;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    min-width: 300px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 25px;
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
  .button{
    margin-bottom: 100px;
  }
  .edit-button, .delete-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: grab;
  }

`)
export class WorkoutsPage extends Component<Props> {}