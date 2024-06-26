import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { userData } from "../../../backend/data/data.ts";
import { Card } from "common/components/card/Card.tsx";

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>History</h2>
        {/* @ts-ignore */}

        {userData[0].trainingsHistory.$.map(
          (training: {
            date: string;
            start: string;
            end: string;
            duration: string;
            training: string;
            difficulty: string;
          }) => (
            <Card>
              <div>
                <h3>{training.date}</h3>
                <p>
                  {training.start} - {training.end}
                </p>
                <p>Duration: {training.duration}</p>
                <p>Training: {training.training}</p>
                <p>Difficulty: {training.difficulty}</p>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css``)
export class HistoryPage extends Component<Props> {}
