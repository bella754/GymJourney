import { UIX } from "uix";
import { datexVersion, denoVersion, uixVersion } from "../backend/data.ts";
import { Clockbutton } from "../common/components/Clockbutton.tsx";
import { Clockbuttonpressed } from "common/components/Clockbuttonpressed.tsx";
import { Homebutton } from "common/components/Homebutton.tsx";
import { Homebuttonpressed } from "common/components/Homebuttonpressed.tsx";
import { Settingsbutton } from "common/components/Settingsbutton.tsx";
import { Settingsbuttonpressed } from "common/components/Settingsbuttonpressed.tsx";
import { Socialbutton } from "common/components/Socialbutton.tsx";
import { Socialbuttonpressed } from "common/components/Socialbuttonpressed.tsx";
import { Logo } from "common/components/Logo.tsx";

export default 
	<main class="hello-container">
		<section>
			<h1>Welcome to UIX &lt;3</h1>
			<p>This page was rendered on the <b>{UIX.context}</b>!</p>
			<ul>
				<li><b>UIX version:</b> {uixVersion}</li>
				<li><b>DATEX version:</b> {datexVersion}</li>
				<li><b>Deno version:</b> {denoVersion}</li>
			</ul>
			<p>To get started, take a look at our <a href="https://docs.unyt.org/manual/uix/getting-started" target="_blank">documentation</a>.</p>
		</section>
	</main>;