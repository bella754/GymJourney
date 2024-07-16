import { Component } from 'uix/components/Component.ts'
import { getUsers } from 'backend/api/user/user.crud.ts'

const users = await getUsers()

@template(() => (
  <div class="container">
    <h1>Users</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Experience</th>
        <th>Gym</th>
      </tr>

      {Object.keys(users).map((key) => (
        <tr>
          <td>{key}</td>
          <td>{users[key].name}</td>
          <td>{users[key].gender}</td>
          <td>{users[key].age}</td>
          <td>{users[key].height}</td>
          <td>{users[key].weight}</td>
          <td>{users[key].experience}</td>
          <td>{users[key].gym}</td>
        </tr>
      ))}
    </table>
  </div>
))
@style(css`
  .container {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    width: 100%;
    height: 100%;
  }

  table {
    width: 100%;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid black;
  }
`)
export class AdminPage extends Component {}
