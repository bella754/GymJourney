/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

import { UIX } from 'uix'
import { LoginPage } from '../common/routes/login/Index.tsx'
import { IndexPage } from '../common/routes/index/Index.tsx'
import { WorkoutsPage } from '../common/routes/workout/Index.tsx'
import { CreateWorkoutPage } from '../common/routes/workout/createWorkout.tsx'
import { SelectExercisePage } from '../common/routes/workout/selectExercise.tsx'
import { HistoryPage } from '../common/routes/history/Index.tsx'
import { SettingsPage } from '../common/routes/settings/Index.tsx'
import { AdminPage } from 'common/routes/admin/Index.tsx'
import { HistoryDetailPage } from 'common/routes/history/HistoryDetailPage.tsx'
import { StartSession } from 'common/routes/workout/StartSession.tsx'

UIX.Theme.registerTheme({
  name: 'blank',
  mode: undefined,
  values: {
    bg: 'white',
    text: 'black',
  },
  stylesheets: [],
})

UIX.Theme.useThemes('blank')

export default {
  // show backend (hybrid) rendered page on /backenddd
  '/': () => <IndexPage />,
  '/login': () => <LoginPage />,
  '/history': () => <HistoryPage />,
  '/history/:id': (_, { id }: { _: any; id: string }) => <HistoryDetailPage id={id} />,
  '/workouts': () => <WorkoutsPage />,
  '/workouts/:id':
    () =>
    (_, { id }: { _: any; id: string }) =>
      <StartSession id={id} />,
  '/createWorkout': () => <CreateWorkoutPage />,
  '/selectExercise': () => <SelectExercisePage />,
  '/settings': () => <SettingsPage />,
  '/admin': () => <AdminPage />,
}
