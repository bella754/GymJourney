import { Datex } from "datex-core-legacy/datex.ts";
import { AppBar } from "../../components/appbar/AppBar.tsx";
import { LvlProgressbar } from "common/routes/index/components/LvlProgressbar.tsx";
import { Achievements } from "common/routes/index/components/Achievements.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";

const endpoint = Datex.Runtime.endpoint.main;
await Datex.Supranet.connect();

type Props = {};

@template<Props>(async () => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h1>Hey, { await endpoint.getAlias() }</h1>
        <h2>My Stats</h2>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; flex-direction: row; gap: 10px">
            <LvlProgressbar max={100} value={20} />
            <LvlProgressbar max={100} value={30} />
          </div>
          <div style="display: flex; flex-direction: row; gap: 10px">
            <LvlProgressbar max={100} value={100} />
            <LvlProgressbar max={100} value={50} />
          </div>
        </div>
        <h2>Achievements</h2>
        <Achievements />
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css``)
export class IndexPage extends Component<Props> {}
