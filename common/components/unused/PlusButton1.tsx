import {Component} from "uix/components/Component.ts";

@template<Props>((props) => (
    <div className="icon-container">
        <button></button>
    </div>
))

@style(css`
    button{
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background-color: black;
        color: white;
        border: none;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        

    }
    button::before {
        content: "+";
        position: absolute;
        
        font-weight: 600;
        

    }
`)

export class PlusButton1 extends Component<Props> {}
