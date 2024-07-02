import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { createUser, getUser } from "../../../backend/data/user.model.ts";

type Props = {};

const [ user ] = await createUser();

/* const userName = $$(user.name);
const userGender = $$(user.gender);
const userAge = $$(user.age);
const userHeight = $$(user.height);
const userWeight = $$(user.weight);
const userEthnicity = $$(user.ethnicity);
const userExperience = $$(user.experience);
const userGym = $$(user.gym); */


@template<Props>(async () => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h1>Settings</h2>
        
        <hr />

        <h2>User Information</h2>
        {/* <h3>{user.name}</h3>
        <h3>{user.gender}</h3>
        <h3>{user.age}</h3>
        <h3>{user.height}</h3>
        <h3>{user.weight}</h3>
        <h3>{user.ethnicity}</h3>
        <h3>{user.experience}</h3>
        <h3>{user.gym}</h3> */}

        <hr />

        <h2>Edit User Information</h2>
        {/* <input type="text" placeholder="Name" value={userName} />
        <input type="text" placeholder="Gender" value={userGender} />
        <input type="text" placeholder="Age" value={userAge} />
        <input type="text" placeholder="Height" value={userHeight} />
        <input type="text" placeholder="Weight" value={userWeight} />
        <input type="text" placeholder="Ethnicity" value={userEthnicity} />
        <input type="text" placeholder="Experience" value={userExperience} />
        <input type="text" placeholder="Gym" value={userGym} /> */}

      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css``)
export class SettingsPage extends Component<Props> {}