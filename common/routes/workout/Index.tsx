import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { createSession, getWorkouts, createWorkout } from 'backend/api/training/training.crud.ts'
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

const CategorySection = ({ category }: { category: string }) => {
  const filteredWorkouts = workouts.filter((workout) => workout.category === category)

  return (
    <details>
      <summary>{category}</summary>
      {filteredWorkouts.map((workout: any) => (
        <Card class="card" onclick={() => handleCreateSession(workout)}>
          <h4 style="margin-bottom: 20px">{workout.name}</h4>
          {workout.exercises.map((exercise: any) => (
            <div style="margin-top: 20px;">
              <p>
                {exercise.name} - <b>{exercise.muscleGroup}</b>
              </p>
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
  .button {
    margin-bottom: 100px;
  }
`)
export class WorkoutsPage extends Component<Props> {}
