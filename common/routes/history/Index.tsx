import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { exerciseData, trainingSessions, userData } from "../../../backend/data/data1.ts";
import { Workout, Exercise, getName, getId, getSessionsByDifficulty, TrainingSession } from "../../../backend/userManagement1.ts";
import { Card } from "../../components/card/HistoryCard.tsx";
import { Trophy } from "common/routes/history/Trophy.tsx";
import { Weight } from "common/routes/history/Weight.tsx";
import { createTrainingSession } from "../../../backend/data/session_management.ts";
import { workoutData } from "../../../backend/data/data1.ts";

// const sessionDate = new Date('2023-10-01'); 
// const sessionStart = new Date('2023-10-01T09:00:00'); 
// const sessionEnd = new Date('2023-10-01T10:30:00'); 
// const sessionWorkoutName = workoutData[0];
// const sessionDifficulty = 3; 
// createTrainingSession(sessionDate, sessionStart, sessionEnd, sessionWorkoutName, sessionDifficulty);

// const currentAmount = $$(0);
// const modalVisible = $$(false);
// currentAmount.val = 3;

export const selectedWorkout = $$(0);

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>My Workout History</h2>
        {/* @ts-ignore */}
        {trainingSessions.$.map(
          (session: {
            training: Workout;
            date: Date;
            duration: number;
            difficulty: string;
          }) => (
          <div class={"wholecard"}>
            <Card>
              <a href="https://google.com">
              <div>
                <div class={"topcard"}>
                <h3>{session.training.name}</h3>
                <div class="trophy-container">
                  <p class="trophy-number">4 Prs</p>
                  <Trophy/>
                </div>
                </div>
                <p class={"duration"}>{session.duration}h</p>
                <div class={"bottomcard"}>
                <p class={"date"}>{session.date.toLocaleDateString()}</p>
                <p class={"difficulty"}>difficulty:{session.difficulty}</p>
                <div class="weight-container">
                  <p class="weight-number">123 kg</p>
                  <Weight/>
                </div>
                <a href="/workout">
                  <button style="padding: 5px 10px;">next</button>
                </a>
                </div>
              </div>
              </a>
            </Card>
          </div>
          )
        )}
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  h2{
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 20px;
  }
  h3{
  font-size: 20px;
  margin-right: 10px;
  }
  .trophy-number {
    font-size: 14px;
    margin-right: 5px;
  }
  .wholecard{
  margin-bottom: 20px;}

  .topcard{
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  .duration{
  font-size: 15px;
  margin-bottom: 10px;
  }
  .date{
  font-size: 15px;
  }
  .difficulty{
  font-size: 15px;
  }
  .trophy-container {
    display: flex;
    align-items: center;
  }
  .bottomcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .weight-number {
    font-size: 14px;
    margin-right: 5px;
  }
  .weight-container {
    display: flex;
    align-items: center;
  }
  `)
export class HistoryPage extends Component<Props> {}