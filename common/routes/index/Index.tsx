import { Component } from 'uix/components/Component.ts'
import { getUser } from '../../../backend/api/user/user.crud.ts'
import { Progressbarstats } from './components/Progressbarstats.tsx'
import { LvlProgressbar } from './components/LvlProgressbar.tsx'
import { AppBar } from '../../components/appbar/AppBar.tsx'
import { BottomBar } from '../../components/bottombar/BottomBar.tsx'
import { Achievements } from './components/Achievements.tsx'
import { getEnduranceStats, getStrengthStats, getXp, getXpStats } from 'backend/api/lvl/lvl.crud.ts'
import { Hero } from 'common/routes/index/components/Hero.tsx'

const user = await getUser()

const strength = await getStrengthStats()

const endurance = await getEnduranceStats()

const xp = await getXpStats()

type Props = {}

// const user = await getUser()

@template<Props>(async () => (
  <div>
    <AppBar />
    <Hero userName={user.name} character={user.avatar} />

    <div class="container">
      <div class="content">
        <div>
          <LvlProgressbar borderRadius="0" text={xp.level.toString()} progress={xp.progress} />
        </div>
      </div>
    </div>
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; min-width: 300px; width: 90%; height: 100%; margin-bottom: 100px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>My Stats</h2>

        <Progressbarstats class={'tooltip'} label="Strength" progress={strength.progress} text={strength.level.toString()}>
          <span class="tooltiptext">Your relativ progress in pushing weights in every workout</span>
        </Progressbarstats>

        <Progressbarstats class={'tooltip'} label="Endurance" progress={endurance.progress} text={endurance.level.toString()}>
          <span class="tooltiptext">keep going to complete exercises to progress here</span>
        </Progressbarstats>

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
    margin-top: 30px
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

/* from here hover text and sign*/

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  font-size: 10px;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 100;
  top: 85%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}


`)
export class IndexPage extends Component<Props> {}
