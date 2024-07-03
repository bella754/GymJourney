import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { exerciseData, trainingSessions, userData, workoutData } from "../../../backend/data/data1.ts";
import { Workout, Exercise, getName, getId, getSessionsByDifficulty, TrainingSession } from "../../../backend/userManagement1.ts";
import { Card } from "../../components/card/HistoryCard.tsx";
import { selectedWorkout } from "./Index.tsx";
import { Trophy } from "common/routes/history/Trophy.tsx";
import { Weight } from "common/routes/history/Weight.tsx";
import { Backarrow } from "common/routes/history/Backarrow.tsx"
type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="headercontainer">
        <Backarrow/>
        <div class={"namedate-container"}>
        <h2>{workoutData[selectedWorkout].name}</h2>
        <p>datum</p>

        </div>
        <div class={"trophyweightcontainer"}>
        <div class="trophy-container">
          <p class="trophy-number">4 Prs</p>
            <Trophy/>
        </div>
        <div class="weight-container">
                  <p class="weight-number">123 kg</p>
                  <Weight/>
                </div>
        </div>
        </div>
        {/* @ts-ignore */}
        {workoutData[selectedWorkout].$.exercises.$.map(
          (exercise: Exercise, index: number) => (
          <div class={"tablecontainer"}>
            <Card>
              <div>
                <h3>{index + 1}. {exercise.name}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Set</th>
                      <th>Reps</th>
                      <th>     </th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: exercise.sets }).map((_, setIndex) => (
                      <tr>
                        <td>{setIndex + 1}</td>
                        <td>{exercise.repetitions}</td>
                        <td class={"color"}>x</td>
                        <td>{exercise.weight} kg</td>
                      </tr>
                    ))}
                  </tbody>
                  </table>
              </div>
            </Card>
          </div>
          )
        )}
      </div>
    </div>
    <BottomBar/>
  </div>
))
@style(css`
  .tablecontainer{
  margin-bottom: 15px;
  }
  .headercontainer{
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    justify-content: space-between;
  }
  .namedate-container{
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



  tr.firstrow td, tr.firstrow th {
	border-bottom: 2px solid lightgrey;
  }

table{
	width: 290px;
	margin: auto;

}

.color {
	color: #0891B2;
}

td{
	text-align: center;
}

th, td {
	padding: 8px;
	text-align: center;
}

h3{
	text-align: left;
	padding-top: 5px;
	padding-bottom: 10px;
	font-size: 20px;
	font-weight: 700;
}
  `)
export class WorkoutPage extends Component<Props> {}