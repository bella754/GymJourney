import { Component } from 'uix/components/Component.ts'
import { getTrainingById, updateSession, updateSet, updateSetOfSession } from 'backend/api/training/training.crud.ts'
import { Card } from '../../components/card/HistoryCard.tsx'
import { Button } from 'common/components/Button.tsx'
import { StopWorkout } from "common/components/unused/StopWorkout.tsx"
import { Weight } from "common/routes/history/components/Weight.tsx"

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const session = await getTrainingById(id)

  if (!session) {
    return <div>Session not found</div>
  }

  const elapsedTimeVal = $$('')
  const popoverContent = $$<string | null>(null)

  const updateElapsedTime = () => {
    const start = new Date(session.start)
    const end = session.end ? new Date(session.end) : new Date()
    const diff = end.getTime() - start.getTime()
    const minutes = Math.floor(diff / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)
    elapsedTimeVal.val = `${minutes} : ${seconds}`
  }

  const intervalId = setInterval(updateElapsedTime, 1000)

  const handleEndSession = async () => {
    clearInterval(intervalId)

    await updateSession(session.id, {
      end: new Date(),
    })

    window.location.href = '/history'
  }

  const handleSetChange = async (sessionId: string, exerciseIndex: string, setIndex: number, field: 'repetitions' | 'weight', value: number) => {
    await updateSetOfSession(sessionId, exerciseIndex, setIndex, field, value)
  }

  const showPopoverImage = (content: string) => {
    popoverContent.val = content

    let element = document.getElementById("popoverImage")
    element.style.visibility = "visible"
  }

  const showPopoverVideo = (content: string) => {
    popoverContent.val = content

    let element = document.getElementById("popoverVideo")
    element.style.visibility = "visible"
  }

  const closePopover = () => {
    popoverContent.val = null

    let imagePopover = document.getElementById("popoverImage")
    let videoPopover = document.getElementById("popoverVideo")
    imagePopover.style.visibility = "hidden"
    videoPopover.style.visibility = "hidden"
  }

  return (
    <div>
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <div class={"container"}>
              <div class={"time"}> {elapsedTimeVal} </div>
              <h2>{session.training.name.toUpperCase()}</h2>
              <StopWorkout class={"endbutton"} onclick={handleEndSession}/>
            </div>
          </div>
          {session.training.$.exercises.$.map((exercise, index) => (
            <div class={'tablecontainer'}>
              <Card>
                <div>
                  <div class="headline" style="display: flex; justify-content: space-between; align-items: center; min-width: 400px">
                    <h3>
                      {index + 1}. {exercise.name}
                    </h3>
                    <div class="buttons">
                      <Button style="padding: 0 3px 0 3px" onclick={() => showPopoverImage(exercise.imageUrl)}>Image</Button>
                      <Button style="padding: 0 3px 0 3px" onclick={() => showPopoverVideo(exercise.videoUrl)}>Video</Button>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Set</th>
                        <th>Reps</th>
                        <th></th>
                        <th>KG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <tr key={setIndex}>
                          <td>{setIndex + 1}</td>
                          <td>
                            <input
                              type="number"
                              value={set.repetitions}
                              /* @ts-ignore */
                              onChange={(e) => handleSetChange(id, exercise.name, setIndex, 'repetitions', e.target.value)}
                            />
                          </td>
                          <td class={'color'}>x</td>
                          <td>
                            <input
                              type="number"
                              value={set.weight}
                              /* @ts-ignore */
                              onChange={(e) => handleSetChange(id, exercise.name, setIndex, 'weight', e.target.value)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div class="popoverImage" id="popoverImage">
        <div class="popover-content-image">
          <img class="popover-image" src={popoverContent} alt="Exercise Image" />
          <Button style="padding-top: 5px" onclick={closePopover}>Close</Button>
        </div>
      </div>
      <div class="popoverVideo" id="popoverVideo">
        <div class="popover-content-video">
          <iframe src={popoverContent} title="Exercise Video" frameBorder="0" allowFullScreen></iframe>
          <Button style="position: absolute; z-index: 1; padding-bottom: 20px;" onclick={closePopover}>Close</Button>
        </div>
      </div>
    </div>
  )
})
@style(css`
  .container {
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    justify-content: space-between;
  }
  button {
    background-color: transparent;
  }
  .endbutton {
    cursor: pointer;
    margin-right: 5%;
  }
  h2 {
    font-size: 30px;
    font-family: 'Arial Black', Gadget, sans-serif;
    font-style: italic;
    font-weight: bold;
  }
  .time {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    border-radius: 4px;
    background-color: #d9d9d9;
    width: 100px;
    height: 36px;
    margin-left: 5%;
    text-align: center; /* Center text inside div */
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
    color: lightgrey;
  }
  .Weight {
    margin-right: 20%;
  }
  th,
  td {
    padding: 8px;
    text-align: center;
    color: grey;
    font-size: 15px;
    font-weight: 100;
  }
  details {
    overflow: hidden;
    margin-top: 0.125em;
    border: 1px solid #dddddd;
    background: #ffffff;
    color: #333333;
    border-radius: 3px;
  }
  details summary {
    display: block;
    cursor: pointer;
    padding: 0.5em 0.5em 0.5em 0.7em;
    background: #ededed;
    color: #2b2b2b;
    border-radius: 3px 3px 0 0;
  }
  details:not([open]) summary:hover,
  details:not([open]) summary:focus {
    background: #f6f6f6;
    color: #454545;
  }
  .tablecontainer input[type='number'] {
    width: 40px;
    padding: 6px 8px;
    text-align: center;
    border: 1px solid #0891b2;
    border-radius: 4px;
    color: #333; /* Dark gray text */
  }
  .tablecontainer {
    margin-right: 5%;
  }
  details[open] summary {
    border: 1px solid #003eff;
    background: #007fff;
    color: #ffffff;
  }
  details main {
    padding: 1em 2.2em;
  }
  img {
    margin-left: 10%;
    margin-right: 10%;
  }
  .popoverImage {
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
  .popover-content-image {
    background: white;
    padding: 20px 20px 10px 20px;
    border-radius: 8px;
    max-width: 70%;
    max-height: 70%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .popover-content-video {
    position: relative;
    width: 80%;
    padding-top: 56%;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .popover-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .popover-content-video iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`)
export class StartSession extends Component<Props> {}
