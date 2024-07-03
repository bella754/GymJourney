/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */
/* import { provideRedirect } from "uix/html/entrypoint-providers.tsx"; */
import { UIX } from "uix";
import { LoginPage } from "../common/routes/login/Index.tsx";
import { IndexPage } from "common/routes/index/Index.tsx";
import { WorkoutsPage } from "common/routes/workout/Index.tsx";
import { HistoryPage } from "../common/routes/history/index.tsx";
import { SettingsPage } from "common/routes/settings/Index.tsx";
import { WorkoutPage } from "common/routes/history/workout.tsx";

UIX.Theme.registerTheme({
  name: "blank",
  mode: undefined,
  stylesheets: [],
});

UIX.Theme.useThemes("blank");

export default {
  // show backend (hybrid) rendered page on /backend
  "/": <IndexPage />,
  "/login": <LoginPage />,
  "/history": <HistoryPage />,
  "/workouts": <WorkoutsPage />,
  "/settings": <SettingsPage />,
  "/workout": <WorkoutPage />,
  // redirect / to /backend
  /* "/": provideRedirect("/backend"), */
};
