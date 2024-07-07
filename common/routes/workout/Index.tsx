import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { createSession, getWorkouts } from 'backend/api/training/training.crud.ts'
import { IWorkout } from 'backend/api/training/training.interface.ts'

type Props = {}

const workouts = await getWorkouts()

const handleCreateSession = async (workout: IWorkout) => {
  const sessionId = await createSession(workout)

  window.location.href = `/workouts/${sessionId}`
}

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
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
      </div>
      <a href="/createWorkout">
        <button style="padding: 5px 10px;"> + </button>
      </a>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  .card:hover {
    background-color: #f0f0f0;
  }
`)
export class WorkoutsPage extends Component<Props> {}
