import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Progressbarstats } from "common/routes/index/components/Progressbarstats.tsx";
import { Achievements } from "common/routes/index/components/Achievements.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { getEndurance, getConsistency, getStrength, getUserXp, getConsistencyMilestone, getEnduranceMilestone, getLevelMilestone, getStrengthMilestone } from "../../../backend/data/bar_management.ts";
import { LvlProgressbar } from "common/routes/index/components/LvlProgressbar.tsx";


/////////////////////////////////////////////////////////////////////////////////////////////
// TODO: id von eingeloggten user in route params an nächste component übergeben           //
// TODO: Levelbar einfügen, aber ich bin lost, wie ich die Funktionen aus der Klasse nutze //
/////////////////////////////////////////////////////////////////////////////////////////////
// let id = datex.meta.caller.main.toString(); 
let id = 1;
// console.log("user id: ", id);

let userEndurance = getEndurance(id);
let userEnduranceMilestone = getEnduranceMilestone(id);
// console.log("userEndurance: ", userEndurance);

let userConsistency = getConsistency(id);
let userConsistencyMilestone = getConsistencyMilestone(id);
// console.log("userConsistency: ", userConsistency);

let userStrength = getStrength(id);
let userStrengthMilestone = getStrengthMilestone(id);
// console.log("userStrength: ", userStrength);

let userXP = getUserXp(id); 
let userLevelMilestone = getLevelMilestone(id);
// console.log("userLevel: ", userLevel);

type Props = {};

@template<Props>(() => (
  <div>
    <AppBar />
    
    <div class="container">
      <h1 class="box">Max</h1>
      <img class="box"
        src="common/routes/index/components/Character.png"
        style={{ 
        width: '150px', 
        height: '180px', 
        marginLeft: '70%' 
      }} />
      </div>
    <div class="container">
      <div class="content">
      <div><Progressbarstats 
          width="1000px" 
          borderRadius='0' 
          marginLeft='0px' 
          text='Lvl.100' 
          progress={userXP/userLevelMilestone*100} /></div> 
        <h2>My Stats</h2>
        <span class="stat-row">
          <Progressbarstats label="Strength" progress={(userStrength/userStrengthMilestone)*100} />
          <Progressbarstats label="Endurance" progress={(userEndurance/userEnduranceMilestone)*100} />
          {/* <LvlProgressbar max={userEnduranceMilestone} value={userEndurance}></LvlProgressbar> */}
          {/* <LvlProgressbar max={userStrengthMilestone} value={userStrength}></LvlProgressbar> */}
        </span> 
        <span class="stat-row">
        {/* <LvlProgressbar max={userConsistencyMilestone} value={userConsistency}></LvlProgressbar> */}
          <Progressbarstats label="Consistency" progress={(userConsistency/userConsistencyMilestone)*100} />
          {/* <Progressbarstats label="Level" progress={userLevel} /> */}
        </span>
        <h2>Achievements</h2>
        {/* <Achievements id={id} /> */}
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  
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
  h1{
    margin-left: 10px;
    font-weight: 100000;
    font-family: 'Verdana', sans-serif;
    font-size: 50px;
  }
  .stat-row{
    display: flex:
    justify-content: center;
  }
  span{
    display: flex;
    justify-content: center;
   
  }
  img{
    margin-left: 10%;
    margin-right: 10%;
  }
  
  

  
`)
export class IndexPage extends Component<Props> {}
