import {Component} from "uix/components/Component.ts";

@template<Props>((props) => (
    <div>
        <button name="PlusButton">
            <img src="../PlusButton.png" alt="Plus" />
        </button>
    </div>
))

@style(css`
    button{
        background-color: transparent;
        width: 50px;
        height: 50px;
        
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img {
        width: 50px;
        height: 50px;
        color: white;
    }
`)

export class PlusButton extends Component<Props> {}
