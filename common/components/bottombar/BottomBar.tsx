import { Component } from "uix/components/Component.ts";
import { Button } from "common/components/Button.tsx";

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
        <Button>{item.name}</Button>
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
`)
export class BottomBar extends Component<Props> {}
