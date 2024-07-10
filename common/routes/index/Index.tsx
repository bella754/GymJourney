import { Component } from 'uix/components/Component.ts'
import { getUser } from '../../../backend/api/user/user.crud.ts'
import { Progressbarstats } from './components/Progressbarstats.tsx'
import { LvlProgressbar } from './components/LvlProgressbar.tsx'
import { AppBar } from '../../components/appbar/AppBar.tsx'
import { BottomBar } from '../../components/bottombar/BottomBar.tsx'
import {
  getConsistency,
  getConsistencyMilestone,
  getEndurance,
  getEnduranceMilestone,
  getStrength,
  getStrengthMilestone,
  getUserXp,
  getLevelMilestone,
  getLevel,
} from '../../../backend/data/bar_management.ts'
import { Achievements } from './components/Achievements.tsx'


let user = await getUser()

let enduranceVal = (user.progress.endurance / user.progress.enduranceMilestone) * 100

let consistencyVal = (user.progress.consistency / user.progress.consistencyMilestone) * 100

let strengthVal = (user.progress.strength / user.progress.strengthMilestone) * 100

let newLevel = user.level + 1

let levelVal = (user.xp / user.xpMilestone) * 100

let text = 'Lvl.' + newLevel

type Props = {}

// const user = await getUser()

@template<Props>(async () => (
  <div>
    <AppBar />

    <div class="container">
      <h1 class="box">{user.name}</h1>
      <img
        class="box"
        src="/@uix/src/common/public/Character.png"
        style={{
          width: '150px',
          height: '180px',
          marginLeft: '70%',
        }}
      />
    </div>
    <div class="container">
      <div class="content">
        <div>
          <LvlProgressbar
            borderRadius="0"
            text={text}
            /* progress={(userXP / userLevelMilestone) * 100} */
            progress={levelVal}
          />
        </div>
      </div>
    </div>
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 20%">
      <div style="display: flex; flex-direction: column; align-items: center;">
        {/* <h1>Hey, {user.$.name}!</h1> */}
        <h2>My Stats</h2>
        <span class="stat-row">
          <Progressbarstats
            label="Strength"
            /* progress={(userStrength / userStrengthMilestone) * 100} */
            progress={strengthVal}
          />
          <Progressbarstats
            label="Endurance"
            /* progress={(userEndurance / userEnduranceMilestone) * 100} */
            progress={enduranceVal}
          />
          {/* <LvlProgressbar max={userEnduranceMilestone} value={userEndurance}></LvlProgressbar> */}
          {/* <LvlProgressbar max={userStrengthMilestone} value={userStrength}></LvlProgressbar> */}
        </span>
        <span class="stat-row">
          {/* <LvlProgressbar max={userConsistencyMilestone} value={userConsistency}></LvlProgressbar> */}
          <Progressbarstats label="Consistency" /* progress={(userConsistency / userConsistencyMilestone) * 100} */ progress={consistencyVal} />
          {/* <Progressbarstats label="Level" progress={userLevel} /> */}
        </span>
        <h2>Achievements</h2>
        <Achievements />
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
    margin-bottom: 10px;
    margin-top: 30px;
    
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
