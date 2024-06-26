import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
    <div>
        <h1>WORKOUTS</h1>
    </div>
))

@style(css`
    h1 {
        margin-right: 50%;
        font-family: 'Arial Black', Gadget, sans-serif;
        font-style: italic;
        font-weight: bold;
    }
`)

export class Workouts extends Component<Props> {}
