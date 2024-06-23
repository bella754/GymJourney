import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>History</h2>
      </div>
    </div>
  </div>
))
@style(css``)
export class HistoryPage extends Component<Props> {}
