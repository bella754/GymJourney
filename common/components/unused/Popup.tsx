import { Component } from "uix/components/Component.ts";


@template<Props>((props) => (
  <div class="container">
    <div class="box">
      <h1>Do you want to start this exercise?</h1>
      <p>Workoutname</p>
      <div class="actions">
        <button class="cancel">Cancel</button>
        <button class="start">Start</button>
      </div>
    </div>
  </div>
))

@style(css`
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: seagreen;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    width: 500px;
    height: 200px;
    background: white;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin:0;
    padding:0;
  }

.box h1 {
  color: #333;
  padding-left: 40px;
  line-height: 1;
  font-size: 24px;
}
.box p {
  color: #333;
  padding-left: 40px;
  font-size: 20px;
  margin: 12px 0 20px;
}

  .actions {
    display: flex; /* Flexbox for buttons */
    justify-content: flex-end; /* Align buttons to the right */
    position: absolute;
    bottom: 10px; /* Position at the bottom */
    right: 10px; /* Position at the right */
  }

  .cancel {
    margin-right: 10px;
    width: 66px;
    height:44px;
    background: black;
    color:white;
    border-radius: 8px;
    cursor: pointer;
  }
  .cancel:active {
	background-color: black;
  box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}
  .start{
    margin-right: 10px;
    width: 66px;
    height:44px;
    background: #13C504;
    color:white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
.start:active {
	background-color: #13C504;
	box-shadow: 0 3px lightgrey;
	transform: translateY(4px);
}


`)




export class Popup extends Component <Props>{}