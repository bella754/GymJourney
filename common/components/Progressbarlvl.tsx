import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div class="progress-bar-container">
		<div class="progress-bar">
      		<div class="progress">
			  <span class="progress-text">15.LVL</span>
			</div>
		</div>

	</div>
))

@style(css`
	.progress-bar-container {
    display: flex;
    align-items: center;
    width: 100%;
  }


	.progress-bar {
    width: 350px;
    height: 30px;
    background-color: black;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .progress {
	width: 10%;
    height: 100%;
    background-color: #0D9D9D;
    transition: width 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

	.progress-text {
    color: white;
    margin-left: 10px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
  }
  }
`)


export class Progressbarlvl extends Component <Props>{}