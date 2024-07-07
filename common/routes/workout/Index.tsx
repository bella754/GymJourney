import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { Card } from "../../components/card/HistoryCard.tsx";

type Props = {};

const items = [
  {
    id: 1,
    title: "Chest",
    description: "Chest workout",
  },
  {
    id: 2,
    title: "Back",
    description: "Back workout",
  },
  {
    id: 3,
    title: "Legs",
    description: "Legs workout",
  },
];

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
        <h2>Workouts</h2>
        {items.map((item) => (
          <Card>
            <h3 style="margin-bottom: 20px">{item.title}</h3>
            <p>{item.description}</p>
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
@style(css``)
export class WorkoutsPage extends Component<Props> {}
