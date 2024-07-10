import { Component } from 'uix/components/Component.ts'
import { getUser } from '../../../backend/api/user/user.crud.ts'
import { Progressbarstats } from './components/Progressbarstats.tsx'
import { LvlProgressbar } from './components/LvlProgressbar.tsx'
import { AppBar } from '../../components/appbar/AppBar.tsx'
import { BottomBar } from '../../components/bottombar/BottomBar.tsx'
import { Achievements } from './components/Achievements.tsx'
import { getEnduranceStats, getStrengthStats, getXp, getXpStats } from 'backend/api/lvl/lvl.crud.ts'

const user = await getUser()

const strength = await getStrengthStats()

const endurance = await getEnduranceStats()

const xp = await getXpStats()

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
          <LvlProgressbar borderRadius="0" text={xp.level.toString()} progress={xp.progress} />
        </div>
      </div>
    </div>
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%; margin-bottom: 100px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2>My Stats</h2>
        <Progressbarstats label="Strength" progress={strength.progress} text={strength.level.toString()} />
        <Progressbarstats label="Endurance" progress={endurance.progress} text={endurance.level.toString()} />
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
  img{
    margin-left: 10%;
    margin-right: 10%;
  }


/* from here hover text and sign*/

.tooltipstrength {
  position: relative;
  display: inline-block;
}

.tooltipstrength .tooltipstrengttxt {
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

.tooltipstrength:hover .tooltipstrengttxt {
  visibility: visible;
}


`)
export class IndexPage extends Component<Props> {}
