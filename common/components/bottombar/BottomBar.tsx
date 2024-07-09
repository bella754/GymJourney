import { Component } from 'uix/components/Component.ts'
import { Button } from 'common/components/Button.tsx'
import { Homebutton } from 'common/components/unused/Homebutton.tsx'
import { Workoutnavigation } from 'common/components/unused/Workoutnavigation.tsx'
import { Clockbutton } from 'common/components/unused/Clockbutton.tsx'
import { Settingsbutton } from 'common/components/unused/Settingsbutton.tsx'

type Props = {}

const items = [
  { name: 'Home', href: '/', icon: <Homebutton /> },
  { name: 'History', href: '/history', icon: <Clockbutton /> },
  { name: 'Workouts', href: '/workouts', icon: <Workoutnavigation /> },
  { name: 'Settings', href: '/settings', icon: <Settingsbutton /> },
]

@template<Props>(() => (
  <ul class="container">
    {items.map((item) => (
      <a href={item.href} class="bottom-bar-button">
        <button>{item.icon}</button>
        {item.name}
      </a>
    ))}
  </ul>
))
@style(css`
  button {
    border-radius: 4px;
    padding: 2px 2px;
    border: unset;
    color: white;
    background-color: #0891b2;
  }

  button:hover {
    background-color: #0891a5;
  }

  button:active {
    background-color: #0891b2;
    box-shadow: 0 3px lightgrey;
    transform: translateY(4px);
  }

  a {
    text-decoration: none;
    font-size: 12px;
    color: #969696;
  }
  .bottom-bar-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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
    background: white;
  }
`)
export class BottomBar extends Component<Props> {}
