import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
<div class="card">

	<table cellspacing="0">
	  <caption>1. Exercisename</caption>
	  <tr class = "firstrow">
	    <th>set</th>
	    <th>reps</th>
	    <th></th>
	    <th>weight</th>
	  </tr>
	  <tr>
	    <th>1</th>
	    <td>10</td>
	    <td class = "color">x</td>
	    <td>60</td>
	  </tr>
	  <tr>
	    <th>2</th>
	    <td>10</td>
	    <td class = "color">x</td>
	    <td>60</td>
	  </tr>
	  <tr>
	    <th>3</th>
	    <td>10</td>
	    <td class = "color">x</td>
	    <td>60</td>
	  </tr>
	</table>
</div>
))

@style(css`
caption{
	text-align: left;
	padding-top: 5px;
	padding-bottom: 10px;
	font-size: 20px;
	font-weight: 700;
}

.card {
	background-color: white;
	width: 310px;
	border: 2px solid lightgrey;
	border-radius: 8px;
	padding: 10px;
	display: inline-block;
	justify-content: center;
    align-items: center;
}

tr.firstrow td, tr.firstrow th {
	border-bottom: 2px solid lightgrey;
  }

table{
	width: 290px;
	margin: auto;

}

.color {
	color: #0891B2;
}

td{
	text-align: center;
}

th, td {
	padding: 8px;
	text-align: center;
}
`)


export class Table extends Component <Props>{}