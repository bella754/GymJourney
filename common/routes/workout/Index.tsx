import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx';
import { Card } from '../../components/card/HistoryCard.tsx'
import { createSession, getWorkouts, createWorkout } from 'backend/api/training/training.crud.ts'
import { IWorkout } from 'backend/api/training/training.interface.ts'

type Props = {}

const workouts = await getWorkouts()

const handleCreateSession = async (workout: IWorkout) => {
  const sessionId = await createSession(workout)

  window.location.href = `/workouts/${sessionId}`
}

const handleCreateWorkout = async () => {
  const workoutId = await createWorkout()

  window.location.href = `/createWorkout/${workoutId}`
}

@template<Props>(() => (
  <div>
    <AppBar />
    <div class="container">
      <div class="content">
        <h2>Workouts</h2>
        {workouts.map((workout: any) => (
          <Card class="card" onclick={() => handleCreateSession(workout)}>
            <h3 style="margin-bottom: 20px">
              {workout.name} – {workout.category}
            </h3>
            {workout.exercises.map((exercise: any) => (
              <div style="margin-top: 20px;">
                <p>
                  {exercise.name} - <b>{exercise.muscleGroup}</b>
                </p>
              </div>
            ))}
          </Card>
        ))}
        <Button class="button" onclick={() => handleCreateWorkout()}> New Workout </Button>
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 600px;
    width: 100%;
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
