import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Progressbarstats } from "common/routes/index/components/Progressbarstats.tsx";
import { Achievements } from "common/routes/index/components/Achievements.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { getEndurance, getConsistency, getStrength } from "../../../backend/data/bar_management.ts";



/////////////////////////////////////////////////////////////////////////////////////////////
// TODO: id von eingeloggten user in route params an nächste component übergeben           //
// TODO: Levelbar einfügen, aber ich bin lost, wie ich die Funktionen aus der Klasse nutze //
/////////////////////////////////////////////////////////////////////////////////////////////
let id; 

/* let userEndurance = getEndurance(id);
let userConsistency = getConsistency(id);
let userStrength = getStrength(id); */
let userLevel; 

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    <div className="container">
      <div className="content">
        <h2>My Stats</h2>
        <span className="stat-row">
          <Progressbarstats label="Strength" progress={20} />
          <Progressbarstats label="Endurance" progress={20} />
        </span>
        <span className="stat-row">
          <Progressbarstats label="Consistency" progress={20} />
          <Progressbarstats label="Flexibility" progress={20} />
        </span>
        <h2>Achievements</h2>
        {/* <Achievements id={id} /> */}
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  .container{
    display: flex;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  h2{
    display: flex;
    justify-content: center;
  }
  .stat-row{
    display: flex:
    justify-content: center;
  }
  span{
    display: flex;
    justify-content: center;
   
  }
  

  
`)
export class IndexPage extends Component<Props> {}
