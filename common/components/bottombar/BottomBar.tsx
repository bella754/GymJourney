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
  <ul class="bottom-bar-container">
    {items.map((item) => (
      <a href={item.href} class="bottom-bar-button">
        <button style={{ backgroundColor: window.location.pathname === item.href ? '#0D9D9D' : 'black' }}>{item.icon}</button>
        {item.name}
      </a>
    ))}
  </ul>
))
@style(css`
  button {
    border-radius: 10px;
    padding: 5px 5px;
    border: unset;
    color: white;
    background-color: transparent;
  }

  button:hover {
    background-color: #0d9d9d;
    color: #0d9d9d;
  }

  button:active {
    background-color: #0d9d9d;
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

    border-radius: 10px;
  }
  .bottom-bar-container {
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
