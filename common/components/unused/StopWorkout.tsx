import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
    <div className="button-container">
        <button>
            <i class="stop"></i>
        </button>
    </div>
))

@style(css`
    .button-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 20px; 
    }

    button{
        border: none;
        background-color: #D9D9D9;
        border-radius: 4px;
        padding: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        position: relative;
    }

    .stop {
        align-items: center;
        background-color: red;
        border-radius: 2px;
        border: solid red;
        border-width: 2px 2px 2px 2px;
        
        padding: 10px;
        
    }
`)

export class StopWorkout extends Component<Props> {}
