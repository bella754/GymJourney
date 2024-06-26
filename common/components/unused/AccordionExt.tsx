import {Component} from "uix/components/Component.ts";

@template<Props>((props) => (
    <div class="accordion-container">
        <button class="accordion">
            <span class="accordion-text">PPL</span> 
            <i class="arrowdown"></i>
        </button>
        <button class="workout1">Push</button>
        <button class="workout2">Pull</button>
        <button class="workout3">Legs</button>
        <button class="add-workout">+</button>
    </div>
))

@style(css`
    
 .accordion-container {
    width: 300px;
    
    text-align: center;
}

.accordion {
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    border-radius: 4px;
    border-bottom: 4px solid #D9D9D9;
    outline: none;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .accordion-text {
        position: relative;
        left: 118.75px;
        
    }

    .arrowdown {
        border: solid #0D9D9D;
        border-width: 0 2.5px 2.5px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
  
  


.panel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.workout1 {
    background-color: white;
    color: #0D9D9D;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #D9D9D9;
    border-left: 2px solid #D9D9D9;
    border-right: 2px solid #D9D9D9;
    border-radius: 4px;
    text-align: center;
    
    font-size: 15px;
    transition: 0.4s;
}
.workout2 {
    background-color: white;
    color: #0D9D9D;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #D9D9D9;
    border-left: 2px solid #D9D9D9;
    border-right: 2px solid #D9D9D9;
    border-radius: 4px;
    text-align: center;
    
    font-size: 15px;
    transition: 0.4s;
}
.workout3 {
    background-color: white;
    color: #0D9D9D;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #D9D9D9;
    border-left: 2px solid #D9D9D9;
    border-right: 2px solid #D9D9D9;
    border-radius: 4px;
    text-align: center;
    
    font-size: 15px;
    transition: 0.4s;
}

.add-workout {
    background-color: white;
    color: #0D9D9D;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    font-size: 30px;
    cursor: pointer;
    
}
`)

export class AccordionExt extends Component<Props> {}
