import { AppBar } from "../../components/appbar/AppBar.tsx";
import { LvlProgressbar } from "common/routes/index/components/LvlProgressbar.tsx";
import { Achievements } from "common/routes/index/components/Achievements.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { getEndurance, getConsistency, getStrength } from "../../../backend/data/bar_management.ts";


/////////////////////////////////////////////////////////////////////////////////////////////
// TODO: id von eingeloggten user in route params an nächste component übergeben           //
// TODO: Levelbar einfügen, aber ich bin lost, wie ich die Funktionen aus der Klasse nutze //
/////////////////////////////////////////////////////////////////////////////////////////////
let id; 

let userEndurance = getEndurance(id);
let userConsistency = getConsistency(id);
let userStrength = getStrength(id);
let userLevel; 

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>My Stats</h2>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; flex-direction: row; gap: 10px">
            <LvlProgressbar max={100} value={20} />
            <LvlProgressbar max={100} value={userStrength} />
          </div>
          <div style="display: flex; flex-direction: row; gap: 10px">
            <LvlProgressbar max={100} value={userConsistency} />
            <LvlProgressbar max={100} value={userEndurance} />
          </div>
        </div>
        <h2>Achievements</h2>
        <Achievementsbackend id={id} />
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css``)
export class IndexPage extends Component<Props> {}
