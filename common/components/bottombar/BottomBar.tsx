import { Component } from "uix/components/Component.ts";
import { Button } from "common/components/Button.tsx";
import {Homebutton} from "common/components/unused/Homebutton.tsx";
import { Workoutnavigation } from "common/components/unused/Workoutnavigation.tsx";
import { Clockbutton } from "common/components/unused/Clockbutton.tsx";
import { Settingsbutton } from "common/components/unused/Settingsbutton.tsx";

type Props = {};

const items = [
  { name: "Home", href: "/", icon: <Homebutton/>},
  { name: "History", href: "/history" , icon: <Clockbutton/>},
  { name: "Workouts", href: "/workouts" , icon: <Workoutnavigation/> },
  { name: "Settings", href: "/settings" , icon: <Settingsbutton/>},
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
  button {
    width: 48px; 
    height: 48px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none; 
    cursor: pointer;
  }
`)
export class BottomBar extends Component<Props> {}
