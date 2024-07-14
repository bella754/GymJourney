import { AppBar } from '../../components/appbar/AppBar.tsx'
import { Component } from 'uix/components/Component.ts'
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx'
import { getUser, updateUser } from '../../../backend/api/user/user.crud.ts'
import { Button } from 'common/components/Button.tsx'

type Props = {}

const user = await getUser()

const userName = $$(user.name)
const userGender = $$(user.gender)
const userAge = $$(user.age)
const userHeight = $$(user.height)
const userWeight = $$(user.weight)
const userEthnicity = $$(user.ethnicity)
const userExperience = $$(user.experience)
const userGym = $$(user.gym)

@template<Props>(() => (
  <div>
    <AppBar />
    <div class={"Body"}>
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Settings</h1>

        <div class={"user-info"}>
          <h2>User Information</h2>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.$.name}</td>
              </tr>
              <tr>
                <td>Geschlecht</td>
                <td>{user.$.gender}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{user.$.age}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{user.$.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{user.$.weight}</td>
              </tr>
              <tr>
                <td>Ethnicity</td>
                <td>{user.$.ethnicity}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>{user.$.experience}</td>
              </tr>
              <tr>
                <td>Gym</td>
                <td>{user.$.gym}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class={"edit-user-info"}>
          <h2>Edit User Information</h2>
          <div class="form">
            <div>
              <label for="name">Name</label>
              <input type="text" placeholder="Name" value={userName} id="name" />
            </div>
            <div>
              <label class={"select"} for="gender">Gender</label>
              <select value={userGender} id="gender">
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="diverse">diverse</option>
                <option value="not specified">not specified</option>
              </select>
            </div>
            <div>
              <label for="age">Age</label>
              <input type="text" placeholder="Age" value={userAge} id="age" />
            </div>
            <div>
              <label for="height">Height</label>
              <input type="text" placeholder="Height" value={userHeight} id="height" />
            </div>
            <div>
              <label for="weight">Weight</label>
              <input type="text" placeholder="Weight" value={userWeight} id="weight" />
            </div>
            <div>
              <label class={"select"} for="ethnicity">Ethnicity</label>
              <select value={userEthnicity} id="ethnicity">
                <option value="Asian">Asian</option>
                <option value="Black">Black</option>
                <option value="Hispanic">Hispanic</option>
                <option value="White">White</option>
                <option value="Nativ American">Nativ American</option>
                <option value="Other">Other</option>
                <option value="Not Specified">Not Specified</option>
              </select>
            </div>
            <div>
              <label for="experience">Experience</label>
              <select class={"select"} value={userEthnicity} id="ethnicity">
                <option value="beginer">beginer</option>
                <option value="intermediat">intermediat</option>
                <option value="advanced">advanced</option>
                <option value="expert">expert</option>
                <option value="not specified">not specified</option>

              </select>
            </div>
            <div>
              <label for="gym">Gym</label>
              <input type="text" placeholder="Gym" value={userGym} id="gym" />
            </div>
          </div>
        </div>

        <Button class={"save-button"}
          onclick={() =>
            updateUser({
              name: userName,
              gender: userGender,
              age: userAge,
              height: userHeight,
              weight: userWeight,
              ethnicity: userEthnicity,
              experience: userExperience,
              gym: userGym,
            })
          }
        >
          Save
        </Button>
      </div>
    </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
   h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #555;
    border-bottom: 2px solid #0891b2;
    padding-bottom: 5px;
  }

  .body {
    display: flex;
    width: 100%;
    min-width: 500px;
    flex-direction: center;
  }

  .user-info, .edit-user-info {
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #0891b2;
  }

  .user-info table, .edit-user-info .form {
    width: 100%px;
    min-width: 350px;
  }


  .user-info th, .user-info td {
    padding: 12px;
    text-align: left;
  }

  .edit-user-info .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .edit-user-info .form div {
    display: flex;
    flex-direction: column;
  }

  .edit-user-info label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #666;
  }

  .edit-user-info input, .edit-user-info select {
    border: 1px solid #0891b2;
    border-radius: 4px;
    padding: 8px;
    color: #333;
    font-size: 16px;
  }

  .save-button {
    background-color: #0891b2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    margin-bottom:100px;
  }
`)
export class SettingsPage extends Component<Props> {}