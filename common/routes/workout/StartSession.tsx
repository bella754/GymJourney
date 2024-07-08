import { Component } from 'uix/components/Component.ts'
import { getTrainingById, updateSession, updateSet, updateSetOfSession } from 'backend/api/training/training.crud.ts'
import { Card } from '../../components/card/HistoryCard.tsx'
import { Button } from 'common/components/Button.tsx'

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const session = await getTrainingById(id)

  if (!session) {
    return <div>Session not found</div>
  }

  const elapsedTimeVal = $$('')

  const updateElapsedTime = () => {
    const start = new Date(session.start)
    const end = session.end ? new Date(session.end) : new Date()
    const diff = end.getTime() - start.getTime()
    const minutes = Math.floor(diff / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)
    elapsedTimeVal.val = `${minutes}m ${seconds}s`
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

  return (
    <div>
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <h2>
              {session.training.name} {elapsedTimeVal}
            </h2>
            <Button onclick={handleEndSession}>End session</Button>
          </div>
          {session.training.$.exercises.$.map((exercise, index) => (
            <div class={'tablecontainer'}>
              <Card>
                <div>
                  <h3>
                    {index + 1}. {exercise.name}
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Set</th>
                        <th>Reps</th>
                        <th> </th>
                        <th>Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <tr>
                          <td>{setIndex + 1}</td>
                          <input
                            type="number"
                            value={set.repetitions}
                            /* @ts-ignore */
                            onchange={(e) => handleSetChange(id, exercise.name, setIndex, 'repetitions', e.target.value)}
                          />
                          <td class={'color'}>x</td>
                          <div style="display: flex; align-items: center;">
                            <input
                              type="number"
                              value={set.weight}
                              /* @ts-ignore */
                              onchange={(e) => handleSetChange(id, exercise.name, setIndex, 'weight', e.target.value)}
                            />
                            <span>kg</span>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          ))}
          <details>
            <summary>Session</summary>
            <main>{JSON.stringify(session)}</main>
          </details>
        </div>
      </div>
    </div>
  )
})
@style(css`
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
  }

  th,
  td {
    padding: 8px;
    text-align: center;
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

  details[open] summary {
    border: 1px solid #003eff;
    background: #007fff;
    color: #ffffff;
  }

  details main {
    padding: 1em 2.2em;
  }
`)
export class StartSession extends Component<Props> {}
