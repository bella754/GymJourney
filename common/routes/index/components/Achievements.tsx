import { Component } from "uix/components/Component.ts";

type Props = {};

const achievements = [
  {
    title: "First Achievement",
    description: "You have reached level 1",
    icon: "🎉",
  },
];

@template<Props>(() => (
  <ul>
    <li>
      <h3>{achievements[0].title}</h3>
      <p>{achievements[0].description}</p>
      <span>{achievements[0].icon}</span>
    </li>
  </ul>
))
@style(css`
  ul {
    list-style: none;
    padding: 0;
  }
`)
export class Achievements extends Component<Props> {}
