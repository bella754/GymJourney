import { AppBar } from "../../components/appbar/AppBar.tsx";
import { Component } from "uix/components/Component.ts";
import { BottomBar } from "common/components/bottombar/BottomBar.tsx";
import { Button } from 'common/components/Button.tsx';

type Props = {};

const navigateToSelectExercisesPage = () => {
    window.location.href = "/selectExercise"; // Beispiel für eine einfache Umleitung
  };

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
        <h2>Workout erstellen</h2>
        <input type="text" placeholder="Name" style="margin-bottom: 20px; padding: 10px; width: 100%;" />
        <select style="margin-bottom: 20px; padding: 10px; width: 100%;">
          <option value="" disabled selected>Kategorie auswählen</option>
          <option value="PPL">PPL</option>
          <option value="Bro Split">Bro Split</option>
          <option value="Upper/Lower">Upper/Lower</option>
          <option value="Full Body">Full Body</option>
        </select>
        <p>Es gibt keine Übungen. Fügen Sie die erste hinzu</p>
        <Button onclick={navigateToSelectExercisesPage}>Übung hinzufügen</Button>
        <Button onclick={() => window.history.back()}>Zurück</Button>
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  input, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
`)
export class CreateWorkoutPage extends Component<Props> {}