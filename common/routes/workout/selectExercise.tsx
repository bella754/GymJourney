import { frontendRouter } from 'uix/routing/frontend-routing-new.ts'
import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Button } from 'common/components/Button.tsx'
import { getExercises, getWorkoutById, addExercisesToWorkout } from 'backend/api/training/training.crud.ts'
import { IExercise } from 'backend/api/training/training.interface.ts'

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const exercises = await getExercises()
  const workout = await getWorkoutById(id)
  const categories = [...new Set(exercises.map((exercise) => exercise.muscleGroup))]

  const selectedExercises = $$<IExercise[]>(workout?.exercises || [])
  const popoverContent = $$('')

  const search = $$('')

  const toggleExercise = (exercise: IExercise) => {
    const index = selectedExercises.findIndex((item: IExercise) => item.name === exercise.name)
    if (index > -1) {
      selectedExercises.splice(index, 1)
    } else {
      selectedExercises.push(exercise)
    }
  }

  const isExerciseSelected = (exercise: IExercise) => {
    return selectedExercises.some((item: IExercise) => item.name === exercise.name)
  }

  const handleSave = async () => {
    await addExercisesToWorkout(id, selectedExercises)
    frontendRouter.navigateTo(`/createWorkout/${id}`)
  }

  return (
    <div>
      <AppBar />
      <div class={'screen'}>
        <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 100px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
            <h2 style="font-size: 25px; margin-top: 10px; margin-bottom: 10px;">Select exercises</h2>
            <input
              class="search"
              type="text"
              style="border: 2px solid #0891b2;"
              placeholder="Search"
              value={search}
              oninput={(e: any) => (search.val = e.target.value)}
            />
            {categories.map((category) => (
              <details style={always(() => (search.val ? 'display: none' : ''))}>
                <summary class={'group'}>{category}</summary>
                <div class="exercise-container">
                  {exercises
                    .filter((exercise) => exercise.muscleGroup === category)
                    .map((exercise) => (
                      <div class="exercise-card">
                        <img
                          src={exercise.imageUrl}
                          alt={exercise.name}
                          class={always(() => (isExerciseSelected(exercise) ? 'exercise-image selected' : 'exercise-image'))}
                          onclick={() => toggleExercise(exercise)}
                        />
                        <div class="exercise-info">
                          <label for={exercise.name}>{exercise.name}</label>
                          {exercise.videoUrl && (
                            <Button style="padding: 0 3px 0 3px" onclick={() => (popoverContent.val = exercise.videoUrl)}>
                              Video
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </details>
            ))}
            {always(() =>
              exercises.map((exercise) => (
                <div
                  class="exercise-card"
                  style={always(() => (search.val && exercise.name.toLowerCase().includes(search.val.toLowerCase()) ? '' : 'display: none'))}
                >
                  <img
                    src={exercise.imageUrl}
                    alt={exercise.name}
                    class={always(() => (isExerciseSelected(exercise) ? 'exercise-image selected' : 'exercise-image'))}
                    onclick={() => toggleExercise(exercise)}
                  />
                  <div class="exercise-info">
                    <label for={exercise.name}>{exercise.name}</label>
                    {exercise.videoUrl && (
                      <Button style="padding: 0 3px 0 3px" onclick={() => (popoverContent.val = exercise.videoUrl)}>
                        Video
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
            <div class={'bottombut'}>
              <Button style="margin-right: 180px;" onclick={() => window.history.back()}>
                Back
              </Button>
              <Button onclick={handleSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
      {always(() =>
        popoverContent.val ? (
          <div class="popoverVideo">
            <div class="popover-content-video">
              <iframe src={popoverContent} title="Exercise Video"></iframe>
              <Button style="position: absolute; z-index: 1; bottom: 0; padding-bottom: 8px;" onclick={() => (popoverContent.val = '')}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>{popoverContent.val}</>
        )
      )}
    </div>
  )
})
@style(css`
  .screen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  .group {
    border: 1px solid #0891b2;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    min-width: 300px;
    margin-bottom: 10px;
  }
  .search {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
  }
  .bottombut {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    bottom-margin: 100px;
  }
  .exercise-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .exercise-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .exercise-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-top: 10px;
    cursor: pointer;
  }
  .exercise-info {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
  }

  .exercise-image.selected {
    border: 3px solid #0891b2; /* Dickere Umrandung für ausgewählte Übung */
  }
  .popoverVideo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }
  .popover-content-video {
    position: relative;
    width: 80%;
    padding-top: 45%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .popover-content-video iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`)
export class SelectExercisePage extends Component<Props> {}
