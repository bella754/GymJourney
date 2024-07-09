import { Component } from "uix/components/Component.ts";
import { getUser } from "../../../../backend/api/user/user.crud.ts";

type Props = {};

@template<Props>(({ props }) => {
  let achievements = getUser().achievements;

  return (
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <span>{achievement.icon}</span>
        </li>
      ))}
    </ul>
  );
})
@style(css`
  ul {
    list-style: none;
    padding: 0;
  }
`)
export class Achievements extends Component<Props> {}