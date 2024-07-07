import { AppBar } from '../../components/appbar/AppBar.tsx';
import { Component } from 'uix/components/Component.ts';
import { BottomBar } from 'common/components/bottombar/BottomBar.tsx';
import { Button } from 'common/components/Button.tsx';
import { getExercises } from 'backend/api/training/training.crud.ts';

type Props = {};

const exercises = await getExercises();

const saveSelectedExercises = (selectedExercises: any) => {
  // Hier können Sie die ausgewählten Übungen speichern, z.B. in einem Zustand oder in der Datenbank
  console.log('Selected exercises:', selectedExercises);
  // Zurück zur CreateWorkoutPage navigieren und die ausgewählten Übungen übergeben
  window.location.href = `/createWorkout?exercises=${encodeURIComponent(JSON.stringify(selectedExercises))}`;
};

@template<Props>(() => (
  <div>
    <AppBar />
    <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%">
        <h2>Übungen auswählen</h2>
        {exercises.map((exercise: any) => (
          <div style="margin-bottom: 20px;">
            <input type="checkbox" id={exercise.name} value={exercise.name} />
            <label for={exercise.name}>{exercise.name}</label>
          </div>
        ))}
        <Button onclick={() => saveSelectedExercises(exercises.filter((ex: any) => ex.selected))}>Speichern</Button>
        <Button onclick={() => window.history.back()}>Zurück</Button>
      </div>
    </div>
    <BottomBar />
  </div>
))
@style(css`
  input[type="checkbox"] {
    margin-right: 10px;
  }
  label {
    font-size: 16px;
  }
`)
export class SelectExercisePage extends Component<Props> {}