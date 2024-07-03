import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { Card } from '../../components/card/HistoryCard.tsx'
import { Backarrow } from './components/Backarrow.tsx'
import { getTrainingById } from 'backend/api/training/training.crud.ts'

type Props = {
  id: string
}

@template<Props>(async (_, { id }) => {
  const training = await getTrainingById(id)
  return (
    <div>
      <AppBar />
      <div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div class="headercontainer">
            <Backarrow />
            <div class={'namedate-container'}>
              <h2>{training?.training.name}</h2>
              {/* @ts-ignore */}
              <p>{new Date(training?.date).toLocaleDateString()}</p>
            </div>
            {/*  <div class={'trophyweightcontainer'}>
              <div class="trophy-container">
                <p class="trophy-number">4 Prs</p>
                <Trophy />
              </div>
              <div class="weight-container">
                <p class="weight-number">123 kg</p>
                <Weight />
              </div>*/}
          </div>
          {training?.training.$.exercises.$.map((exercise, index) => (
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
                      {Array.from({ length: exercise.sets }).map((_, setIndex) => (
                        <tr>
                          <td>{setIndex + 1}</td>
                          <td>{exercise.repetitions}</td>
                          <td class={'color'}>x</td>
                          <td>{exercise.weight} kg</td>
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
      <BottomBar />
    </div>
  )
})
@style(css`
  .tablecontainer {
    margin-bottom: 15px;
  }
  .headercontainer {
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    justify-content: space-between;
  }
  .namedate-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
  .trophy-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }
  .weight-container {
    display: flex;
    align-items: center;
    gap: 5px;
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
  }

  th,
  td {
    padding: 8px;
    text-align: center;
  }

  h3 {
    text-align: left;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`)
export class HistoryDetailPage extends Component<Props> {}
