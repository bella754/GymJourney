import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
	<div class="progress-bar-container" style={`width: ${props.width || '200px'};margin-left: ${props.marginLeft || '10px'}`}>
		<div class="progress-label">{props.label}</div>
    <div class="progress-bar" style={`border-radius: ${props.borderRadius || '15px'}`}>
      <div class="progress" style={`width: ${props.progress}%`}>
        <span class="progress-text">{props.text || ''}</span>
			</div>
		</div>
	</div>
))

@style(css`
	.progress-bar-container {
    display: flex;
    flex-direction: column; /* Stack children vertically */
    align items: center;
    width: 100%;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    
  }


	.progress-bar {
    height: 20px;
    background-color: black;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    

  }

  .progress {
	  width: 15%;
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
    font-size: 13px;
  }

  .progress-label {
    margin-top: 10px;
    margin-bottom: 8px;
    margin-right: 10px;
    color: #555;
    font-size: 13px;
    padding-left: 5px;

  }

`)


export class Progressbarstats extends Component <Props>{}