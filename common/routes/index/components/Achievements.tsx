import { Component } from "uix/components/Component.ts";
import { userData } from "../../../../backend/data/data.ts";

type Props = {
  id: string
};
// const achievements = [
//   {
//     title: "First Achievement",
//     description: "You have reached level 1",
//     icon: "🎉",
//   },
// ];

@template<Props>(({ props }) => {
  let achievements = userData.find(u => u.id === props.id).achievements;

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
