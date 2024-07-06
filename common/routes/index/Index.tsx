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
    <div className="container">
      <div className="content">
        <div><Progressbarstats 
          width="100%" 
          borderRadius='0' 
          marginLeft='0px' 
          text='Lvl.100' 
          progress={20} /></div>
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
  container{

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
