import { Component } from "uix/components/Component.ts";

type Props = {};

const items = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  { name: "Workouts", href: "/workouts" },
  { name: "Settings", href: "/settings" },
];

@template<Props>(() => (
  <ul class="container">
    {items.map((item) => (
      <a href={item.href}>
        <li>{item.name}</li>
      </a>
    ))}
  </ul>
))
@style(css`
  .container {
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    border-top: 1px solid #ccc;
    width: 100%;
    list-style: none;
    padding: 10px 0;
    margin: 0;
  }

  li {
    cursor: pointer;
    background-color: #0d9d9d;
    padding: 10px;
    border-radius: 5px;
    margin: 0;
  }
`)
export class BottomBar extends Component<Props> {}
