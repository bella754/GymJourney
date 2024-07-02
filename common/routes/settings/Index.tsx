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
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Settings</h1>

        <div>
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

        <div>
          <h2>Edit User Information</h2>
          <div class="form">
            <div>
              <label for="name">Name</label>
              <input type="text" placeholder="Name" value={userName} id="name" />
            </div>
            <div>
              <label for="gender">Geschlecht</label>
              <input type="text" placeholder="Gender" value={userGender} id="gender" />
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
              <label for="ethnicity">Ethnicity</label>
              <input type="text" placeholder="Ethnicity" value={userEthnicity} id="ethnicity" />
            </div>
            <div>
              <label for="experience">Experience</label>
              <input type="text" placeholder="Experience" value={userExperience} id="experience" />
            </div>
            <div>
              <label for="gym">Gym</label>
              <input type="text" placeholder="Gym" value={userGym} id="gym" />
            </div>
          </div>
        </div>

        <Button
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
    <BottomBar />
  </div>
))
@style(css`
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin: 4px;
    color: #333;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
`)
export class SettingsPage extends Component<Props> {}
