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
  const openGroups = $$(new Set())
  const popoverContent = $$<string | null>(null)

  const search = $$('')

  const handleImageClick = (exercise) => {
    const index = selectedExercises.findIndex((e) => e.name === exercise.name)
    if (index > -1) {
      selectedExercises.splice(index, 1)
    } else {
      selectedExercises.push(exercise)
    }
  }

  const isSelected = (exercise) => {
    return selectedExercises.some((e) => e.name === exercise.name)
  }

  const toggleGroup = (muscleGroup) => {
    if (openGroups.has(muscleGroup)) {
      openGroups.delete(muscleGroup)
    } else {
      openGroups.add(muscleGroup)
    }
  }

  const isOpen = (muscleGroup) => {
    return openGroups.has(muscleGroup)
  }

  const saveExercises = async () => {
    await addExercisesToWorkout(id, selectedExercises)
    window.history.back()
  }

  const showPopoverVideo = (content: string) => {
    popoverContent.val = content

    let element = document.getElementById("popoverVideo")
    element.style.visibility = "visible"
  }

  const closePopover = () => {
    popoverContent.val = null

    let videoPopover = document.getElementById("popoverVideo")
    videoPopover.style.visibility = "hidden"
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
            <input class="search" type="text" style="border: 2px solid #0891b2;" placeholder="Search" value={search} /* @ts-ignore */ oninput={(e) => search(e.target.value)} />
            {always(() =>
              Object.entries(groupedExercises())
                .filter(([muscleGroup, exercises]) => 
                  exercises.some((exercise) => 
                    exercise.name.toString().toLowerCase().includes(search.toString().toLowerCase())
                  )
                )
                .map(([muscleGroup, exercises]) => (
                  <details open={isOpen(muscleGroup)} ontoggle={() => toggleGroup(muscleGroup)}>
                    <summary class={"group"}>{muscleGroup}</summary>
                    {exercises
                      .filter((exercise) => exercise.name.toString().toLowerCase().includes(search.toString().toLowerCase()))
                      .map((exercise) => (
                        <div class="exercise-card" style="margin-bottom: 20px;">
                          <label for={exercise.name}>{exercise.name}</label>
                          <img 
                            src={exercise.imageUrl} 
                            alt={exercise.name} 
                            class={`exercise-image ${isSelected(exercise) ? 'selected' : ''}`} 
                            onclick={() => handleImageClick(exercise)} 
                          />
                          {exercise.videoUrl && (
                            <Button style="padding: 0 3px 0 3px" onclick={() => showPopoverVideo(exercise.videoUrl)}>Video</Button>
                          )}
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
      <div class="popoverVideo" id="popoverVideo">
        <div class="popover-content-video">
          <iframe src={popoverContent} title="Exercise Video" frameBorder="0" allowFullScreen></iframe>
          <Button style="position: absolute; z-index: 1; bottom: 0; padding-bottom: 8px;" onclick={closePopover}>Close</Button>
        </div>
      </div>
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
  .exercise-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .exercise-image {
    width: 150px; /* Größere Breite */
    height: 150px; /* Größere Höhe */
    object-fit: cover;
    margin-top: 10px;
    cursor: pointer;
    border: 2px solid transparent; /* Standard-Umrandung */
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
    visibility: hidden;
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